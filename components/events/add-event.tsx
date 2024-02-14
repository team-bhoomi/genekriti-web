"use client";
import { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useFormState, useFormStatus } from "react-dom";
import { createEventAction } from "@/lib/actions/events/createEventAction";


export const AddEvent = ({ org_id }: { org_id: string }) => {
    const { pending } = useFormStatus()
    //TODO : Try to use this in future
    // const formRef = useRef<HTMLFormElement>(null);
    // const [formState, formAction] = useFormState(createEventAction, {
    //     errors: undefined,
    //     fieldValues: {
    //         address: "",
    //         city: "",
    //         state: "",
    //         pincode: 0,
    //         country: "",
    //         event_banner_url: "",
    //         event_name: "",
    //         event_description: "",
    //         mode: "OFFLINE",
    //         organnizer_id: "",
    //         end_date: new Date(),
    //         start_date: new Date(),
    //     },
    //     message: "",
    //     success: false,
    // })

    // useEffect(() => {
    //     if (formState.success) {
    //         formRef.current?.reset();
    //     }
    // }, [formState])

    return (
        <form action={createEventAction} className="flex h-full justify-between gap-5 px-5">
            <input className="hidden" defaultValue={org_id} name="org_id" />
            <div className="flex flex-col gap-5 pr-5 w-full *:flex *:flex-col *:gap-1 *:text-lg *:font-normal">
                <div className="w-full bg-slate-700 rounded-xl h-[200px]"></div>

                <Button variant={"outline"} className="w-fit z-10">
                    Add event banner
                    <Input type="file" className="absolute opacity-0 w-fit" />
                </Button>
                <div className="*:text-lg">
                    <Label>Event Name</Label>
                    <Input required name="event_name" type="text" placeholder="Event Name" />
                </div>

                <div className="*:text-lg">
                    <Label>Event Description</Label>
                    <Input required type="text" name="event_description" placeholder="Event Description" />
                </div>
            </div>
            <div className="flex flex-col items-center gap-5 pr-5 w-full *:flex *:items-center *:gap-4 *:w-full">
                <div className="*:text-lg !flex-row items-center !gap-5">
                    <Label>Mode :</Label>
                    <Select required name="mode" defaultValue="OFFLINE">
                        <SelectTrigger className="w-[180px]">
                            <SelectValue
                                placeholder="Offline" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="OFFLINE">Offline</SelectItem>
                            <SelectItem value="ONLINE">Online</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="*:text-lg">
                    <Label className="flex w-fit whitespace-pre">
                        Address :
                    </Label>
                    <Input required name="address" type="text" placeholder="Hall No 22" />
                </div>
                <div className="*:gap-1 *:flex *:flex-col *:w-full">
                    <div className="*:text-lg">
                        <Label>City</Label>
                        <Input required name="city" type="text" placeholder="Bhopal" />
                    </div>
                    <div className="*:text-lg">
                        <Label>State</Label>
                        <Input required name="state" type="text" placeholder="Madhya Pradesh" />
                    </div>
                </div>

                <div className="*:gap-1 *:flex *:flex-col *:w-full">
                    <div className="*:text-lg">
                        <Label>Country</Label>
                        <Input required name="country" type="text" placeholder="India" />
                    </div>
                    <div className="*:text-lg">
                        <Label>Pincode</Label>
                        <Input required name="pincode"
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

                <Button type="submit" className="!w-fit mt-4">{pending ? "LOADING..." : "Publish event"}</Button>
            </div>
        </form>
    );
};
