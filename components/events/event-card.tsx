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
import { Event } from "@prisma/client";
import { getRegistrantById } from "@/lib/services/events/getRegistrantById";
import { cookies } from "next/headers"
import dayjs from "dayjs";
import Image from "next/image";

export const EventCard = async ({ event }: { event: Event }) => {
    const user_id = JSON.parse(cookies().get("user")?.value!).id
    const { data } = await getRegistrantById({ event_id: event.event_id, user_id });

    var isUserRegistered = false;
    if (data) isUserRegistered = true;
    return (
        <Card>
            <CardHeader>
                {event.event_banner_url ?
                    <Image src={"/images/quiz-banner/quiz1-banner.jpg"} width={275} height={275} alt="Banner url" className="rounded-md" />
                    :
                    <div className="w-[275px] h-[130px] bg-green-300 rounded-md"></div>

                }
                <CardTitle className="w-[275px] text-wrap">{event.event_name}</CardTitle>
                <CardDescription className="w-[275px] text-pretty max-h-[40px] truncate text-sm">
                    {event.event_description}
                </CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
                <div className="flex flex-wrap items-center gap-2 text-sm font-semibold">
                    Mode: <span className="font-normal">{event.mode}</span>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-sm font-semibold">
                    Location:{" "}
                    <span className="font-normal">
                        {event.city}, {event.country}
                    </span>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-sm font-semibold">
                    Date:
                    <span className="font-normal">
                        {dayjs(event.start_date?.toDateString()).format('DD/MM/YYYY')} - {dayjs(event.end_date?.toDateString()).format('DD/MM/YYYY')}
                    </span>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-sm font-semibold">
                    Duration:
                    <span className="font-normal">{dayjs(event.end_date).diff(dayjs(event.start_date), 'day', true)} {"days"}</span>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-sm font-semibold">
                    Registered:
                    <span className="font-normal">{event.registrants_count}</span>
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
                    href={`/events/${event.event_id}`}
                    className="text-primary-foreground text-center bg-primary px-4 hover:bg-primary/90"
                >
                    View Details
                </Link>
            </CardFooter>
        </Card>
    );
};
