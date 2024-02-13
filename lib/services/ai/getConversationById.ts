import { serviceMessages } from "@/lib/constants/serviceMessage";
import { prisma } from "@/lib/prisma";
import { Conversations } from "@prisma/client";

export const getConversationById = async ({
  id,
}: {
  id: string;
}): Promise<{
  data: Conversations | null;
  success: boolean;
  error: unknown;
  message: string;
}> => {
  try {
    const response = await prisma.conversations.findUniqueOrThrow({
      where: {
        id,
      },
    });
    return {
      data: response,
      success: true,
      error: null,
      message: serviceMessages.CONVERSATION_FETCH_SUCCESS,
    };
  } catch (error) {
    console.log(error);
    return {
      data: null,
      success: false,
      error,
      message: serviceMessages.CONVERSATION_FETCH_FAILURE,
    };
  }
};
