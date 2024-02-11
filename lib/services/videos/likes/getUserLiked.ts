import { prisma } from "@/lib/prisma";

export const getUserLiked = async ({
  like_id,
}: {
  like_id: string;
}): Promise<{ data: any; success: boolean; error: unknown }> => {
  try {
    const response = await prisma.video_likes.findUniqueOrThrow({
      where: {
        like_id,
      },
      include: {
        video: {
          include: {
            user: true,
          },
        },
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
