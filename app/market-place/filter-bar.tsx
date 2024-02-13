"use client";
import { Dispatch, SetStateAction, useState } from "react";

import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { productCategories } from "@/lib/data/categories";
export const FilterBar = ({
    updatedTags,
    setUpdatedTags,
}: {
    updatedTags: string[];
    setUpdatedTags: Dispatch<SetStateAction<string[]>>;
}) => {
    const filterTags = ["All"].concat(productCategories);
    const [priceRange, setPriceRange] = useState([500]);

    const handlePrice = (value: number) => {
        // window.location.href = `/market-place/?price=${value}`;
    };

    const handleTags = (tag: string) => {
        var usedTags = [...updatedTags];
        if (tag == "all") {
            usedTags = ["All"];
            window.location.href = `/market-place/`;
        } else if (updatedTags.includes(tag)) {
            usedTags.splice(usedTags.indexOf(tag), 1);
            const newFilterTags = Array.from(
                new Set(usedTags.filter((item) => item !== tag))
            );
            // window.location.href = `/market-place/?product-categories=${newFilterTags.join(
            //     ","
            // )}`;
        } else {
            if (usedTags.indexOf("All") != -1)
                usedTags.splice(usedTags.indexOf("All"), 1);
            usedTags.push(tag);

            const newFilterTags = Array.from(new Set([...usedTags, tag]));
            // window.location.href = `/market-place/?product-categories=${newFilterTags.join(
            //     ","
            // )}`;
        }
        setUpdatedTags(usedTags);
    };

    return (
        <div className="w-full flex items-center gap-2">
            <div className="text-sm font-medium">Filter:</div>
            <div className="flex items-center gap-3">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">Price</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>
                            Set min price margin:
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <div className="px-2 py-1.5 flex gap-1 items-center">
                            Rs {priceRange[0]}
                        </div>
                        <Slider
                            defaultValue={[500]}
                            max={2000}
                            min={10}
                            step={10}
                            className="w-full p-3"
                            onValueChange={(e) => setPriceRange(e)}
                        />
                        <Button
                            variant={"secondary"}
                            className="text-sm bg-primary/40 font-semibold w-full mt-3"
                            onClick={() => handlePrice(priceRange[0])}
                        >
                            Apply
                        </Button>
                    </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">Categories</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>
                            Product Categories
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {filterTags.map((value, id) => (
                            <DropdownMenuCheckboxItem
                                onClick={() => {
                                    handleTags(value.toLowerCase());
                                }}
                                checked={updatedTags.includes(value)}
                                key={id}
                            >
                                {value}
                            </DropdownMenuCheckboxItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
};
