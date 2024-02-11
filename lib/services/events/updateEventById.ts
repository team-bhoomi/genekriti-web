/**
 * USE CASES
 * 1. Use in updateEventAction to update an event by organization which created that event
 */
import { serviceMessages } from "@/lib/constants/serviceMessage";
import { prisma } from "@/lib/prisma";
import { Event } from "@prisma/client";

export const updateEventById = async (
  props: Pick<
    Event,
    | "event_id"
    | "address"
    | "city"
    | "state"
    | "country"
    | "pincode"
    | "end_date"
    | "start_date"
    | "event_name"
    | "event_description"
    | "event_banner_url"
    | "mode"
  >
): Promise<{
  data: Event | null;
  success: boolean;
  error: unknown;
  message: string;
}> => {
  try {
    const response = await prisma.event.update({
      data: {
        event_name: props.event_name,
        event_description: props.event_description,
        address: props.city,
        city: props.city,
        pincode: props.pincode,
        state: props.state,
        country: props.country,
        start_date: props.start_date,
        end_date: props.end_date,
        event_banner_url: props.event_banner_url,
        mode: props.mode,
      },
      where: {
        event_id: props.event_id,
      },
    });
    return {
      data: response,
      error: null,
      success: true,
      message: serviceMessages.EVENT_UPDATE_SUCCESS,
    };
  } catch (error) {
    console.log(error);
    return {
      data: null,
      error,
      success: false,
      message: serviceMessages.EVENT_UPDATE_FAILURE,
    };
  }
};
