/**
 * USE CASE
 * 1. To delete an event by its ID,
 * 2. To use in eventDeleteAction
 */
import { serviceMessages } from "@/lib/constants/serviceMessage";
import { prisma } from "@/lib/prisma";
import { Event } from "@prisma/client";

export const deleteEvent = async ({
  event_id,
}: {
  event_id: string;
}): Promise<{
  data: Event | null;
  success: boolean;
  error: unknown;
  message: string;
}> => {
  try {
    const response = await prisma.event.delete({
      where: {
        event_id,
      },
    });
    return {
      data: response,
      error: null,
      success: true,
      message: serviceMessages.EVENT_DELETE_SUCCESS,
    };
  } catch (error) {
    return {
      data: null,
      error,
      success: false,
      message: serviceMessages.EVENT_DELETE_FAILURE,
    };
  }
};
