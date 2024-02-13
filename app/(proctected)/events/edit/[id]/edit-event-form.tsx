"use client";
import { useEffect, useRef } from "react";

import { useFormState, useFormStatus } from "react-dom";
import { createEventAction } from "@/lib/actions/events/createEventAction";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getEventById } from "@/lib/services/events/getEventById";
import { prisma } from "@/lib/prisma";
import dayjs from "dayjs";
import { updateEventAction } from "@/lib/actions/events/updateEventAction";
import { Select, SelectContent, SelectItem, SelectValue, SelectTrigger } from "@/components/ui/select";


export const EditEvent = async ({ event_id }: { event_id: string }) => {
  const { pending } = useFormStatus();
  const event = await prisma.event.findUnique({ where: { event_id } });
  return (
    <form action={updateEventAction} className="flex h-full justify-between gap-5 px-5">
      <input className="hidden" defaultValue={event_id} name="event_id" />
      <div className="flex flex-col gap-5 pr-5 w-full *:flex *:flex-col *:gap-1 *:text-lg *:font-normal">
        <div className="w-full bg-slate-700 rounded-xl h-[200px]"></div>

        <Button variant={"outline"} className="w-fit z-10">
          Add event banner
          <Input type="file" className="absolute opacity-0 w-fit" />
        </Button>
        <div className="*:text-lg">
          <Label>Event Name</Label>
          <Input required name="event_name" defaultValue={event?.event_name} type="text" placeholder="Event Name" />
        </div>

        <div className="*:text-lg">
          <Label>Event Description</Label>
          <Input required type="text" name="event_description" defaultValue={event?.event_description} placeholder="Event Description" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-5 pr-5 w-full *:flex *:items-center *:gap-4 *:w-full">
        <div className="*:text-lg !flex-row items-center !gap-5">
          <Label>Mode :</Label>
          <div className="flex items-center gap-5">
            <Label
              htmlFor="offline"
              className="flex items-center gap-1 text-lg"
            >
              <Input
                type="radio"
                id="offline"
                name="mode"
                value={"OFFLINE"}
                className="w-fit"
                checked={event?.mode === "OFFLINE"}
              />
              Offline
            </Label>
            <Label
              htmlFor="online"
              className="flex items-center gap-1 text-lg"
            >
              <Input
                type="radio"
                id="online"
                name="mode"
                value={"ONLINE"}
                className="w-fit"
                checked={event?.mode === "ONLINE"}
              />
              Online
            </Label>
          </div>
          {/* <Select required name="mode" defaultValue="OFFLINE">
          
            <SelectTrigger className="w-[180px]">
              <SelectValue
                placeholder="Offline" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="OFFLINE">Offline</SelectItem>
              <SelectItem value="ONLINE">Online</SelectItem>
            </SelectContent>
          </Select> */}
        </div>
        <div className="*:text-lg">
          <Label className="flex w-fit whitespace-pre">
            Address :
          </Label>
          <Input required name="address" defaultValue={event?.address} type="text" placeholder="Hall No 22" />
        </div>
        <div className="*:gap-1 *:flex *:flex-col *:w-full">
          <div className="*:text-lg">
            <Label>City</Label>
            <Input required defaultValue={event?.city} name="city" type="text" placeholder="Bhopal" />
          </div>
          <div className="*:text-lg">
            <Label>State</Label>
            <Input required name="state" defaultValue={event?.state} type="text" placeholder="Madhya Pradesh" />
          </div>
        </div>

        <div className="*:gap-1 *:flex *:flex-col *:w-full">
          <div className="*:text-lg">
            <Label>Country</Label>
            <Input required name="country" defaultValue={event?.country} type="text" placeholder="India" />
          </div>
          <div className="*:text-lg">
            <Label>Pincode</Label>
            <Input required defaultValue={event?.pincode} name="pincode"
              type="number"
              className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              placeholder="44661"
            />
          </div>
        </div>

        <div className="*:gap-1 *:flex *:flex-col *:w-full">
          <div className="*:text-lg">
            <Label>Start Date & Time</Label>
            <Input name="start_date" required type="datetime-local" />
          </div>
          <div className="*:text-lg">
            <Label>End Date & Time</Label>
            <Input name="end_date" required type="datetime-local" />
          </div>
        </div>

        <Button type="submit" className="!w-fit mt-4">{pending ? "LOADING..." : "Edit Event"}</Button>
      </div>
    </form>
  );
};
