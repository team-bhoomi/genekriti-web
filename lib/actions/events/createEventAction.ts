"use server";

/**
 * USE CASE
 * 1. In create event form as server action to create event
 */
import { createEvent } from "@/lib/services/events/createEvent";
import { revalidatePath } from "next/cache";
import dayjs from "dayjs";
import { actionMessages } from "@/lib/constants/actionMessage";
import { eventMode } from "@prisma/client";
export const createEventAction = async (
  formData: FormData
): Promise<{
  data: any;
  success: boolean;
  error: unknown;
  message: string;
}> => {
  try {
    const isEndDateBefore = dayjs(formData.get("end_date") as string).isBefore(
      dayjs(formData.get("start_date") as string)
    );
    if (isEndDateBefore) {
      console.log("End date should be after start date");
      return {
        success: false,
        data: null,
        error: "End date should be after start date",
        message: actionMessages.EVENT_END_DATE_BEFORE,
      };
    }
    const response = await createEvent({
      organizer_id: formData.get("org_id") as string,
      event_description: formData.get("event_description") as string,
      event_name: formData.get("event_name") as string,
      start_date: new Date(formData.get("start_date") as string),
      end_date: new Date(formData.get("end_date") as string),
      address: formData.get("address") as string,
      city: formData.get("city") as string,
      state: formData.get("state") as string,
      country: formData.get("country") as string,
      pincode: parseInt(formData.get("pincode") as string),
      event_banner_url: (formData.get("event_banner_url") as string) || null,
      mode: formData.get("mode") as eventMode,
    });

    //TODO : Revalidate events path to make it dynamic
    revalidatePath("/events");
    return {
      success: true,
      data: response,
      error: null,
      message: actionMessages.EVENT_CREATED,
    };
  } catch (error) {
    console.log("Some error in create event action", error);
    return {
      success: false,
      data: null,
      error,
      message: actionMessages.EVENT_NOT_CREATED,
    };
  }
};
