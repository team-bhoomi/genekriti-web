"use server";

import { isVideoAlreadyLiked } from "@/lib/services/videos/likes/isVideoAlreadyLiked";
import { likeVideo } from "@/lib/services/videos/likes/likeVideo";
import { unlikeVideo } from "@/lib/services/videos/likes/unlikeVideo";
import { revalidatePath } from "next/cache";

export const likeVideoAction = async (formData: FormData) => {
  const user_id = formData.get("user_id") as string;
  const video_id = formData.get("video_id") as string;
  const IS_VIDEO_ALREADY_LIKED = await isVideoAlreadyLiked({
    user_id,
    video_id,
  });

  if (!IS_VIDEO_ALREADY_LIKED) {
    const response = await likeVideo({
      user_id,
      video_id,
    });
  }
  revalidatePath(`/rekriti/video/${video_id}`);
};
