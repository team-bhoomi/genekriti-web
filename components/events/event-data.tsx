"use client";
import { ArrowLeftCircle, BadgeIndianRupee, Pencil } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { ScanQR } from "./scan-qr";
import { Attendees } from "./attendees";
import { OrgAttendees } from "./org-attendees";

export const EventData = () => {
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
                    <div className="w-full bg-slate-700 rounded-xl h-[200px]"></div>
                    <div className="text-5xl font-semibold">Event Title</div>
                    <div className="text-muted-foreground font-medium">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Omnis neque velit, ipsum ex deleniti, quia
                        necessitatibus possimus assumenda voluptates, molestiae
                        aspernatur corporis esse quam totam eum id dicta
                        doloremque nesciunt. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Fugiat, quae at! Doloribus
                        est saepe quae voluptate aut dignissimos.
                    </div>
                </div>
                <div className="w-full px-4 flex flex-col gap-7">
                    <div className="flex flex-col gap-2 *:text-lg *:flex *:flex-wrap *:items-center *:gap-2 *:font-semibold">
                        <div>
                            Organisers:{" "}
                            <span className="font-normal">{"XYZ Company"}</span>
                        </div>
                        <div>
                            Address:{" "}
                            <span className="font-normal">{"Hall no 22"}</span>
                        </div>
                        <div>
                            Venue:{" "}
                            <span className="font-normal">
                                {"City"}, {"State"}, {"Country"},{" "}
                                {"101010(Pincode)"}
                            </span>
                        </div>
                        <div>
                            Date:
                            <span className="font-normal">
                                {"00/00/0000"} - {"00/00/0000"}
                            </span>
                        </div>
                        <div>
                            Time:
                            <span className="font-normal">
                                {"00:00"} - {"00:00"}
                            </span>
                        </div>
                        <div>
                            Duration:
                            <span className="font-normal">5 days</span>
                        </div>
                        <div>
                            Registered:
                            <span className="font-normal">30</span>
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
