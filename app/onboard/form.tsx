"use client";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
export const UserOnboardForm = ({ user }: { user: KindeUser }) => {
    const [role, setRole] = useState("INDIVIDUAL");
    const router = useRouter();

    const handleCreateUser = async (e: any) => {
        e.preventDefault();

        // Add user to DB
        const BASE_API_URL = process.env.BASE_API_URL;
        const response = await fetch(`${BASE_API_URL}/user`, {
            method: "POST",
            body: JSON.stringify({
                id: user.id,
                first_name: user.given_name,
                last_name: user.family_name,
                email: user.email,
                role,
                profile_image: user.picture,
            }),
        });
        console.log(response);
        if (role === "ORGANIZATION") {
            router.push("/onboard/org");
        } else {
            router.push("/dashboard");
        }
    };
    return (
        <Card className="w-[20rem]">
            <CardHeader>
                <CardTitle>What is your role?</CardTitle>
                <CardDescription>
                    You can set your role as individual user or organization in
                    our application
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form
                    onSubmit={handleCreateUser}
                    className="flex justify-start items-start flex-col gap-4"
                >
                    <div className="w-full text-lg">
                        <Label htmlFor="role">Your role</Label>
                        <Select
                            name="role"
                            required
                            defaultValue="INDIVIDUAL"
                            onValueChange={(value: string) => {
                                setRole(value);
                            }}
                        >
                            <SelectTrigger id="role">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent position="popper">
                                <SelectItem value="INDIVIDUAL">
                                    Individual
                                </SelectItem>
                                <SelectItem value="ORGANIZATION">
                                    Organization
                                </SelectItem>
                            </SelectContent>
                        </Select>
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
