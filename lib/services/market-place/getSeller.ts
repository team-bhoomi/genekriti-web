import { prisma } from "@/lib/prisma";

export const getSeller = async ({ product_id }: { product_id: string }) => {
  try {
    const response = await prisma.products.findUnique({
      where: {
        product_id,
      },
      include: {
        seller: true,
        images: true,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
