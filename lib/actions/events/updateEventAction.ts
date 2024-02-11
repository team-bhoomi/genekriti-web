"use server";

import { updateEventById } from "@/lib/services/events/updateEventById";
import { eventMode } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const updateEventAction = async (formData: FormData) => {
  const resposne = await updateEventById({
    event_name: formData.get("event_name") as string,
    event_id: formData.get("event_id") as string,
    event_description: formData.get("event_description") as string,
    city: formData.get("city") as string,
    pincode: parseInt(formData.get("pincode") as string),
    address: formData.get("address") as string,
    state: formData.get("state") as string,
    country: formData.get("country") as string,
    start_date: new Date(formData.get("start_date") as string),
    end_date: new Date(formData.get("end_date") as string),
    event_banner_url: (formData.get("event_banner_url") as string) || null,
    mode: formData.get("mode") as eventMode,
  });

  // TODO : revalidate path /event/:id
  // revalidatePath(`/events/${formData.get("event_id") as string}`)
};
