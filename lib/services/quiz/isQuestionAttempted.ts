import { prisma } from "@/lib/prisma";

export const isQuestionAttempted = async ({
  user_id,
  question_id,
}: {
  question_id: string;
  user_id: string;
}) => {
  try {
    const response = prisma.user.findUnique({
      where: {
        id: user_id,
      },
      include: {
        questions_attempted: {
          where: {
            question_id,
          },
        },
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
