import { productCategory } from "@prisma/client";

export const convertCategoryToLowerCase = (category: string): productCategory => {
  let trim = category.split("_");
  if (trim.length === 1) {
    category = category.toLowerCase();
  } else {
    category = trim.join(" ").toLowerCase().toString();
  }
  return category as productCategory;
}
