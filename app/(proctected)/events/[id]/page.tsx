import { EventData } from "@/components/events/event-data";
import { getEventById } from "@/lib/services/events/getEventById";
import { CalendarPlus } from "lucide-react";
import Link from "next/link";

interface EventPagePramams {
    params: {
        id: string
    }
}
export default async function Page({ params }: EventPagePramams) {
    const { success, data } = await getEventById({ event_id: params.id })
    var isOrg = true;
    return (
        <div>
            <div className="sticky top-[56px] left-0 bg-accent flex items-center justify-between w-full">
                <div className="text-4xl font-semibold">Events</div>
            </div>
            <EventData event={data!} />
        </div>
    );
}
