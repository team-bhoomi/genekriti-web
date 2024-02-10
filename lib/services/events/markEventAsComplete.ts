/**
 * USE CASE
 * 1. To automatically mark an event as completed when the end date of the event is passed
 */
import { serviceMessages } from "@/lib/constants/serviceMessage";
import { prisma } from "@/lib/prisma";
import { Event } from "@prisma/client";

export const markEventAsCompleted = async ({
  event_id,
}: {
  event_id: string;
}): Promise<{
  data: Event | null;
  error: unknown;
  success: boolean;
  message: string;
}> => {
  try {
    const resposne = await prisma.event.update({
      data: {
        is_completed: true,
      },
      where: {
        event_id,
      },
    });
    return {
      data: resposne,
      error: null,
      message: serviceMessages.EVENT_COMPLETE_SUCCESS,
      success: true,
    };
  } catch (error) {
    console.log(error);
    return {
      data: null,
      error,
      success: false,
      message: serviceMessages.EVENT_COMPLETE_FAILURE,
    };
  }
};
