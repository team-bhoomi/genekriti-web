import { serviceMessages } from "@/lib/constants/serviceMessage";
import { prisma } from "@/lib/prisma";

export const getAttendeeById = async ({
  event_id,
  user_id,
}: {
  event_id: string;
  user_id: string;
}): Promise<{
  data: any;
  error: unknown;
  success: boolean;
  message: string;
}> => {
  try {
    const response = await prisma.attendees.findUnique({
      where: {
        id: `${event_id}-${user_id}`,
      },
      include: {
        user: true,
      },
    });
    return {
      data: response,
      success: true,
      error: null,
      message: serviceMessages.EVENT_ATTENDEE_MARKED_SUCCESS,
    };
  } catch (error) {
    console.log(error);
    return {
      data: null,
      success: false,
      error,
      message: serviceMessages.EVENT_ATTENDEE_MARKED_FAILURE,
    };
  }
};
