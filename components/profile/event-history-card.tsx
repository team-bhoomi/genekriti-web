import dayjs from "dayjs";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

type eventStatus = "Not Started" | "Ongoing" | "Completed"
export const EventHistoryCard = ({ event }: { event: any }) => {
    // console.log(event);
    const isPresentDayBefore = dayjs().isBefore(dayjs(event.start_date))
    const isPresentDayAfter = dayjs().isAfter(dayjs(event.end_date));
    let STATUS: eventStatus = "Not Started";
    if (isPresentDayAfter) {
        STATUS = "Completed";
    } else if (isPresentDayBefore) {
        STATUS = "Not Started"
    } else {
        STATUS = "Ongoing";
    }
    return (
        <Card className="w-full border-none flex flex-col items-center justify-center">
            <div className="flex items-center justify-between w-full">
                <CardContent className="gap-1 p-4 pb-0">
                    <div className="text-xl font-semibold flex items-center gap-4">{event.event_name}
                        <Badge className="bg-primary/30 text-foreground hover:bg-primary/30">{STATUS}</Badge>
                    </div>
                    <div className="">
                        {`${event.event_description}`}
                    </div>
                    <div className="text-sm text-muted-foreground">
                        {"Organized By: "}{`${event.organizer.name}`}
                    </div>
                    <div className="text-sm text-muted-foreground">
                        {"Attendees: "}{`${event.attendees_count}`}
                    </div>
                </CardContent>
                <CardContent className="gap-1 p-4 text-sm">
                    <div className="font-medium">{dayjs(event.start_date).format("DD/MM/YYYY")}- {dayjs(event.end_date).format("DD/MM/YYYY")}</div>
                    <div className="text-muted-foreground">{event.mode}</div>
                </CardContent>
            </div>
            <div className="w-full p-4 pt-0 text-sm text-muted-foreground">
                Location: {event.address}, {event.city}, {event.country} {`(${event.pincode})`}
            </div>
        </Card>
    );
};
