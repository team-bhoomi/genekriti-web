"use server";

import { createComment } from "@/lib/services/videos/comments/createComment";

export const createCommentAction = async (formData: FormData) => {
  try {
    const response = await createComment({
      comment: formData.get("comment") as string,
      user_id: formData.get("user_id") as string,
      video_id: formData.get("video_id") as string,
    });
  } catch (error) {
    console.log(error);
  }
};
