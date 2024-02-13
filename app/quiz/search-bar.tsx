"use client";
import { XCircle } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { FilterBar } from "./filter-bar";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

export const SearchBar = () => {
    const [search, setSearch] = useState(useSearchParams().get("search") || "");

    return (
        <div className="sticky top-[96px] left-0 bg-accent flex flex-col items-center gap-3 pt-4 pb-3">
            <div className="flex w-full items-center">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        window.location.href = `/quiz?search=${search}`;
                    }}
                    className="w-full"
                >
                    <Input
                        type="text"
                        placeholder="Search..."
                        value={search}
                        name="search"
                        className="w-full"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </form>
                <Button
                    variant="ghost"
                    onClick={() => {
                        window.location.href = "/quiz";
                    }}
                >
                    <XCircle stroke="#800000" />
                </Button>
            </div>
            <FilterBar />
        </div>
    );
};
