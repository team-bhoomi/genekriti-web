import { sellProduct } from "@/lib/services/market-place/sellProduct";
import { productCategory } from "@prisma/client";

export const sellProductAction = async (formData: FormData) => {
  try {
    const seller_id = formData.get("seller_id") as string;
    const price = parseInt(formData.get("price") as string);
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;

    const category1 = formData.get("category1") as productCategory;
    const category2 = formData.get("category2") as productCategory;
    const category3 = formData.get("category3") as productCategory;
    const categories = [category1, category2, category3];
    const response = await sellProduct({
      price,
      seller_id,
      name,
      description,
      categories,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
