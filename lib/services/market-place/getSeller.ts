import { prisma } from "@/lib/prisma";

export const getSeller = async ({ product_id }: { product_id: string }) => {
  try {
    const response = await prisma.products.findUniqueOrThrow({
      where: {
        product_id,
      },
      include: {
        seller: true,
        images: true,
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
