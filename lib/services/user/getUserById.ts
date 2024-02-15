import { prisma } from "@/lib/prisma";
import { User } from "@prisma/client";

export const getUserById = async ({ id }: { id: string }) => {
  try {
    const response = await prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        attendees: true,
        conversations: true,
        payer_transactions: true,
        recipent_transactions: true,
        videos: true,
        buyer: true,
        seller: true,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
    // return {
    //   data: null,
    //   success: false,
    //   error,
    // };
  }
};
