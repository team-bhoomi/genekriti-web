import { serviceMessages } from "@/lib/constants/serviceMessage";
import { prisma } from "@/lib/prisma";

export const getAllEventsOfOrg = async ({
  org_id,
}: {
  org_id: string;
}): Promise<{
  data: Event[] | any;
  success: boolean;
  error: unknown;
  message: string;
}> => {
  try {
    const response = await prisma.event.findMany({
      where: {
        organizer_id: org_id,
      },
      include: {
        organizer: true,
      },
    });
    return {
      data: response,
      error: null,
      success: true,
      message: serviceMessages.EVENTS_FOUND_SUCCESS,
    };
  } catch (error) {
    return {
      data: null,
      error,
      success: false,
      message: serviceMessages.EVENT_NOT_FOUND,
    };
  }
};
