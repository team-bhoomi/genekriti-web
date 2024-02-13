import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export const AddEvent = () => {
    return (
        <form className="flex h-full justify-between gap-5 px-5">
            <div className="flex flex-col gap-5 pr-5 w-full *:flex *:flex-col *:gap-1 *:text-lg *:font-medium">
                <div className="w-full bg-slate-700 rounded-xl h-[200px]"></div>

                <Button variant={"outline"} className="w-fit z-10">
                    Add event banner
                    <Input type="file" className="absolute opacity-0 w-fit" />
                </Button>
                <div className="*:text-lg">
                    <Label>Event Name</Label>
                    <Input type="text" placeholder="Product Name" />
                </div>

                <div className="*:text-lg">
                    <Label>Event Description</Label>
                    <Input type="text" placeholder="Product Description" />
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
                                value={"offline"}
                                className="w-fit"
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
                                value={"online"}
                                className="w-fit"
                            />
                            Online
                        </Label>
                    </div>
                </div>
                <div className="*:text-lg">
                    <Label className="flex w-fit whitespace-pre">
                        Address :
                    </Label>
                    <Input type="text" placeholder="Hall No 22" />
                </div>
                <div className="*:gap-1 *:flex *:flex-col *:w-full">
                    <div className="*:text-lg">
                        <Label>City</Label>
                        <Input type="text" placeholder="Bhopal" />
                    </div>
                    <div className="*:text-lg">
                        <Label>State</Label>
                        <Input type="text" placeholder="Madhya Pradesh" />
                    </div>
                </div>

                <div className="*:gap-1 *:flex *:flex-col *:w-full">
                    <div className="*:text-lg">
                        <Label>Country</Label>
                        <Input type="text" placeholder="India" />
                    </div>
                    <div className="*:text-lg">
                        <Label>Pincode</Label>
                        <Input
                            type="number"
                            className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            placeholder="44661"
                        />
                    </div>
                </div>

                <div className="*:gap-1 *:flex *:flex-col *:w-full">
                    <div className="*:text-lg">
                        <Label>Start Date & Time</Label>
                        <Input type="datetime-local" />
                    </div>
                    <div className="*:text-lg">
                        <Label>End Date & Time</Label>
                        <Input type="datetime-local" />
                    </div>
                </div>
                <Button className="!w-fit mt-4">Publish your event</Button>
            </div>
        </form>
    );
};
