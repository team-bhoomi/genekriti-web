"use server";

import { updateVideoById } from "@/lib/services/videos/uploadVideo";
import { videoCategory } from "@prisma/client";

export const updateEventAction = async (formData: FormData) => {
  try {
    const response = await updateVideoById({
      category: formData.get("category") as videoCategory,
      creator_id: formData.get("creator_id") as string,
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      video_id: formData.get("video_id") as string,
      thumbnail_img_url: (formData.get("thumbnail_img_url") as string) || "",
      video_url: formData.get("video_url") as string,
    });

    // TODO : write the redirect or revalidate logic below
  } catch (error) {
    console.log(error);
  }
};
