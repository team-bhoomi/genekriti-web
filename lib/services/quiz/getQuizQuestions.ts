/**
 * To get all questions in a quiz
 * here group id will be the quiz number (ex: 1,2,3..10)
 */
import { prisma } from "@/lib/prisma";
import { Questions } from "@prisma/client";

export const getQuizQuestions = async ({ group }: { group: number }) => {
  try {
    const response = await prisma.questions.findMany({
      where: {
        group,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
