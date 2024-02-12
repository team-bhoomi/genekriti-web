import { prisma } from "@/lib/prisma";
import { Purchases } from "@prisma/client";

export const buyProduct = async ({
  buyer_id,
  product_id,
}: {
  buyer_id: string;
  product_id: string;
}): Promise<{ data: any; error: unknown; success: boolean }> => {
  try {
    // adds in purchase table
    const response = await prisma.purchases.create({
      data: {
        buyer_id,
        product_id,
      },
      include: {
        buyer: true,
      },
    });

    // gets price and seller_id of the product
    const productRes = await prisma.products.findUniqueOrThrow({
      where: {
        product_id,
      },
      select: {
        price: true,
        seller_id: true,
      },
    });

    // updates the product's status as sold
    const updateProductSoldStatus = await prisma.products.update({
      data: {
        is_sold: true,
      },
      where: {
        product_id,
      },
    });

    // adds in transctions table
    const transaction = await prisma.transactions.create({
      data: {
        amount: productRes.price,
        source: "PRODUCT_EXCHANGE",
        payer_id: buyer_id,
        recipent_id: productRes.seller_id,
      },
      include: {
        payer: {
          select: {
            balance: true,
          },
        },
        recipent: {
          select: {
            balance: true,
          },
        },
      },
    });

    // updates reciepent balance
    const updateRecpient = await prisma.user.update({
      data: {
        balance: transaction.recipent.balance! + productRes.price,
      },
      where: {
        id: transaction.recipent_id,
      },
    });

    //updates payers balance
    const updatePayer = await prisma.user.update({
      data: {
        balance: transaction.payer.balance! - productRes.price,
      },
      where: {
        id: transaction.payer_id,
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
      success: false,
      error,
    };
  }
};
