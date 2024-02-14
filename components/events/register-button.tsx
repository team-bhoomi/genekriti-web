"use server";
import { registerToEventAction } from "@/lib/actions/events/registerToEventAction"
import { Button } from "../ui/button"

export const EventRegisterButton = async ({ user_id, event_id }: { user_id: string, event_id: string }) => {
  return (
    <form action={registerToEventAction}>
      <input className="hidden" defaultValue={user_id} name="user_id" />
      <input className="hidden" defaultValue={event_id} name="event_id" />
      <Button className="w-fit">Register Now</Button>
    </form>
  )
}