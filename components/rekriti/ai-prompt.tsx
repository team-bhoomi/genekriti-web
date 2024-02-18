"use client";
import { productCategories } from "@/lib/data/categories";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Label } from "../ui/label";
import { FormEvent, useState } from "react";
import { addConversationAction } from "@/lib/actions/ai/addConversationAction";
import { Skeleton } from "../ui/skeleton";
import { SingleImageUpload } from "../edgestore/upload-image";
import { SingleImageDropzone } from "../edgestore/SingleImageDropzone";
import { useEdgeStore } from "@/lib/edgestore";

export const AIPrompt = ({ user_id }: { user_id: string }) => {
    const [file, setFile] = useState<File>();
    const { edgestore } = useEdgeStore();
    const [prodCat, setProdCat] = useState<string[]>([]);
    const [AIResponse, setAIResponse] = useState("");
    const [loading, setLoading] = useState(false);
    const [res, setRes] = useState("");
    const handleTags = (tag: string) => {
        var usedTags = [...prodCat];
        if (prodCat.includes(tag)) {
            usedTags.splice(usedTags.indexOf(tag), 1);
        } else {
            usedTags.push(tag);
        }
        setProdCat(usedTags);
    };
    const [prompt, setPrompt] = useState("");
    const handleImageUpload = async (file: File): Promise<string> => {
        let url = "";
        if (file) {
            const res = await edgestore.publicFiles.upload({
                file,
                onProgressChange: (progress) => {
                    console.log(progress);
                },
            });
            // console.log(res);
            url = res.url;
        }
        return url;
    }

    const hanldeAIResponse = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const resource_url = await handleImageUpload(file!);
        const formData = new FormData();
        formData.append("user_id", user_id);
        formData.append("categories", JSON.stringify(prodCat))
        formData.append("prompt", prompt);
        formData.append("resource_url", resource_url);
        const res = await addConversationAction(formData);
        console.log(res);
        setRes(res?.ai_response!);
        setLoading(false);
    }
    return (
        <div className="flex justify-between items-start gap-10">
            <form onSubmit={(e) => {
                hanldeAIResponse(e);
            }} className="w-full h-auto flex flex-col gap-3">
                {/* <div className="w-full h-52 bg-blue-300 rounded-xl"></div> */}
                <div>
                    <SingleImageDropzone
                        width={700}
                        height={200}
                        value={file}
                        onChange={(file) => {
                            setFile(file);
                        }}
                    />
                </div>
                <textarea
                    onChange={e => { setPrompt(e.target.value) }}
                    className="w-full resize-none line-clamp-2 p-3 rounded-xl"
                    placeholder="Type your prompt here..."
                ></textarea>
                <div className="flex flex-col gap-2">
                    <Label className="text-lg">Select prompt categories:</Label>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button className="w-fit" variant="outline">
                                Categories
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent side="right" className="w-56">
                            <DropdownMenuLabel>
                                Product Categories
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            {productCategories.map((value, id) => (
                                <DropdownMenuCheckboxItem
                                    onClick={() => {
                                        handleTags(value);
                                    }}
                                    checked={prodCat.includes(value)}
                                    key={id}
                                >
                                    {value}
                                </DropdownMenuCheckboxItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <div className="flex flex-wrap gap-2 pt-2">
                        {prodCat[0] != "" &&
                            prodCat.map((cat, id) => (
                                <Badge
                                    key={id}
                                    className="w-fit bg-primary/40 text-foreground"
                                >
                                    {cat}
                                </Badge>
                            ))}
                    </div>
                </div>
                <Button className="w-fit mt-5">Generate AI Response</Button>
            </form>
            {<div className="w-full flex flex-col gap-3">
                <div className="text-2xl font-semibold">AI Response :</div>
                <article className="prose w-full min-h-[350px] p-4 bg-primary/20 outline-dashed outline-2 outline-offset-2 outline-black rounded-xl border-2 border-black">
                    <div className="flex flex-col justify-start items-start gap-2">
                        {loading && "abcdefghijklmno".split("").map((item, i) => {
                            return (
                                <Skeleton className="w-full h-3 rounded-md bg-black/30" key={i} />
                            )
                        })}
                        {res && !loading ? res : null}
                    </div>
                </article>
            </div>}
        </div>
    );
};
