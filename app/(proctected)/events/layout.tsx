import { CalendarPlus } from "lucide-react";
import Link from "next/link";

export default function EventsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    var isOrg = false;
    return (
        <main className="w-full min-h-screen pr-4 flex flex-col">
            <div className="sticky top-[56px] left-0 bg-accent flex items-center justify-between w-full">
                <div className="text-4xl font-semibold">Events</div>
                {isOrg && (
                    <Link
                        href={"/events/create"}
                        className="group flex items-center gap-2 bg-primary/30 rounded-md text-center font-medium px-4 py-2 transition hover:bg-primary/90 hover:text-white"
                    >
                        <CalendarPlus width={18} height={18} />
                        Add New Event
                    </Link>
                )}
            </div>
            {children}
        </main>
    );
}
