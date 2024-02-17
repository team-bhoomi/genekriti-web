"use server";

import { converCategoryToUpperCase } from "@/lib/constants/convertCategoryToUpperCase";
import { createVideo } from "@/lib/services/videos/createVideo";
import { Videos, productCategory } from "@prisma/client";
import { redirect } from "next/navigation";

export const createVideoAction = async (formData: FormData) => {
  const categories = JSON.parse(formData.get("categories") as string);
  console.log(formData.get("creator_id") as string);
  console.log(formData.get("title") as string);
  console.log(formData.get("description") as string);
  console.log(formData.get("thumbnail_img_url") as string);
  console.log(formData.get("video_url") as string);
  console.log(categories);
  let parsedCategories: productCategory[] = [];
  categories.forEach((category: productCategory) => {
    let str = converCategoryToUpperCase(category);
    parsedCategories.push(str);
  });
  const response = await createVideo({
    creator_id: formData.get("creator_id") as string,
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    thumbnail_img_url: (formData.get("thumbnail_img_url") as string) || "",
    categories: parsedCategories as productCategory[],
    video_url: formData.get("video_url") as string,
  });
  console.log(response);
  redirect("/rekriti");
  // TODO : Revalidate the path of this page
};
