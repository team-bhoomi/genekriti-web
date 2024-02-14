import { ArrowLeftCircle, BadgeIndianRupee, Pencil, Trash2Icon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { ScanQR } from "./scan-qr";
import { Attendees } from "./attendees";
import { EventRegistrants } from "./event-registrants";
import { Event, Organization } from "@prisma/client"
import dayjs from "dayjs";
import { getEventOrganizer } from "@/lib/services/events/getEventOrganizer";
import { getRegistrantById } from "@/lib/services/events/getRegistrantById";
import { getCurrentUserId } from "@/lib/constants/getCurrentUserId";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { deleteEventAction } from "@/lib/actions/events/deleteEventAction";
import { EditEventButton } from "./edit-event-button";
import { EventRegisterButton } from "./register-button";
import ShowPassButton from "./show-pass-button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";

type EventDataType = Event & { organizer: { name: string } }
export const EventData = async ({ event }: { event: EventDataType }) => {
    let isOrganizingOrg = false;
    let eventOver = false;
    let isUserRegistered = false;

    const { success, data: orgData } = await getEventOrganizer({ org_id: event.organizer_id, event_id: event.event_id })

    const { getUser } = getKindeServerSession()
    const user = await getUser();

    orgData.organizer.org_id === user?.id ? isOrganizingOrg = true : isOrganizingOrg = false;
    const isPresentDateAfterEventEndDate = dayjs().isAfter(dayjs(event.end_date));
    if (isPresentDateAfterEventEndDate) eventOver = true;


    const { data: registrantData } = await getRegistrantById({ event_id: event.event_id, user_id: await getCurrentUserId() })

    if (registrantData) isUserRegistered = true;

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
                {isOrganizingOrg && (
                    <div className="flex justify-start items-center gap-3">
                        <EditEventButton event_id={event.event_id} />

                        <DeleteEventButton event_id={event.event_id} />
                    </div>
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
                            {/* //@ts-ignore */}
                            <span className="font-normal">{event.organizer.name}</span>
                        </div>
                        <div>
                            Mode:{""}
                            {/* //@ts-ignore */}
                            <span className="font-normal">{event.mode}</span>
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
                            <span className="font-normal">{Math.floor(dayjs(event.end_date).diff(dayjs(event.start_date), 'day', true))} {"days"}</span>
                        </div>
                        <div>
                            Registered:
                            <span className="font-normal">{event.registrants_count}</span>
                        </div>
                        <div>
                            Attendees:
                            <span className="font-normal">{event.attendees_count}</span>
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

                    {!isOrganizingOrg ? (eventOver ? <div>{"The event is completed"}</div> : !isUserRegistered && <EventRegisterButton event_id={event.event_id} user_id={user?.id as string} />) : null}
                    {isOrganizingOrg ? (eventOver ? "Event completed successfully" : "You are hosting this event") : null}

                    {isUserRegistered && !isOrganizingOrg && <ShowPassButton event_id={event.event_id} user_id={user?.id as string} />}
                </div>
            </div>
            {isOrganizingOrg && <EventRegistrants event_id={event.event_id} />}
            {isOrganizingOrg && <Attendees event_id={event.event_id} />}
        </div>
    );
};


const DeleteEventButton = ({ event_id }: { event_id: string }) => {
    return (

        <Dialog>
            <DialogTrigger asChild>
                <Button
                    size={"sm"}
                    variant={"outline"}
                    className="text-base text-black flex items-center gap-1"
                >
                    <Trash2Icon width={18} height={18} />
                    Delete Event
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Delete Event</DialogTitle>
                    <DialogDescription>
                        Are you sure you want to delete the event?
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <form action={deleteEventAction}>
                        <input name="event_id" defaultValue={event_id} className="hidden" />

                        <Button variant={"destructive"}>Delete</Button>
                    </form>
                </DialogFooter>
            </DialogContent>
        </Dialog>

    )
}