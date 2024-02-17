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
import { useState } from "react";

export const AIPrompt = () => {
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
    return (
        <div className="flex gap-10">
            <div className="w-full h-auto flex flex-col gap-3">
                <div className="w-full h-52 bg-blue-300 rounded-xl"></div>
                <textarea
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
            </div>
            <div className="w-full flex flex-col gap-3">
                <div className="text-2xl font-semibold">AI Response :</div>
                <div className="w-full h-[350px] p-4 bg-primary/20 outline-dashed outline-2 outline-offset-2 outline-black rounded-xl border-2 border-black">
                    this is ai response Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Aspernatur recusandae officiis illo
                    accusantium laboriosam asperiores! Eos iusto suscipit
                    expedita voluptas facilis numquam ullam non reiciendis et
                    accusantium officia, distinctio laboriosam?
                </div>
            </div>
        </div>
    );
};
