import { serviceMessages } from "@/lib/constants/serviceMessage";
import { prisma } from "@/lib/prisma";

export const getAllRegistrants = async ({
  event_id,
}: {
  event_id: string;
}): Promise<{
  data: any;
  error: unknown;
  success: boolean;
  message: string;
}> => {
  try {
    const response = await prisma.event.findMany({
      where: {
        event_id,
      },
      include: {
        attendees: {
          where: {
            is_present: false,
          },
        },
      },
    });
    return {
      data: response,
      success: true,
      error: null,
      message: serviceMessages.EVENT_REGISTRANTS_FETCH_SUCCESS,
    };
  } catch (error) {
    console.log(error);
    return {
      data: null,
      success: false,
      error,
      message: serviceMessages.EVENT_REGISTRANTS_FETCH_FAILURE,
    };
  }
};
