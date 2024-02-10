"use server";

import { unregisterFromEvent } from "@/lib/services/events/unregisterFromEvent";
import { revalidatePath } from "next/cache";

export const unregisterFromEventAction = async (formData: FormData) => {
  const response = await unregisterFromEvent({
    user_id: formData.get("user_id") as string,
    event_id: formData.get("event_id") as string,
  });
  revalidatePath(`/events/${formData.get("event_id") as string}`);
};
