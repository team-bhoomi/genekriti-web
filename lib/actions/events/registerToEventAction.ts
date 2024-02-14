"use server";
import { registerToEvent } from "@/lib/services/events/registerToEvent";
import { revalidatePath } from "next/cache";
export const registerToEventAction = async (formData: FormData) => {
  const response = await registerToEvent({
    event_id: formData.get("event_id") as string,
    user_id: formData.get("user_id") as string,
  });
  revalidatePath(`/events/${formData.get("event_id") as string}`);
};
