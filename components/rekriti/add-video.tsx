"use client";
import { useState } from "react";
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

export const AddVideo = () => {
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
        <div className="flex flex-col items-center gap-10">
            <div className="flex gap-10 w-full">
                <div className="flex flex-col gap-4 w-full">
                    <div className="w-full h-[400px] rounded-xl bg-blue-300">
                        {" "}
                        this is video upload
                    </div>
                </div>
                <div className="flex flex-col gap-4 w-full">
                    <Label className="flex flex-col gap-1 text-lg font-medium">
                        Video Title :
                        <Input
                            type="text"
                            placeholder="Video Title"
                            className="font-normal"
                        />
                    </Label>
                    <Label className="flex flex-col gap-1 text-lg font-medium">
                        Video Description :
                        <textarea
                            placeholder="Video Description"
                            className="font-normal text-base rounded-md border-[1px] resize-y px-3 py-2 min-h-[150px] max-h-[250px] line-clamp-6"
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
        </div>
    );
};
