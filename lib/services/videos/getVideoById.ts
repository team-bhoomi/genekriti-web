import { serviceMessages } from "@/lib/constants/serviceMessage";
import { prisma } from "@/lib/prisma";
import { Videos } from "@prisma/client";

export const getVideoById = async ({
  video_id,
}: {
  video_id: string;
}): Promise<{
  data: Videos | null;
  success: boolean;
  error: unknown;
  message: string;
}> => {
  try {
    const response = await prisma.videos.findUniqueOrThrow({
      where: {
        video_id,
      },
    });
    return {
      data: response,
      success: true,
      error: null,
      message: serviceMessages.VIDEO_FOUND,
    };
  } catch (error) {
    console.log(error);
    return {
      data: null,
      error,
      success: false,
      message: serviceMessages.VIDEO_NOT_FOUND,
    };
  }
};
