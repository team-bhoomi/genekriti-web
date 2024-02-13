import { CalendarPlus } from "lucide-react";
import Link from "next/link";

export default function EventsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="w-full min-h-screen pr-4 flex flex-col">
            {children}
        </main>
    );
}
