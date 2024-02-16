import { Card } from "@/components/ui/card";
import { Ticket } from "./ticket";
import { cn } from "@/lib/utils";

interface AttendeePageParams {
    params: {
        event_id: string;
        user_id: string;
    };
}
export default function Page({ params }: AttendeePageParams) {
    const event_id = params.event_id;
    const registerer_id = params.user_id;
    return (
        <main
            className={cn(
                "fixed top-0 left-0 z-20 w-screen h-screen flex justify-center items-center"
            )}
        >
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_2.5px,transparent_1px)] [background-size:20px_20px]"></div>
            <Ticket event_id={event_id} registerer_id={registerer_id} />
        </main>
    );
}
