"use server";
/**
 * USE CASE
 * 1. To use in delete event form to delete an event by its Id
 */
import { deleteEvent } from "@/lib/services/events/deleteEvent";
import { redirect } from "next/navigation";

export const deleteEventAction = async (formData: FormData) => {
  try {
    const response = await deleteEvent({
      event_id: formData.get("event_id") as string,
    });
    redirect("/events");
  } catch (error) {
    console.log(error);
  }
};
