/**
 * USE CASE
 * 1. To add a comment to an video
 */
import { serviceMessages } from "@/lib/constants/serviceMessage";
import { prisma } from "@/lib/prisma";
import { Video_comments } from "@prisma/client";
export const createComment = async ({
  comment,
  user_id,
  video_id,
}: Pick<Video_comments, "comment" | "user_id" | "video_id">): Promise<{
  data: Video_comments | null;
  success: boolean;
  error: unknown;
  message?: string;
}> => {
  try {
    const response = await prisma.video_comments.create({
      data: {
        comment,
        user_id,
        video_id,
      },
    });
    const commentCountAfterComment = await prisma.video_comments.count({
      where: {
        video_id,
      },
    });

    const incrementCommentCount = await prisma.videos.update({
      where: {
        video_id,
      },
      data: {
        comment_count: commentCountAfterComment,
      },
    });
    return {
      data: response,
      success: true,
      error: null,
      message: serviceMessages.COMMENT_CREATED_SUCCESS,
    };
  } catch (error) {
    console.log(error);
    return {
      data: null,
      error,
      success: false,
      message: serviceMessages.COMMENT_CREATED_FAILURE,
    };
  }
};
