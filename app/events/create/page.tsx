import { AddEvent } from "@/components/events/add-event";

export default function Page() {
    return (
        <main className="w-full min-h-screen pt-4 pr-4 flex flex-col gap-6">
            <div className="text-xl font-semibold">Events Details</div>
            <AddEvent />
        </main>
    );
}
