import { prisma } from "@/lib/prisma";

export const getAllNotSoldProducts = async () => {
  try {
    const response = await prisma.products.findMany({
      where: {
        is_sold: false,
      },
      include: {
        seller: true,
      }
    })
    return response;
  } catch (error) {
    console.log(error);
  }
}