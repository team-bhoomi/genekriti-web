"use server";

import { likeVideo } from "@/lib/services/videos/likes/likeVideo";

export const likeVideoAction = async (formData: FormData) => {
  try {
    const response = await likeVideo({
      user_id: formData.get("user_id") as string,
      video_id: formData.get("video_id") as string,
    });
  } catch (error) {
    console.log(error);
  }
};
