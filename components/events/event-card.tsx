import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";
import Link from "next/link";
import { BadgeIndianRupee } from "lucide-react";
import { Badge } from "../ui/badge";

export const EventCard = () => {
    var isUserRegistered = true;
    return (
        <Card>
            <CardHeader>
                <div className="w-[275px] h-[130px] bg-green-300 rounded-md"></div>
                <CardTitle>Event Title</CardTitle>
                <CardDescription className="w-[275px] text-pretty h-[40px] truncate text-sm">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Excepturi nisi hic nulla, similique animi, quidem totam
                    voluptatibus autem accusantium vero, exercitationem eveniet
                    quisquam obcaecati saepe labore laboriosam eius! Laudantium,
                    eum!
                </CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
                <div className="flex flex-wrap items-center gap-2 text-sm font-semibold">
                    Mode: <span className="font-normal">{"Online"}</span>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-sm font-semibold">
                    Location:{" "}
                    <span className="font-normal">
                        {"City Name"}, {"Country Name"}
                    </span>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-sm font-semibold">
                    Date:
                    <span className="font-normal">
                        {"00/00/0000"} - {"00/00/0000"}
                    </span>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-sm font-semibold">
                    Duration:
                    <span className="font-normal">5 days</span>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-sm font-semibold">
                    Registered:
                    <span className="font-normal">30</span>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-sm font-semibold">
                    Reward Points:
                    <span className="flex items-center gap-1">
                        <BadgeIndianRupee
                            width={18}
                            height={18}
                            fill="#ffbf00"
                            color="#5C4033"
                        />{" "}
                        300
                    </span>
                </div>
            </CardContent>
            {isUserRegistered && (
                <Badge className="mx-4 my-2 bg-primary/35 font-medium text-black">
                    You are Registered
                </Badge>
            )}
            <CardFooter className="flex justify-between gap-2 *:w-full *:rounded-md *:text-sm *:font-medium *:py-2">
                <Link
                    href={"/events/abc"}
                    className="text-primary-foreground text-center bg-primary px-4 hover:bg-primary/90"
                >
                    View Details
                </Link>
            </CardFooter>
        </Card>
    );
};
