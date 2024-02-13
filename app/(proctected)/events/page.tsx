import { EventCard } from "@/components/events/event-card";
import { SearchBar } from "./search-bar";
import { getAllEvents } from "@/lib/services/events/getAllEvents";

export const dynamic = "force-dynamic";

export default async function Page() {
    const response = await getAllEvents();

    return (
        <main>
            <SearchBar />
            <div className="flex flex-wrap gap-10 px-4">
                {response.data?.map((event, index) => {
                    return (
                        <EventCard event={event} key={index} />
                    )
                })}
            </div>
        </main>
    );
}
