import { prisma } from "@/lib/prisma";

export const getAllEventsAttendedByUser = async ({
  user_id,
}: {
  user_id: string;
}) => {
  try {
    const response = await prisma.attendees.findMany({
      where: {
        user_id,
      },
      include: {
        event: true,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
