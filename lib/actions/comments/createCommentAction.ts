"use server";

import { createComment } from "@/lib/services/videos/comments/createComment";
import { revalidatePath } from "next/cache";

export const createCommentAction = async (formData: FormData) => {
  const response = await createComment({
    comment: formData.get("comment") as string,
    user_id: formData.get("user_id") as string,
    video_id: formData.get("video_id") as string,
  });
  console.log(response);
  revalidatePath(`/rekriti/video/${response.data?.video_id}`);
};
