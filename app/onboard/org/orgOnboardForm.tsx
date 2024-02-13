"use client";
import { FormTextInput } from "@/components/custom/FormTextInput";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const OrgOnboardForm = ({ user }: { user: KindeUser }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [founder_name, setFounderName] = useState("");

    const router = useRouter();
    const handleFormSubmit = async (e: any) => {
        e.preventDefault();
        const response = await fetch("http://localhost:3000/api/org", {
            method: "POST",
            body: JSON.stringify({
                org_id: user.id,
                city,
                address,
                state,
                country,
                name,
                founder_name,
                phone,
                description,
                email,
            }),
        });
        console.log(response);
        router.push("/dashboard");
    };
    return (
        <Card className="w-auto">
            <CardHeader>
                <CardTitle>Tell us more!</CardTitle>
                <CardDescription>
                    We use your organization details to improve your experience
                    in the app
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form
                    onSubmit={handleFormSubmit}
                    className="flex flex-col gap-5"
                >
                    <div className="*:flex *:justify-start *:items-start *:flex-col *:gap-4 *:w-full flex gap-5">
                        <div>
                            <input
                                className="hidden"
                                name="org_id"
                                defaultValue={user?.id}
                            />
                            <FormTextInput
                                label="Organization Name"
                                name="name"
                                placeholder="Green Club"
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                            />
                            <FormTextInput
                                label="Organization Description"
                                name="description"
                                placeholder="We save enviornment by ..."
                                onChange={(e) => {
                                    setDescription(e.target.value);
                                }}
                            />
                            <div className="w-full flex justify-between items-center gap-4">
                                <FormTextInput
                                    label="Organization Email"
                                    name="email"
                                    placeholder="org@example.com"
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                />
                                <FormTextInput
                                    label="Phone Number"
                                    name="phone"
                                    placeholder="940 XXX XXXX"
                                    onChange={(e) => {
                                        setPhone(e.target.value);
                                    }}
                                />
                            </div>
                            <FormTextInput
                                label="Founder"
                                name="founder_name"
                                placeholder="Jhon Doe"
                                onChange={(e) => {
                                    setFounderName(e.target.value);
                                }}
                            />
                        </div>
                        <div>
                            <FormTextInput
                                label="Address"
                                name="address"
                                placeholder="123 Baker Street"
                                onChange={(e) => {
                                    setAddress(e.target.value);
                                }}
                            />
                            <FormTextInput
                                label="City"
                                name="city"
                                placeholder="Bhopal"
                                onChange={(e) => {
                                    setCity(e.target.value);
                                }}
                            />
                            <FormTextInput
                                label="State"
                                name="state"
                                placeholder="Madhya Pradesh"
                                onChange={(e) => {
                                    setState(e.target.value);
                                }}
                            />
                            <FormTextInput
                                label="Country"
                                name="country"
                                placeholder="India"
                                onChange={(e) => {
                                    setCountry(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className="w-full text-center">
                        <Button
                            type="submit"
                            className="bg-primary/50 text-black hover:text-white"
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
};
