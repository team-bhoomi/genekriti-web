import { prisma } from "@/lib/prisma";
import { Conversations } from "@prisma/client";

export const getAllConverstationsOfUser = async ({
  user_id,
}: {
  user_id: string;
}): Promise<{
  data: Conversations[] | null;
  success: boolean;
  error: unknown;
}> => {
  try {
    const response = await prisma.conversations.findMany({
      where: {
        user_id,
      },
    });
    return {
      data: response,
      success: true,
      error: null,
    };
  } catch (error) {
    console.log(error);
    return {
      data: null,
      error,
      success: false,
    };
  }
};
