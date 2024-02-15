import dayjs from "dayjs";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { getEventOrganizer } from "@/lib/services/events/getEventOrganizer";
import { prisma } from "@/lib/prisma";

type eventStatus = "Not Started" | "Ongoing" | "Completed"
export const EventUserHistoryCard = async ({ event }: { event: any }) => {
  console.log(event);
  const isPresentDayBefore = dayjs().isBefore(dayjs(event.event.start_date))
  const isPresentDayAfter = dayjs().isAfter(dayjs(event.event.end_date));
  let STATUS: eventStatus = "Not Started";
  if (isPresentDayAfter) {
    STATUS = "Completed";
  } else if (isPresentDayBefore) {
    STATUS = "Not Started"
  } else {
    STATUS = "Ongoing";
  }
  const eventOrganizer = await prisma.organization.findUnique({
    where: {
      org_id: event.event.organizer_id
    }
  })

  const IS_ATTENDED = event.is_present;

  return (
    <Card className="w-full border-none flex flex-col items-center justify-center">
      <div className="flex items-center justify-between w-full">
        <CardContent className="gap-1 p-4 pb-0">
          <div className="text-xl font-semibold flex items-center gap-4">{event.event.event_name}
            <Badge className="bg-primary/30 text-foreground hover:bg-primary/30">{STATUS}</Badge>
            {IS_ATTENDED ? <Badge className="bg-sky-400/30 hover:bg-sky-400/30 text-foreground">{"Attended"}</Badge> : <Badge className="bg-sky-400/30 hover:bg-sky-400/30 text-foreground">{"Registered"}</Badge>}
          </div>
          <div className="">
            {event.event.event_description}
          </div>
          <div className="text-sm text-muted-foreground">
            {"Organized By: "}{`${eventOrganizer?.name}`}
          </div>
          <div className="text-sm text-muted-foreground">
            {"Attendees: "}{`${event.event.attendees_count}`}
          </div>
        </CardContent>
        <CardContent className="gap-1 p-4 text-sm">
          <div className="font-medium">
            {dayjs(event.event.start_date).format("DD/MM/YYYY")}- {dayjs(event.event.end_date).format("DD/MM/YYYY")}
          </div>

          <div className="text-muted-foreground">{event.event.mode}</div>
        </CardContent>
      </div>
      <div className="w-full p-4 pt-0 text-sm text-muted-foreground">
        Location: {event.event.address}, {event.event.city}, {event.event.country} {`(${event.event.pincode})`}
      </div>
    </Card>
  );
};
