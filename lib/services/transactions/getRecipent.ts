import { prisma } from "@/lib/prisma";

export const getRecipent = async ({
  recipent_id,
  transaction_id,
}: {
  recipent_id: string;
  transaction_id: string;
}) => {
  try {
    const response = await prisma.transactions.findUnique({
      where: {
        recipent_id,
        transaction_id,
      },
      include: {
        recipent: true,
        payer: true,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
