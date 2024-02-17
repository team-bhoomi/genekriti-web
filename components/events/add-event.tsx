"use client";
import { FormEvent, useEffect, useRef, useState } from "react";
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
import { SingleImageUpload } from "../edgestore/upload-image";
import { eventMode } from "@prisma/client";
import { useEdgeStore } from "@/lib/edgestore";
import { SingleImageDropzone } from "../edgestore/SingleImageDropzone";


export const AddEvent = ({ org_id }: { org_id: string }) => {
    const { pending } = useFormStatus()
    const [eventName, setEventName] = useState("");
    const [eventDescription, setEventDescription] = useState("");
    const [mode, setMode] = useState<eventMode>("OFFLINE");
    const [address, SetAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [pincode, setPincode] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [file, setFile] = useState<File>();
    const { edgestore } = useEdgeStore();
    const [isLoading, setIsLoading] = useState(false);
    // const [uploadedImgUrl, setUploadedImgUrl] = useState("");
    // const [isImageUploaded, setImageUploade] = useState(true);

    const handleImageUpload = async (file: File): Promise<string> => {
        let url = "";
        if (file) {
            const res = await edgestore.publicFiles.upload({
                file,
                onProgressChange: (progress) => {
                    console.log(progress);
                },
            });
            // console.log(res);
            url = res.url;
        }
        return url;
    }
    const hanldeCreateEvent = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData();
        const event_banner_url = await handleImageUpload(file!);
        formData.append("event_banner_url", event_banner_url);

        formData.append("event_name", eventName);
        formData.append("event_description", eventDescription);
        formData.append("mode", mode as eventMode);
        formData.append("address", address);
        formData.append("city", city);
        formData.append("state", state);
        formData.append("country", country);
        formData.append("pincode", pincode);
        formData.append("start_date", startDate);
        formData.append("end_date", endDate);
        formData.append("org_id", org_id);
        await createEventAction(formData);
        setIsLoading(false);
    }
    return (
        <form onSubmit={(e) => {
            hanldeCreateEvent(e);
        }} className="flex h-full justify-between gap-5 px-5">
            <input className="hidden" defaultValue={org_id} name="org_id" />
            <div className="flex flex-col gap-5 pr-5 w-full *:flex *:flex-col *:gap-1 *:text-lg *:font-normal">
                {/* <div className="w-full bg-slate-700 rounded-xl h-[200px]"></div> */}
                <div>
                    <SingleImageDropzone
                        width={200}
                        height={200}
                        value={file}
                        onChange={(file) => {
                            setFile(file);
                        }}
                    />
                </div>
                <div className="*:text-lg">
                    <Label>Event Name</Label>
                    <Input required onChange={e => { setEventName(e.target.value) }} name="event_name" type="text" placeholder="Event Name" />
                </div>

                <div className="*:text-lg">
                    <Label>Event Description</Label>
                    <Input required onChange={e => { setEventDescription(e.target.value) }} type="text" name="event_description" placeholder="Event Description" />
                </div>
            </div>
            <div className="flex flex-col items-center gap-5 pr-5 w-full *:flex *:items-center *:gap-4 *:w-full">
                <div className="*:text-lg !flex-row items-center !gap-5">
                    <Label>Mode :</Label>
                    <Select required onValueChange={(value: eventMode) => { setMode(value) }} name="mode" defaultValue="OFFLINE">
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
                    <Input onChange={e => SetAddress(e.target.value)} required name="address" type="text" placeholder="Hall No 22" />
                </div>
                <div className="*:gap-1 *:flex *:flex-col *:w-full">
                    <div className="*:text-lg">
                        <Label>City</Label>
                        <Input onChange={e => { setCity(e.target.value) }} required name="city" type="text" placeholder="Bhopal" />
                    </div>
                    <div className="*:text-lg">
                        <Label>State</Label>
                        <Input onChange={e => { setState(e.target.value) }} required name="state" type="text" placeholder="Madhya Pradesh" />
                    </div>
                </div>

                <div className="*:gap-1 *:flex *:flex-col *:w-full">
                    <div className="*:text-lg">
                        <Label>Country</Label>
                        <Input onChange={e => setCountry(e.target.value)} required name="country" type="text" placeholder="India" />
                    </div>
                    <div className="*:text-lg">
                        <Label>Pincode</Label>
                        <Input onChange={e => setPincode(e.target.value)}
                            required name="pincode"
                            type="number"
                            className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            placeholder="44661"
                        />
                    </div>
                </div>

                <div className="*:gap-1 *:flex *:flex-col *:w-full">
                    <div className="*:text-lg">
                        <Label>Start Date & Time</Label>
                        <Input onChange={e => setStartDate(e.target.value)} name="start_date" required type="datetime-local" />
                    </div>
                    <div className="*:text-lg">
                        <Label>End Date & Time</Label>
                        <Input onChange={e => setEndDate(e.target.value)} name="end_date" required type="datetime-local" />
                    </div>
                </div>

                <Button type="submit" className="!w-fit mt-4">{pending ? "LOADING..." : "Publish event"}</Button>
                {/* {pending && <div className="text-red-400 text-2xl">HELLLSOSOOSOOSOSOSOOSOSOSOSOS</div>} */}
            </div>
        </form>
    );
};
