import { buyProduct } from "@/lib/services/market-place/buyProduct";

export const buyProductAction = async (formData: FormData) => {
  try {
    const buyer_id = formData.get("buyer_id") as string;
    const product_id = formData.get("product_id") as string;
    const response = await buyProduct({
      buyer_id,
      product_id,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
