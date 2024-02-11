import { prisma } from "@/lib/prisma";

export const addViewer = async ({
  user_id,
  video_id,
}: {
  user_id: string;
  video_id: string;
}): Promise<{ data: any; success: boolean; error: unknown }> => {
  try {
    const response = await prisma.video_views.create({
      data: {
        user_id,
        video_id,
      },
    });

    const viewCount = await prisma.video_views.count({
      where: {
        video_id,
      },
    });
    const updateViewCount = await prisma.videos.update({
      data: {
        view_count: viewCount,
      },
      where: {
        video_id,
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
