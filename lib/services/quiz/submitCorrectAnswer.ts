import { prisma } from "@/lib/prisma";
import { Question_responses } from "@prisma/client";

export const submitCorrectAnswer = async ({
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
        is_correct: true,
        group,
        is_attempted: true,
      },
      include: {
        user: {
          select: {
            balance: true,
          },
        },
        questionData: {
          select: {
            points: true,
          },
        },
      },
    });
    await prisma.user.update({
      where: {
        id: user_id,
      },
      data: {
        balance: response.user.balance! + response.questionData.points,
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
