"use client";
import { ArrowLeftCircle, BadgeIndianRupee, Pencil } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { ScanQR } from "./scan-qr";
import { Attendees } from "./attendees";
import { OrgAttendees } from "./org-attendees";
import { Event } from "@prisma/client"
import dayjs from "dayjs";
export const EventData = ({ event }: { event: Event }) => {
    var isOrg = false;
    var eventOver = false;
    var isUserRegistered = false;
    return (
        <div className="flex flex-col gap-3 px-6">
            <div className="flex items-center justify-between py-1">
                <Link
                    href={"/events"}
                    className="font-semibold flex items-center gap-1"
                >
                    <ArrowLeftCircle width={18} height={18} />
                    Back
                </Link>
                {isOrg && (
                    <Button
                        size={"sm"}
                        variant={"outline"}
                        className="text-base text-black flex items-center gap-1"
                    >
                        <Pencil width={18} height={18} />
                        Edit Event
                    </Button>
                )}
            </div>
            <div className="flex gap-6">
                <div className="w-full px-4 flex flex-col gap-5">
                    <div className="w-full bg-slate-700 rounded-xl h-[200px] flex items-center overflow-hidden">
                        <img src="/images/quiz-banner/quiz1-banner.jpg" />
                    </div>
                    <div className="text-5xl font-semibold">{event.event_name}</div>
                    <div className="text-muted-foreground font-medium">
                        {event.event_description}
                    </div>
                </div>
                <div className="w-full px-4 flex flex-col gap-7">
                    <div className="flex flex-col gap-2 *:text-lg *:flex *:flex-wrap *:items-center *:gap-2 *:font-semibold">
                        <div>
                            Organisers:{""}
                            <span className="font-normal">{"XYZ Company"}</span>
                        </div>
                        <div>
                            Venue:{" "}
                            <span className="font-normal">{event.address}</span>
                        </div>
                        <div>
                            Address:{" "}
                            <span className="font-normal">
                                {event.city}, {event.state}, {event.country}{" "}
                                {`(${event.pincode})`}
                            </span>
                        </div>
                        <div>
                            Date:
                            <span className="font-normal">
                                {dayjs(event.start_date?.toDateString()).format('DD/MM/YYYY')} - {dayjs(event.end_date?.toDateString()).format('DD/MM/YYYY')}
                            </span>
                        </div>
                        <div>
                            Time:
                            <span className="font-normal">
                                {`${event.start_date?.getHours()}:${event.start_date?.getMinutes()}`} - {`${event.end_date?.getHours()}:${event.start_date?.getMinutes()}`}
                            </span>
                        </div>
                        <div>
                            Duration:
                            <span className="font-normal">{dayjs(event.end_date).diff(dayjs(event.start_date), 'day', true)} {"days"}</span>
                        </div>
                        <div>
                            Registered:
                            <span className="font-normal">{event.registrants_count}</span>
                        </div>
                        <div>
                            Reward Points:
                            <BadgeIndianRupee
                                width={20}
                                height={20}
                                fill="#ffbf00"
                                color="#5C4033"
                            />{" "}
                            <span>300</span>
                        </div>
                    </div>

                    {!isUserRegistered ? (
                        <Button className="w-fit">Register Now</Button>
                    ) : (
                        <div className="flex gap-4 items-center">
                            <ScanQR />
                            <div className="text-xl text-primary font-semibold">
                                Registered
                            </div>
                        </div>
                    )}
                    {eventOver && (
                        <div className="text-xl text-primary font-semibold">
                            Event Completed
                        </div>
                    )}
                </div>
            </div>
            {isOrg && <OrgAttendees />}
            {eventOver && <Attendees />}
        </div>
    );
};
