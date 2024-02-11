/**
 * USE CASE
 * 1. To get the details of user who commented on that comment
 * 2. To check whether the user is the commentor before editing or deleting a comment
 */
import { serviceMessages } from "@/lib/constants/serviceMessage";
import { prisma } from "@/lib/prisma";

export const getCommentor = async ({
  comment_id,
  video_id,
}: {
  comment_id: string;
  video_id: string;
}): Promise<{
  data: any;
  success: boolean;
  error: unknown;
  message: string;
}> => {
  try {
    const response = await prisma.video_comments.findUniqueOrThrow({
      where: {
        comment_id,
        video_id,
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
      error: null,
      success: true,
      message: serviceMessages.COMMENTOR_FOUND_SUCCESS,
    };
  } catch (error) {
    console.log(error);
    return {
      data: null,
      error,
      success: false,
      message: serviceMessages.COMMENTOR_NOT_FOUND,
    };
  }
};
