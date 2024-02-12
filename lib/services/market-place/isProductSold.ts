import { prisma } from "@/lib/prisma";

export const isProductSold = async ({
  product_id,
}: {
  product_id: string;
}): Promise<{ isSold: boolean; error: unknown }> => {
  try {
    const response = await prisma.products.findUniqueOrThrow({
      where: {
        product_id,
      },
    });
    return {
      isSold: true,
      error: null,
    };
  } catch (error) {
    console.log(error);
    return {
      isSold: false,
      error,
    };
  }
};
