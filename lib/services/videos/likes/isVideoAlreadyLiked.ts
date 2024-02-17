import { prisma } from "@/lib/prisma";

export const isVideoAlreadyLiked = async ({
  user_id,
  video_id,
}: {
  user_id: string;
  video_id: string;
}) => {
  try {
    let IS_VIDEO_ALREADY_LIKED = false;
    const response = await prisma.videos.findUnique({
      where: {
        video_id,
      },
      include: {
        likes: {
          select: {
            user_id: true,
          },
        },
      },
    });

    for (let i = 0; i < response?.likes.length!; i++) {
      if (response?.likes[i].user_id === user_id) {
        IS_VIDEO_ALREADY_LIKED = true;
        break;
      }
    }
    return IS_VIDEO_ALREADY_LIKED;
  } catch (error) {
    console.log(error);
  }
};
