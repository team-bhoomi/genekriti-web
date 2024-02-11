/**
 * To get all questions in a quiz
 * here group id will be the quiz number (ex: 1,2,3..10)
 */
import { prisma } from "@/lib/prisma";
import { Questions } from "@prisma/client";

export const getQuizQuestions = async ({
  group,
}: {
  group: number;
}): Promise<{ data: Questions[] | null; error: unknown; success: boolean }> => {
  try {
    const response = await prisma.questions.findMany({
      where: {
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
