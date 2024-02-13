import { AttendeesType, getAllAttendees } from "@/lib/services/events/getAllAttendees";
import { Button } from "../ui/button";
import Link from "next/link";
import dayjs from "dayjs";

export const Attendees = async ({ event_id }: { event_id: string }) => {
    const { data } = await getAllAttendees({ event_id });
    if (data?.length == 0) {
        return null
    }
    return (
        <div className="flex flex-col gap-5 p-4 w-full">
            <div className="text-2xl font-semibold">Event Attendees</div>
            <div className="flex flex-wrap gap-6">
                {data ? data.map((attendee, i) => {
                    return (
                        <AttendeeCard key={i} attendee={attendee} />
                    )
                }) : "No attendees"}
            </div>
        </div>
    );
};

const AttendeeCard = ({ attendee }: { attendee: AttendeesType }) => {
    const user_id = attendee.id;
    const event_id = attendee.attendees[0].event_id;
    return (
        <div className="w-[200px] h-[200px] rounded-xl bg-yellow-400 flex flex-col items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-red-400 mb-1"></div>
            <div className="text-xl font-semibold">{`${attendee.first_name} ${attendee.last_name}`}</div>
            <div className="flex flex-col items-center pb-1">
                Registered on: <span>{dayjs(attendee.attendees[0].registered_at).format("DD/MM/YYYY")}</span>
            </div>
            <Link href={`/attendee/${event_id}/${user_id}`}>
                <Button>Show Pass</Button>
            </Link>
        </div>
    );
};
