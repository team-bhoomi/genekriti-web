"use client";
import { FormEvent, useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { productCategories } from "@/lib/data/categories";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { SingleImageDropzone } from "../edgestore/SingleImageDropzone";
import { useEdgeStore } from "@/lib/edgestore";
import { createVideoAction } from "@/lib/actions/vidoes/createVideoAction";
import { SingleVideoUpload } from "../edgestore/SingleVideoUpload";

export const AddVideo = ({ user_id }: { user_id: string }) => {
    const [prodCat, setProdCat] = useState<string[]>([]);
    const handleTags = (tag: string) => {
        var usedTags = [...prodCat];
        if (prodCat.includes(tag)) {
            usedTags.splice(usedTags.indexOf(tag), 1);
        } else {
            usedTags.push(tag);
        }
        setProdCat(usedTags);
    };

    const [videoFile, setVideoFile] = useState<File>();
    const [file, setFile] = useState<File>();

    const [thumbnailFile, setThumbnailFile] = useState<File>();
    const { edgestore } = useEdgeStore();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");


    const handleFileUpload = async (file: File): Promise<string> => {
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

    const handleVideoUpload = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // hanlde logic to upload video

        const videoUrl = await handleFileUpload(videoFile as File);

        if (!videoUrl) {
            alert("Please upload a video");
            return;
        }

        const thumbailUrl = await handleFileUpload(thumbnailFile as File);

        if (!thumbailUrl) {
            alert("Please upload a thumbnail image");
            return;
        }

        const formData = new FormData();
        formData.append("creator_id", user_id);
        formData.append("title", title);
        formData.append("description", description);
        formData.append("thumbnail_url", thumbailUrl);
        formData.append("video_url", videoUrl);
        formData.append("categories", JSON.stringify(prodCat));

        await createVideoAction(formData);
    }
    return (
        <form onSubmit={e => {
            handleVideoUpload(e);
        }} className="flex flex-col items-center gap-10">
            <div className="flex gap-10 w-full">
                <div className="flex flex-col gap-4 w-full">
                    <div className="flex flex-col justify-start items-start gap-2">
                        <div>Upload video</div>
                        <SingleVideoUpload
                            width={600}
                            height={200}
                            value={videoFile}
                            onChange={(file) => {
                                setVideoFile(file);
                            }}
                        />
                    </div>
                    <div className="flex flex-col justify-start items-start gap-2">
                        <div>Upload Thumbnail</div>
                        <SingleImageDropzone
                            width={600}
                            height={200}
                            value={thumbnailFile}
                            onChange={(file) => {
                                setThumbnailFile(file);
                            }}
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-4 w-full">
                    <Label className="flex flex-col gap-1 text-lg font-medium">
                        Video Title :
                        <Input
                            type="text"
                            placeholder="Video Title"
                            className="font-normal"
                            onChange={e => { setTitle(e.target.value) }}
                        />
                    </Label>
                    <Label className="flex flex-col gap-1 text-lg font-medium">
                        Video Description :
                        <textarea
                            placeholder="Video Description"
                            className="font-normal text-base rounded-md border-[1px] resize-y px-3 py-2 min-h-[150px] max-h-[250px] line-clamp-6"
                            onChange={e => { setDescription(e.target.value) }}
                        />
                    </Label>
                    <div className="flex flex-col gap-2">
                        <Label className="text-lg font-medium">
                            Video Category :
                        </Label>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="w-fit" variant="outline">
                                    Select Categories
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
                                    <Badge key={id} className="w-fit">
                                        {cat}
                                    </Badge>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
            <Button className="w-fit">Upload your video</Button>
        </form>
    );
};
