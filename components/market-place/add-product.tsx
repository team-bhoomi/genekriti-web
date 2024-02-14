"use client";
import { Label } from "@/components/ui/label";
import { Input } from "../ui/input";
import { useState } from "react";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { productCategories } from "@/lib/data/categories";
import { BadgeIndianRupee } from "lucide-react";
export const AddProduct = () => {
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
        <div className="flex flex-col gap-5 pr-5 w-full *:flex *:flex-col *:gap-1 *:text-lg *:font-medium">
            <div className="*:text-lg">
                <Label>Product Name</Label>
                <Input type="text" name="name" placeholder="Product Name" />
            </div>

            <div className="*:text-lg">
                <Label>Product Description</Label>
                <Input type="text" name="description" placeholder="Product Description" />
            </div>

            <div className="">
                <Label className="text-lg">Product Category</Label>
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
                            <Badge key={id} className="w-fit">
                                {cat}
                            </Badge>
                        ))}
                </div>
            </div>

            <div className="*:text-lg">
                <Label>Product Price</Label>
                <div className="flex items-center gap-4 *:text-lg">
                    <span className="flex items-center">
                        <BadgeIndianRupee
                            width={24}
                            height={24}
                            fill="#ffbf00"
                            color="#5C4033"
                        />
                    </span>
                    <Input
                        type="number"
                        min={10}
                        max={2000}
                        step={1}
                        placeholder="10"
                    />
                </div>
            </div>
        </div>
    );
};
