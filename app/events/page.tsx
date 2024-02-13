import { EventCard } from "@/components/events/event-card";
import { SearchBar } from "./search-bar";

export const dynamic = "force-dynamic";

export default function Page() {
    return (
        <main>
            <SearchBar />
            <div className="flex flex-wrap gap-10 px-4">
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
            </div>
        </main>
    );
}
