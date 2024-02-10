import { prisma } from "@/lib/prisma";

export const unregisterFromEvent = async ({
  event_id,
  user_id,
}: {
  event_id: string;
  user_id: string;
}) => {
  try {
    const response = await prisma.attendees.delete({
      where: {
        id: `${event_id}-${user_id}`,
        is_present: false,
      },
    });

    const totalRegistrantsAfterUnregistration = await prisma.attendees.count({
      where: {
        event_id,
        is_present: false,
      },
    });

    const decrement_registrants_count = await prisma.event.update({
      data: {
        registrants_count: totalRegistrantsAfterUnregistration,
      },
      where: {
        event_id,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
