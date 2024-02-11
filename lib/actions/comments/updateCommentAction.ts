import { updateComment } from "@/lib/services/videos/comments/updateComment";

export const updateCommentAction = async (formData: FormData) => {
  try {
    const response = updateComment({
      comment: formData.get("comment_id") as string,
      comment_id: formData.get("comment_id") as string,
      user_id: formData.get("comment_id") as string,
      video_id: formData.get("video_id") as string,
    });
  } catch (error) {
    console.log(error);
  }
};
