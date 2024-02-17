import { serviceMessages } from "@/lib/constants/serviceMessage";
import { prisma } from "@/lib/prisma";
import { Videos } from "@prisma/client";

export const updateVideoById = async ({
  video_id,
  creator_id,
  title,
  description,
  thumbnail_img_url,
  video_url,
  categories,
}: Pick<
  Videos,
  | "video_id"
  | "creator_id"
  | "title"
  | "description"
  | "thumbnail_img_url"
  | "video_url"
  | "categories"
>): Promise<{
  data: Videos | null;
  success: boolean;
  error: unknown;
  message: string;
}> => {
  try {
    const response = await prisma.videos.update({
      data: {
        title,
        description,
        thumbnail_img_url,
        video_url,
        categories,
      },
      where: {
        video_id,
        creator_id,
      },
    });
    return {
      data: response,
      success: true,
      error: null,
      message: serviceMessages.VIDEO_UPDATE_SUCCESS,
    };
  } catch (error) {
    console.log(error);
    return {
      data: null,
      success: false,
      error,
      message: serviceMessages.VIDEO_UPDATE_FAILURE,
    };
  }
};
