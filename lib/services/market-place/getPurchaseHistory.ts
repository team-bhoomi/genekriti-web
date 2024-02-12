import { prisma } from "@/lib/prisma";

export const getPurchaseHistory = async ({
  user_id,
}: {
  user_id: string;
}): Promise<{ data: any; error: unknown; success: boolean }> => {
  try {
    const response = await prisma.purchases.findMany({
      where: {
        buyer_id: user_id,
      },
      include: {
        products: true,
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
