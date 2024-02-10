import { serviceMessages } from "@/lib/constants/serviceMessage";
import { prisma } from "@/lib/prisma";
import { Attendees, User } from "@prisma/client";

export const getRegistrantById = async ({
  event_id,
  user_id,
}: {
  event_id: string;
  user_id: string;
}): Promise<{
  data: any | null;
  success: boolean;
  error: unknown;
  message: string;
}> => {
  try {
    let isRegistered = true;
    const response = await prisma.attendees.findUniqueOrThrow({
      where: {
        id: `${event_id}-${user_id}`,
      },
      include: {
        user: true,
      },
    });

    if (!response) {
      isRegistered = false;
    }

    return {
      data: response,
      success: true,
      error: null,
      message: serviceMessages.EVENT_REGISTRANT_FOUND,
    };
  } catch (error) {
    console.log(error);
    return {
      data: null,
      success: false,
      error,
      message: serviceMessages.EVENT_REGISTRANT_NOT_FOUND,
    };
  }
};
