"use server";

import { deleteVideoById } from "@/lib/services/videos/deleteVideo";

export const deleteVideoAction = async (formData: FormData) => {
  try {
    const response = await deleteVideoById({
      creator_id: formData.get("creator_id") as string,
      video_id: formData.get("video_id") as string,
    });
    // TODO :Redirect to /videos path
    // redirect("/videos");
  } catch (error) {
    console.log(error);
  }
};
