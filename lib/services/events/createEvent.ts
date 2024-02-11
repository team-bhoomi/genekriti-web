/**
 * USE CASE
 * 1. In createEventAction to create a new event by an organization
 */

import { prisma } from "@/lib/prisma";
import { Event } from "@prisma/client";
import { revalidatePath } from "next/cache";

export type EventProps = Pick<
  Event,
  | "organizer_id"
  | "event_name"
  | "event_description"
  | "event_banner_url"
  | "address"
  | "city"
  | "state"
  | "country"
  | "pincode"
  | "start_date"
  | "end_date"
  | "mode"
>;

export const createEvent = async (
  props: EventProps
): Promise<{ data: Event | null; success: boolean }> => {
  try {
    const response = await prisma.event.create({
      data: {
        organizer_id: props.organizer_id,
        event_name: props.event_name,
        event_description: props.event_description,
        event_banner_url: props.event_banner_url,
        address: props.address,
        city: props.city,
        state: props.state,
        country: props.country,
        pincode: props.pincode,
        start_date: props.start_date,
        end_date: props.end_date,
        mode: props.mode,
      },
    });
    // TODO : Write the path of events page below:
    // revalidatePath("/events");
    return { data: response, success: true };
  } catch (error) {
    console.log(error);
    return { data: null, success: false };
  }
};
