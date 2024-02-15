"use server";

import { getCorrectAnswer } from "@/lib/services/quiz/getCorrectAnswer";
import { submitCorrectAnswer } from "@/lib/services/quiz/submitCorrectAnswer";
import { submitWrongAnswer } from "@/lib/services/quiz/submitWrongAnswer";
import { Questions } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const submitAnswerAction = async (formData: FormData) => {
  const user_answer = formData.get("user_answer") as string;
  const question_id = formData.get("question_id") as string;
  const user_id = formData.get("user_id") as string;
  const group = formData.get("group") as string;
  console.log(user_answer);
  console.log(question_id);
  console.log(user_id);
  console.log(group);
  const { success, data, error } = await getCorrectAnswer({ question_id });
  if (!success) {
    console.log(error);
    return;
  }

  // when user choose right answer
  if (user_answer === data?.answer) {
    await submitCorrectAnswer({
      question_id,
      user_answer,
      user_id,
      group: data.group,
    });
  } else {
    await submitWrongAnswer({
      question_id,
      user_answer,
      user_id,
      group: data?.group!,
    });
  }
  revalidatePath(`/quiz/${group}/${question_id}`);
  // TODO : Return toast to user and go to next question
};
