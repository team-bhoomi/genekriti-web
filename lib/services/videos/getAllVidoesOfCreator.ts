import { prisma } from "@/lib/prisma";
import { Videos } from "@prisma/client";

export const getAllVidoesOfCreator = async ({
  creator_id,
}: {
  creator_id: string;
}): Promise<{
  data: Videos[] | null;
  success: boolean;
  error: unknown;
  message?: string;
}> => {
  try {
    const response = await prisma.videos.findMany({
      where: {
        creator_id,
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
      success: false,
      error,
    };
  }
};
