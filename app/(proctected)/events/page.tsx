import { EventCard } from "@/components/events/event-card";
import { SearchBar } from "./search-bar";
import { getAllEvents } from "@/lib/services/events/getAllEvents";
import Link from "next/link";
import { CalendarPlus } from "lucide-react";
import { getOrgById } from "@/lib/services/org/getOrgById";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export default async function Page() {
    const response = await getAllEvents();
    const user_id = JSON.parse(cookies().get("user")?.value!).id;
    var { data } = await getOrgById({ org_id: user_id })
    let isUserOrg = false;
    if (data) {
        isUserOrg = true;
    }
    return (
        <main>
            <div className="sticky top-[56px] left-0 bg-accent flex items-center justify-between w-full">
                <div className="text-4xl font-semibold">Events</div>
                {isUserOrg && (
                    <Link
                        href={"/events/create"}
                        className="group flex items-center gap-2 bg-primary/30 rounded-md text-center font-medium px-4 py-2 transition hover:bg-primary/90 hover:text-white"
                    >
                        <CalendarPlus width={18} height={18} />
                        Add New Event
                    </Link>
                )}
            </div>
            <SearchBar />
            <div className="flex flex-wrap gap-10 px-4">
                {response.data?.reverse().map((event, index) => {
                    return (
                        <EventCard event={event} key={index} />
                    )
                })}
            </div>
        </main>
    );
}
