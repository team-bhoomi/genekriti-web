/**
 * USE CASE
 * 1. To fetch an event by its event_id
 * 2. Should be used in /events/:id page
 */
import { serviceMessages } from "@/lib/constants/serviceMessage";
import { prisma } from "@/lib/prisma";
import { Event } from "@prisma/client";

export const getEventById = async ({
  event_id,
}: {
  event_id: string;
}): Promise<{
  data: Event | null;
  success: boolean;
  messaage: string;
  error: unknown;
}> => {
  try {
    const response = await prisma.event.findUnique({
      where: {
        event_id,
      },
    });
    return {
      data: response,
      success: true,
      error: null,
      messaage: serviceMessages.EVENT_FOUND,
    };
  } catch (error) {
    console.log("Error in fetching event by its id");
    return {
      data: null,
      success: false,
      error,
      messaage: serviceMessages.EVENT_NOT_FOUND,
    };
  }
};
