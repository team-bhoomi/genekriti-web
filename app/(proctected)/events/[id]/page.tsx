import { EventData } from "@/components/events/event-data";
import { getEventById } from "@/lib/services/events/getEventById";

interface EventPagePramams {
    params: {
        id: string
    }
}
export default async function Page({ params }: EventPagePramams) {
    const { success, data } = await getEventById({ event_id: params.id })
    return (
        <div>
            <EventData event={data!} />
        </div>
    );
}
