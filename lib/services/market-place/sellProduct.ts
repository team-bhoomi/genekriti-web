import { serviceMessages } from "@/lib/constants/serviceMessage";
import { prisma } from "@/lib/prisma";
import { Products } from "@prisma/client";

export const sellProduct = async ({
  seller_id,
  categories,
  description,
  price,
  name,
}: Pick<
  Products,
  "categories" | "seller_id" | "description" | "price" | "name"
>): Promise<{
  data: Products | null;
  error: unknown;
  message: string;
  success: boolean;
}> => {
  try {
    const response = await prisma.products.create({
      data: {
        seller_id,
        description,
        name,
        price,
        categories,
      },
    });

    return {
      data: response,
      success: true,
      error: null,
      message: serviceMessages.PRODUCT_PUBLISH_SUCCESS,
    };
  } catch (error) {
    console.log(error);
    return {
      data: null,
      error,
      success: false,
      message: serviceMessages.PRODUCT_PUBLISH_FAILURE,
    };
  }
};
