import { serviceMessages } from "@/lib/constants/serviceMessage";
import { prisma } from "@/lib/prisma";
import { Conversations } from "@prisma/client";
export const addConversation = async ({
  ai_response,
  categories,
  prompt,
  title,
  resource_url,
  user_id,
}: Pick<
  Conversations,
  "ai_response" | "categories" | "prompt" | "resource_url" | "title" | "user_id"
>): Promise<{
  data: Conversations | null;
  success: boolean;
  error: unknown;
  message: string;
}> => {
  try {
    const response = await prisma.conversations.create({
      data: {
        ai_response,
        user_id,
        resource_url,
        title,
        prompt,
        categories,
      },
    });
    return {
      data: response,
      error: null,
      success: true,
      message: serviceMessages.CONVERSATION_ADD_SUCCESS,
    };
  } catch (error) {
    console.log(error);
    return {
      data: null,
      error,
      success: false,
      message: serviceMessages.CONVERSATOIN_ADD_FAILURE,
    };
  }
};
