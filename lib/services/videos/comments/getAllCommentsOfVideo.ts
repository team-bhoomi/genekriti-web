/**
 * USE CASE
 * 1. To fetch all comments on a video
 */

import { prisma } from "@/lib/prisma";
import { Video_comments } from "@prisma/client";
export const getAllCommentsOfVideo = async ({
  video_id,
}: {
  video_id: string;
}): Promise<{
  data: Video_comments[] | null;
  success: boolean;
  error: unknown;
  message?: string;
}> => {
  try {
    const response = await prisma.video_comments.findMany({
      where: {
        video_id,
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
      error,
      success: false,
    };
  }
};
