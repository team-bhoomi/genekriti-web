"use server";

import { createVideo } from "@/lib/services/videos/createVideo";
import { Videos, productCategory } from "@prisma/client";

export const createVideoAction = async (formData: FormData) => {
  const categories = JSON.parse(formData.get("categories") as string);
  const response = await createVideo({
    creator_id: formData.get("creator_id") as string,
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    thumbnail_img_url: (formData.get("thumbnail_img_url") as string) || "",
    categories: categories as productCategory[],
    video_url: formData.get("video_url") as string,
  });
  // TODO : Revalidate the path of this page
};
