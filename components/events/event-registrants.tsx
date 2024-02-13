import { RegistrantsType, getAllRegistrants } from "@/lib/services/events/getAllRegistrants";
import dayjs from "dayjs";
import Link from "next/link";
import { Button } from "../ui/button";

export const EventRegistrants = async ({ event_id }: { event_id: string }) => {
    const { data } = await getAllRegistrants({ event_id })
    if (data?.length == 0) {
        return null
    }
    return (
        <div className="flex flex-col gap-5 p-4 w-full">
            <div className="text-2xl font-semibold">
                {"Registrants"}
            </div>
            <div className="flex flex-wrap gap-6">
                {data ? data.map((registrant, i) => {
                    return (
                        <EventRegistrantsCard registrant={registrant} key={i} />
                    )
                }) : "No one registered"}
            </div>
        </div>
    );
};

const EventRegistrantsCard = ({ registrant }: { registrant: RegistrantsType }) => {
    const event_id = registrant.attendees[0].event_id
    const user_id = registrant.id;
    return (
        <div className="w-[200px] h-[200px] rounded-xl bg-[#87ceeb] flex flex-col items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-red-400 mb-1"></div>
            <div className="text-xl font-semibold">{`${registrant.first_name} ${registrant.last_name}`}</div>
            <div className="flex flex-col items-center pb-1">
                Registered on: <span>{dayjs(registrant.attendees[0].registered_at).format("DD/MM/YYYY")}</span>
            </div>
            <Link href={`/attendee/${event_id}/${user_id}`}>
                <Button>Scan QR</Button>
            </Link>
        </div>
    );
};
