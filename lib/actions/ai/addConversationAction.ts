"use server";

import { converCategoryToUpperCase } from "@/lib/constants/convertCategoryToUpperCase";
import { addConversation } from "@/lib/services/ai/addConversation";
import { askOllama } from "@/lib/services/ai/askOllama";
import { productCategory } from "@prisma/client";
import { redirect } from "next/navigation";

export const addConversationAction = async (formData: FormData) => {
  const user_id = formData.get("user_id") as string;
  const categories = JSON.parse(formData.get("categories") as string);
  let parsedCategories: productCategory[] = [];
  categories.forEach((category: productCategory) => {
    let str = converCategoryToUpperCase(category);
    parsedCategories.push(str);
  });
  const prompt = formData.get("prompt") as string;
  const resource_url = formData.get("resource_url") as string;
  console.log(resource_url);
  const AIoutput = await askOllama({ prompt });
  console.log(AIoutput);
  const { data } = await addConversation({
    user_id,
    categories: parsedCategories,
    prompt,
    ai_response: AIoutput,
    title: "",
    resource_url,
  });
  // redirect("/dashboard");
  return data;
};
