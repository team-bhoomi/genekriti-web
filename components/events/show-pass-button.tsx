import { redirect } from "next/navigation";
import { Button } from "../ui/button";

export default async function ShowPassButton({ user_id, event_id }: { user_id: string, event_id: string }) {

  const showPassAction = async (formdata: FormData) => {
    "use server";
    const event_id = formdata.get("event_id") as string;
    const user_id = formdata.get("user_id") as string;
    redirect(`/attendees/${event_id}/${user_id}`);
  }
  return (
    <div>
      <p>You are registered for the event</p>
      <form action={showPassAction}>
        <input className="hidden" name="event_id" defaultValue={event_id} />
        <input className="hidden" name="user_id" defaultValue={user_id} />
        <Button>Show Pass</Button>
      </form>
    </div>
  )
}