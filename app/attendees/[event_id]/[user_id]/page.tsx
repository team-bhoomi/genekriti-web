import { Card } from "@/components/ui/card";
import { Ticket } from "./ticket";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

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

        <main className={cn("w-screen h-screen bg-gradient-to-r from-[#d4fc79] to-[#96e6a1] flex justify-center items-center", poppins.className)}>
            <Ticket event_id={event_id} registerer_id={registerer_id} />
        </main>
    );
}
