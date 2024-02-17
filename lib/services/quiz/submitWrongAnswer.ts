import { prisma } from "@/lib/prisma";
import { Question_responses } from "@prisma/client";

export const submitWrongAnswer = async ({
  user_answer,
  user_id,
  question_id,
  group,
}: {
  user_answer: string;
  user_id: string;
  question_id: string;
  group: number;
}): Promise<{
  data: Question_responses | null;
  error: unknown;
  success: boolean;
}> => {
  try {
    const response = await prisma.question_responses.create({
      data: {
        user_id,
        user_answer,
        question_id,
        is_correct: false,
        is_attempted: true,
        group,
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
