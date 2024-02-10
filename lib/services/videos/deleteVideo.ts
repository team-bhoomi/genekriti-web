import { serviceMessages } from "@/lib/constants/serviceMessage";
import { prisma } from "@/lib/prisma";
import { Videos } from "@prisma/client";

export const deleteVideoById = async ({
  video_id,
  creator_id,
}: {
  video_id: string;
  creator_id: string;
}): Promise<{
  data: Videos | null;
  error: unknown;
  success: boolean;
  message?: string;
}> => {
  try {
    const response = await prisma.videos.delete({
      where: {
        video_id,
        creator_id,
      },
    });
    return {
      data: response,
      success: true,
      error: null,
      message: serviceMessages.VIDEO_DELETE_SUCCESS,
    };
  } catch (error) {
    console.log(error);
    return {
      data: null,
      error,
      success: false,
      message: serviceMessages.VIDEO_DELETE_FAILURE,
    };
  }
};
