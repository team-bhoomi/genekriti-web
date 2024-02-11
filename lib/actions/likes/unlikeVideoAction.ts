"use server";

import { unlikeVideo } from "@/lib/services/videos/likes/unlikeVideo";

export const unlikeVideoAction = async (formData: FormData) => {
  try {
    const response = await unlikeVideo({
      user_id: formData.get("user_id") as string,
      video_id: formData.get("video_id") as string,
      like_id: formData.get("like_id") as string,
    });
  } catch (error) {
    console.log(error);
  }
};
