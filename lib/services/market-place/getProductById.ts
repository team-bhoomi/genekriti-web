import { prisma } from "@/lib/prisma";

export const getProductyId = async ({
  product_id,
  is_sold,
}: {
  product_id: string;
  is_sold: boolean;
}) => {
  try {
    const response = await prisma.products.findUnique({
      where: {
        product_id,
        is_sold,
      },
      include: {
        seller: true,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
