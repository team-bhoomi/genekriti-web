import { serviceMessages } from "@/lib/constants/serviceMessage";
import { prisma } from "@/lib/prisma";
import { Videos } from "@prisma/client";

export const createVideo = async ({
  creator_id,
  title,
  description,
  thumbnail_img_url,
  video_url,
  category,
}: Pick<
  Videos,
  | "creator_id"
  | "title"
  | "description"
  | "thumbnail_img_url"
  | "video_url"
  | "category"
>): Promise<{
  data: Videos | null;
  success: boolean;
  error: unknown;
  message: string;
}> => {
  try {
    const response = await prisma.videos.create({
      data: {
        creator_id,
        title,
        description,
        thumbnail_img_url,
        video_url,
        category,
      },
    });
    return {
      data: response,
      success: true,
      error: null,
      message: serviceMessages.VIDEO_CREATE_SUCCESS,
    };
  } catch (error) {
    console.log(error);
    return {
      data: null,
      success: false,
      error,
      message: serviceMessages.VIDEO_UPLOAD_FAILURE,
    };
  }
};
