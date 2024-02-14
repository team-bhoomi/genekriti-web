"use server";
import { buyProduct } from "@/lib/services/market-place/buyProduct";
import { redirect } from "next/navigation";

export const buyProductAction = async (formData: FormData) => {
  const buyer_id = formData.get("buyer_id") as string;
  const product_id = formData.get("product_id") as string;
  const seller_id = formData.get("seller_id") as string;
  const price = parseInt(formData.get("price") as string);

  const response = await buyProduct({
    buyer_id,
    product_id,
    seller_id,
    price,
  });
  console.log(response);
  redirect("/market-place");
};
