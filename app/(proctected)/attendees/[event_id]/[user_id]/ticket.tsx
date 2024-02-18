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
export const Ticket = async ({
    event_id,
    registerer_id,
}: {
    event_id: string;
    registerer_id: string;
}) => {
    const { data: registrant } = await getRegistrantById({
        event_id,
        user_id: registerer_id,
    });
    const { getUser } = getKindeServerSession();
    const Currentuser = await getUser();
    const { data: orgnanizingOrg } = await getEventOrganizer({
        event_id,
        org_id: Currentuser?.id as string,
    });
    let IS_ATTENDEE = false;
    const { success, data: IsAttendeeAlready } = await getAttendeeById({
        event_id,
        user_id: registerer_id,
    });
    let IS_EVENT_OVER = false;
    const isPresentDateAfterEventEndDate = dayjs().isAfter(
        dayjs(registrant.event.end_date)
    );
    const isPresentDateAfterStartDate = dayjs().isAfter(
        dayjs(registrant.event.start_date)
    );
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
        <Card className="p-4 w-[30rem] min-w-fit flex justify-center items-center gap-4 bg-gradient-to-r from-[#d4fc79] to-[#96e6a1] relative overflow-hidden">
            {/* <div className="w-[200px] h-[200px] bg-accent rounded-md"></div> */}
            <CardContent className="p-0 w-fit">
                <CardTitle className="w-[375px] flex items-center justify-between">
                    {registrant.user.first_name}'s ticket
                    <Badge className="bg-accent text-foreground font-medium tracking-wide">
                        {IS_ATTENDEE ? "Attendee" : "Registered"}
                    </Badge>
                </CardTitle>
                <CardDescription className="*:font-medium *:text-foreground pb-4 max-w-[30rem]">
                    <div className="text-base">
                        {registrant.event.event_name}
                    </div>
                    <span className="w-[425px] h-[20px] line-clamp-1 text-sm">
                        {registrant.event.event_description}
                    </span>
                </CardDescription>
                <div className="*:text-sm *:font-medium flex flex-col">
                    <span>Mode: {registrant.event.mode}</span>
                    <span>
                        Location: {registrant.event.city},
                        {registrant.event.country}
                    </span>
                    <span>
                        Date:{" "}
                        {dayjs(
                            registrant.event.start_date?.toDateString()
                        ).format("DD/MM/YYYY")}{" "}
                        -{" "}
                        {dayjs(
                            registrant.event.end_date?.toDateString()
                        ).format("DD/MM/YYYY")}
                    </span>
                </div>
            </CardContent>
            <div className="absolute top-0 right-0 rotate-90 h-full text-2xl text-card font-semibold opacity-50 tracking-wide">
                <span>Genekriti · Genekriti</span>
            </div>
        </Card>
    );
};

//
