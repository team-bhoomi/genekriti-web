"use client";
import { useState } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { BadgeIndianRupee } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
export const FilterBar = () => {
    const [pointsRange, setPointsRange] = useState([500]);
    const [eventMode, setEventMode] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const handleRewards = (value: number) => {
        // window.location.href = `/market-place/?reward=${value}`;
    };

    const handleMode = (value: string) => {
        // window.location.href = `/market-place/?mode=${value}`;
    };

    const handleStartDate = (value: string) => {
        let date = value.split("-");
        value = date[2] + "/" + date[1] + "/" + date[0];
        // window.location.href = `/market-place/?start-date=${value}`;
    };

    const handleEndDate = (value: string) => {
        let date = value.split("-");
        value = date[2] + "/" + date[1] + "/" + date[0];
        // window.location.href = `/market-place/?start-date=${value}`;
    };

    return (
        <div className="w-full flex items-center gap-2">
            <div className="text-sm font-medium">Filter:</div>
            <div className="flex items-center gap-3">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">Reward Points</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>
                            Set min reward points:
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <div className="px-2 py-1.5 flex gap-1 items-center">
                            <BadgeIndianRupee
                                width={18}
                                height={18}
                                fill="#ffbf00"
                                color="#5C4033"
                            />{" "}
                            {pointsRange[0]}
                        </div>
                        <Slider
                            defaultValue={[500]}
                            max={2000}
                            step={10}
                            min={10}
                            className="w-full p-3"
                            onValueChange={(e) => setPointsRange(e)}
                        />
                        <Button
                            variant={"secondary"}
                            className="text-sm bg-primary/40 font-semibold w-full mt-3"
                            onClick={() => handleRewards(pointsRange[0])}
                        >
                            Apply
                        </Button>
                    </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">Mode</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>
                            Select event mode:
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <div className="px-2 py-1 flex items-center justify-center gap-5">
                            <Label
                                htmlFor="offline"
                                className="flex items-center gap-1 text-lg"
                            >
                                <Input
                                    type="radio"
                                    id="offline"
                                    name="mode"
                                    value={"offline"}
                                    className="w-fit"
                                    onChange={(e) =>
                                        setEventMode(e.target.value)
                                    }
                                />
                                Offline
                            </Label>
                            <Label
                                htmlFor="online"
                                className="flex items-center gap-1 text-lg"
                            >
                                <Input
                                    type="radio"
                                    id="online"
                                    name="mode"
                                    value={"online"}
                                    className="w-fit"
                                    onChange={(e) =>
                                        setEventMode(e.target.value)
                                    }
                                />
                                Online
                            </Label>
                        </div>
                        <Button
                            variant={"secondary"}
                            className="text-sm bg-primary/40 font-semibold w-full mt-3"
                            onClick={() => handleMode(eventMode)}
                        >
                            Apply
                        </Button>
                    </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">Start Date</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>
                            Select start date:
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <div className="px-2 py-1 flex items-center justify-center gap-5">
                            <Input
                                type="date"
                                className="w-fit"
                                onChange={(e) => setStartDate(e.target.value)}
                            />
                        </div>
                        <Button
                            variant={"secondary"}
                            className="text-sm bg-primary/40 font-semibold w-full mt-3"
                            onClick={() => handleStartDate(startDate)}
                        >
                            Apply
                        </Button>
                    </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">End Date</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>Select end date:</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <div className="px-2 py-1 flex items-center justify-center gap-5">
                            <Input
                                type="date"
                                className="w-fit"
                                onChange={(e) => setEndDate(e.target.value)}
                            />
                        </div>
                        <Button
                            variant={"secondary"}
                            className="text-sm bg-primary/40 font-semibold w-full mt-3"
                            onClick={() => handleEndDate(endDate)}
                        >
                            Apply
                        </Button>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
};
