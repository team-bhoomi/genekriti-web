import { serviceMessages } from "@/lib/constants/serviceMessage";
import { prisma } from "@/lib/prisma";

export const getEventOrganizer = async ({
  org_id,
  event_id,
}: {
  org_id: string;
  event_id: string;
}): Promise<{
  data: any;
  error: unknown;
  success: boolean;
  message: string;
}> => {
  try {
    const response = await prisma.event.findUniqueOrThrow({
      where: {
        organizer_id: org_id,
        event_id,
      },
      include: {
        organizer: true,
      },
    });

    return {
      data: response,
      error: null,
      success: true,
      message: serviceMessages.EVENT_ORGANIZTION_FOUND,
    };
  } catch (error) {
    console.log(error);
    return {
      data: null,
      error,
      success: false,
      message: serviceMessages.EVENT_ORGANIZTION_NOT_FOUND,
    };
  }
};
