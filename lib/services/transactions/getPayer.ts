import { prisma } from "@/lib/prisma";

export const getPayer = async ({
  payer_id,
  transaction_id,
}: {
  payer_id: string;
  transaction_id: string;
}) => {
  try {
    const response = await prisma.transactions.findUnique({
      where: {
        payer_id,
        transaction_id,
      },
      include: {
        payer: true,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
