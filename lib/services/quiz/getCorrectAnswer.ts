import { prisma } from "@/lib/prisma";
import { Questions } from "@prisma/client";

export const getCorrectAnswer = async ({
  question_id,
}: {
  question_id: string;
}): Promise<{
  data: Questions | null;
  success: boolean;
  error: unknown;
}> => {
  try {
    const response = await prisma.questions.findUniqueOrThrow({
      where: {
        question_id,
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
