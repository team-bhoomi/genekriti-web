/**
 * USE CASE
 * 1. To edit a comment to an video
 */
import { serviceMessages } from "@/lib/constants/serviceMessage";
import { prisma } from "@/lib/prisma";
import { Video_comments } from "@prisma/client";
export const updateComment = async ({
  comment,
  user_id,
  video_id,
  comment_id,
}: Pick<
  Video_comments,
  "comment" | "user_id" | "video_id" | "comment_id"
>): Promise<{
  data: Video_comments | null;
  success: boolean;
  error: unknown;
  message?: string;
}> => {
  try {
    const response = await prisma.video_comments.update({
      data: {
        comment,
      },
      where: {
        comment_id,
        user_id,
        video_id,
      },
    });
    return {
      data: response,
      success: true,
      error: null,
      message: serviceMessages.COMMENT_UPDATE_SUCCESS,
    };
  } catch (error) {
    console.log(error);
    return {
      data: null,
      error,
      success: false,
      message: serviceMessages.COMMENT_UPDATE_SUCCESS,
    };
  }
};
