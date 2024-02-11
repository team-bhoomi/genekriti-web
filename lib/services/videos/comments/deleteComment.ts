/**
 * USE CASE
 * 1. To delete an existing comment by an user on a video
 */
import { serviceMessages } from "@/lib/constants/serviceMessage";
import { prisma } from "@/lib/prisma";
import { Video_comments } from "@prisma/client";
export const deleteComment = async ({
  comment_id,
  video_id,
  user_id,
}: Pick<Video_comments, "comment_id" | "user_id" | "video_id">): Promise<{
  error: unknown;
  success: boolean;
  message: string;
}> => {
  try {
    const response = await prisma.video_comments.delete({
      where: {
        comment_id,
        user_id,
        video_id,
      },
    });
    return {
      error: null,
      success: true,
      message: serviceMessages.COMMENT_DELETE_SUCCESS,
    };
  } catch (error) {
    console.log(error);
    return {
      error,
      success: false,
      message: serviceMessages.COMMENT_DELETE_FAILURE,
    };
  }
};
