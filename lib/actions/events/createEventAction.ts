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
import { Event } from "@prisma/client";
import { redirect } from "next/navigation";

type Fields = {
  organnizer_id: string;
  event_name: string;
  event_description: string;
  address: string;
  city: string;
  state: string;
  country: string;
  pincode: number;
  event_banner_url: string;
  mode: eventMode;
  start_date: Date;
  end_date: Date;
};
export type FromState = {
  fieldValues: Fields | null;
  success: boolean;
  errors: Record<keyof Fields, string> | undefined;
  message: string;
};
export const createEventAction = async (formData: FormData) => {
  const isEndDateBefore = dayjs(formData.get("end_date") as string).isBefore(
    dayjs(formData.get("start_date") as string)
  );
  if (isEndDateBefore) {
    console.log("End date should be after start date");
    return {
      success: false,
      fieldValues: null,
      errors: undefined,
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

  if (response) {
    redirect("/events");
  }
};
