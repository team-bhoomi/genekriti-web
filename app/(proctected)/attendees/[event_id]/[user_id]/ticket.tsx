import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/components/ui/card";
import { getAttendeeById } from "@/lib/services/events/getAttendeeById";
import { getEventOrganizer } from "@/lib/services/events/getEventOrganizer";
import { getRegistrantById } from "@/lib/services/events/getRegistrantById";
import { markAttendence } from "@/lib/services/events/markAttendance";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import dayjs from "dayjs";
export const Ticket = async ({ event_id, registerer_id }: { event_id: string, registerer_id: string }) => {
    const { data: registrant } = await getRegistrantById({ event_id, user_id: registerer_id });
    const { getUser } = getKindeServerSession()
    const Currentuser = await getUser();
    const { data: orgnanizingOrg } = await getEventOrganizer({ event_id, org_id: Currentuser?.id as string })
    let IS_ATTENDEE = false;
    const { success, data: IsAttendeeAlready } = await getAttendeeById({ event_id, user_id: registerer_id })
    let IS_EVENT_OVER = false;
    const isPresentDateAfterEventEndDate = dayjs().isAfter(dayjs(registrant.event.end_date));
    const isPresentDateAfterStartDate = dayjs().isAfter(dayjs(registrant.event.start_date));
    if (isPresentDateAfterEventEndDate) IS_EVENT_OVER = true;

    if (IsAttendeeAlready == null) {
        if (orgnanizingOrg && isPresentDateAfterStartDate) {
            IS_ATTENDEE = true;
            await markAttendence({ user_id: registerer_id, event_id });
        }
    } else {
        IS_ATTENDEE = true;
    }


    return (
        <Card className="p-4 w-1/2 min-w-fit flex items-center gap-4 relative overflow-hidden">
            <div className="w-[200px] h-[200px] bg-red-300"></div>
            <CardContent className="p-0 w-fit">
                <CardTitle className="w-[425px] flex items-center justify-between">
                    {registrant.user.first_name}'s ticket
                    <Badge className="bg-primary/40 text-foreground font-medium tracking-wide">
                        {IS_ATTENDEE ? "Attendee" : "Registered"}
                    </Badge>
                </CardTitle>
                <CardDescription className="*:font-medium pb-4 max-w-[30rem]">
                    <div className="text-foreground text-base">
                        {registrant.event.event_name}
                    </div>
                    <span className="w-[425px] text-pretty h-[20px] truncate text-sm">
                        {registrant.event.event_description}
                    </span>
                </CardDescription>
                <div className="*:text-sm *:font-medium flex flex-col">
                    <span>Mode: {registrant.event.mode}</span>
                    <span>Location: {registrant.event.city},{registrant.event.country}</span>
                    <span>Date: {dayjs(registrant.event.start_date?.toDateString()).format('DD/MM/YYYY')} - {dayjs(registrant.event.end_date?.toDateString()).format('DD/MM/YYYY')}</span>
                </div>
            </CardContent>
            <div className="absolute top-0 right-0 rotate-90 h-full text-2xl text-muted-foreground font-semibold opacity-25 tracking-wide">
                <span>Genekriti · Genekriti</span>
            </div>
        </Card>
    );
};

// 