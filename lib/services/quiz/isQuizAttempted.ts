import { prisma } from "@/lib/prisma";

export const isQuizAttempted = async ({
  user_id,
  group,
}: {
  user_id: string;
  group: number;
}): Promise<{ data: any; isAttempted: boolean; error: unknown }> => {
  try {
    const response = await prisma.question_responses.findMany({
      where: {
        user_id,
        group,
      },
      include: {
        questionData: true,
      },
    });

    if (response.length != 5) {
      return {
        data: null,
        isAttempted: false,
        error: "All questions not attempted",
      };
    }
    return {
      data: response,
      isAttempted: true,
      error: null,
    };
  } catch (error) {
    console.log(error);
    return {
      data: null,
      isAttempted: false,
      error,
    };
  }
};
