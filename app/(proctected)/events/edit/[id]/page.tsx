import { prisma } from "@/lib/prisma";
import { EditEvent } from "./edit-event-form";

interface EditEventPageParams {
  params: {
    id: string
  }
}
export default async function EditEventPage({ params }: EditEventPageParams) {
  const event_id = params.id;
  const event = await prisma.event.findUnique({ where: { event_id } });
  return (
    <div className="w-full min-h-screen pt-4 pr-4 flex flex-col gap-6">
      <div className="text-xl font-semibold">Update Event</div>

      <EditEvent event={event!} />
    </div>
  )
}