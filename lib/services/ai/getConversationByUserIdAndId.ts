import { prisma } from "@/lib/prisma";
import { Conversations } from "@prisma/client";

export const getConversationByUserIdAndId = async ({
  id,
  user_id,
}: {
  id: string;
  user_id: string;
}): Promise<{
  data: Conversations | null;
  success: boolean;
  error: unknown;
}> => {
  try {
    const response = await prisma.conversations.findUniqueOrThrow({
      where: {
        id,
        user_id,
      },
    });

    return {
      data: response,
      error: null,
      success: true,
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
