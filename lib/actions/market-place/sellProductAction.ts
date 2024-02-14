"use server";
import { converCategoryToUpperCase } from "@/lib/constants/convertCategoryToUpperCase";
import { sellProduct } from "@/lib/services/market-place/sellProduct";
import { productCategory, questionCategory } from "@prisma/client";
import { redirect } from "next/navigation";

export const sellProductAction = async (formData: FormData) => {
  const seller_id = formData.get("seller_id") as string;
  const price = parseInt(formData.get("price") as string);
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const categories = JSON.parse(formData.get("categories") as string);
  console.log(seller_id);
  console.log(price);
  console.log(name);
  console.log(description);
  console.log(categories);

  let parsedCategories: productCategory[] = [];
  categories.forEach((category: productCategory) => {
    let str = converCategoryToUpperCase(category);
    parsedCategories.push(str);
  });
  const response = await sellProduct({
    price,
    seller_id,
    name,
    description,
    categories: parsedCategories,
  });
  redirect("/market-place");
};
