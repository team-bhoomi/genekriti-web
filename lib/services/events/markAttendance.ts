/**
 * USE CASES
 * 1. Mark attendance of an registrant
 */
import { serviceMessages } from "@/lib/constants/serviceMessage";
import { prisma } from "@/lib/prisma";

export const markAttendence = async ({
  user_id,
  event_id,
}: {
  user_id: string;
  event_id: string;
}): Promise<{ error: unknown; success: boolean; message: string }> => {
  try {
    const response = await prisma.attendees.update({
      data: {
        is_present: true,
      },
      where: {
        id: `${event_id}-${user_id}`,
      },
    });

    const attendeeCountAfterMarking = await prisma.attendees.count({
      where: {
        is_present: true,
        event_id,
      },
    });

    const updateAttendeeCount = await prisma.event.update({
      data: {
        attendees_count: attendeeCountAfterMarking,
      },
      where: {
        event_id,
      },
    });
    return {
      success: true,
      error: null,
      message: serviceMessages.EVENT_ATTENDEE_MARKED_SUCCESS,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error,
      message: serviceMessages.EVENT_ATTENDEE_MARKED_FAILURE,
    };
  }
};
