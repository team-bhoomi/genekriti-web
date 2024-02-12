import { prisma } from "@/lib/prisma";
import { Products_Images } from "@prisma/client";

type ImageType = {
  product_id: string;
  product_image_url: string;
  image_name: string;
};
export const addImage = async ({
  product_id,
  product_image_url,
  image_name,
}: ImageType): Promise<{
  data: Products_Images | null;
  error: unknown;
  success: boolean;
}> => {
  try {
    const response = await prisma.products_Images.create({
      data: {
        product_image_url,
        product_id,
        image_name,
      },
    });
    return {
      data: response,
      error: null,
      success: true,
    };
  } catch (error) {
    console.log(error);
    return {
      data: null,
      error,
      success: false,
    };
  }
};
