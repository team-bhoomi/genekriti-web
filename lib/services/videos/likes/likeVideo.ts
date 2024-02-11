import { prisma } from "@/lib/prisma";

export const likeVideo = async ({
  video_id,
  user_id,
}: {
  video_id: string;
  user_id: string;
}) => {
  try {
    const response = await prisma.video_likes.create({
      data: {
        user_id,
        video_id,
      },
    });

    const likeCountAfter = await prisma.video_likes.count({
      where: {
        video_id,
      },
    });
    const updateLikeCount = await prisma.videos.update({
      data: {
        like_count: likeCountAfter,
      },
      where: {
        video_id,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
