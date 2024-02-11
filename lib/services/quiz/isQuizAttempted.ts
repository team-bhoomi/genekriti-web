import { prisma } from "@/lib/prisma";

export const isQuizAttempted = async ({
  user_id,
  group,
}: {
  user_id: string;
  group: number;
}): Promise<{ isAttempted: boolean; error: unknown }> => {
  try {
    const response = await prisma.question_responses.findMany({
      where: {
        user_id,
        group,
      },
    });

    if (response.length != 5) {
      return {
        isAttempted: false,
        error: "All questions not attempted",
      };
    }
    return {
      isAttempted: true,
      error: null,
    };
  } catch (error) {
    console.log(error);
    return {
      isAttempted: false,
      error,
    };
  }
};
