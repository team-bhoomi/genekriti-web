import { productCategory, questionCategory } from "@prisma/client";

export const converCategoryToUpperCase = (category: string): productCategory => {
  let trim = category.split(" ");
  if (trim.length === 1) {
    category = category.toUpperCase();
  } else {
    category = trim.join("_").toUpperCase().toString();
  }
  return category as productCategory;
}

console.log(converCategoryToUpperCase("Art and Decor"))