"use client";

import { Pencil } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export const EditEventButton = ({ event_id }: { event_id: string }) => {
  const router = useRouter();
  return (
    <Button
      size={"sm"}
      variant={"outline"}
      className="text-base text-black flex items-center gap-1"
      onClick={() => {
        router.push(`/events/edit/${event_id}`);
      }}
    >
      <Pencil width={18} height={18} />
      Edit Event
    </Button>
  )
}