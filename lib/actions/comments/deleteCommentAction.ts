"use server";

import { deleteComment } from "@/lib/services/videos/comments/deleteComment";

export const deleteCommentAction = async (formData: FormData) => {
  try {
    const response = await deleteComment({
      comment_id: formData.get("comment_id") as string,
      user_id: formData.get("user_id") as string,
      video_id: formData.get("video_id") as string,
    });
    // TODO :Redirect to /videos path
    // redirect("/videos");
  } catch (error) {
    console.log(error);
  }
};
