import { prisma } from "@/lib/prisma";

export const getSellingHistory = async ({
  seller_id,
}: {
  seller_id: string;
}): Promise<{ data: any; error: unknown; success: boolean }> => {
  try {
    const response = await prisma.products.findMany({
      where: {
        is_sold: true,
        seller_id,
      },
      include: {
        purchases: true,
      },
    });
    return {
      data: response,
      success: true,
      error: null,
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
