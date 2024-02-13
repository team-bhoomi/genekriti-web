import { Card } from "@/components/ui/card";
import { Ticket } from "./ticket";

interface AttendeePageParams {
    params: {
        event_id: string;
        user_id: string;
    };
}
export default function Page({ params }: AttendeePageParams) {
    return (
        <main className="w-screen h-screen bg-gradient-to-r from-[#d4fc79] to-[#96e6a1] flex justify-center items-center">
            <Ticket />
        </main>
    );
}
