import { prisma } from "@/lib/prisma";

export const getAllQuestions = async () => {
  try {
    const response = await prisma.questions.findMany();
    return response;
  } catch (error) {
    console.log(error);
  }
};
