import { serviceMessages } from "@/lib/constants/serviceMessage";
import { prisma } from "@/lib/prisma";
import { Attendees, User, UserType } from "@prisma/client";

export type RegistrantsType = {
  attendees: {
    id: string;
    event_id: string;
    user_id: string;
    is_present: boolean;
    registered_at: Date;
  }[];
} & {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  profile_image: string | null;
  role: UserType;
  created_at: Date;
  updated_at: Date;
  balance: number | null;
};
export const getAllRegistrants = async ({
  event_id,
}: {
  event_id: string;
}): Promise<{
  data: RegistrantsType[] | null;
  error: unknown;
  success: boolean;
  message: string;
}> => {
  try {
    // const response = await prisma.event.findMany({
    //   where: {
    //     event_id,
    //   },
    //   include: {
    //     attendees: {
    //       where: {
    //         is_present: false,
    //       },
    //     },
    //   },
    // });

    const response = await prisma.user.findMany({
      where: {
        attendees: {
          some: {
            is_present: false,
            event_id,
          },
        },
      },
      include: {
        attendees: true,
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
