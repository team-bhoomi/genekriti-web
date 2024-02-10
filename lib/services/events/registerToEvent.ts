/**
 * USE CASE
 * 1. To register a user to a new event
 * 2. Should be used in an server action registerToEventAction which should be called when register button is clicked
 */
import { serviceMessages } from "@/lib/constants/serviceMessage";
import { prisma } from "@/lib/prisma";
import { Attendees, User } from "@prisma/client";

export const registerToEvent = async ({
  event_id,
  user_id,
}: Pick<Attendees, "event_id" | "user_id">) => {
  try {
    // Adds the new registrant to attendees table
    const response = await prisma.attendees.create({
      data: {
        id: `${event_id}-${user_id}`,
        event_id,
        user_id,
      },
      include: {
        user: {
          select: {
            first_name: true,
            last_name: true,
            profile_image: true,
            role: true,
          },
        },
      },
    });

    // gets the total number of registrants after insertion
    const totalRegistrants = await prisma.attendees.count({
      where: {
        event_id,
        is_present: false,
      },
    });

    // Updates the regitrants_count field in Event table
    const incrementRegistrantsCount = await prisma.event.update({
      data: {
        registrants_count: totalRegistrants,
      },
      where: {
        event_id,
      },
    });
    return { data: response, error: null, success: true };
  } catch (error) {
    console.log(error);
    return {
      data: null,
      error,
      success: false,
      message: serviceMessages.EVENT_REGISTRATION_FAILURE,
    };
  }
};
