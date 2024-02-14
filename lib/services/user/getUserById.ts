import { prisma } from "@/lib/prisma";
import { User } from "@prisma/client";

export const getUserById = async ({
  id,
}: {
  id: string;
}): Promise<{ data: User | null; success: boolean; error: unknown }> => {
  try {
    const response = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    return {
      data: response,
      error: null,
      success: false,
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
