import { redirect } from "next/navigation";
import { UserOnboardForm } from "./form";
import { prisma } from "@/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function OnboardUser() {
    const { getUser, isAuthenticated } = getKindeServerSession();
    const user = await getUser();
    const isAuthed = await isAuthenticated();

    if (!isAuthed) {
        redirect("/");
    }

    if (user) {
        const existingUser = await prisma.user.findUnique({
            where: {
                id: user.id,
            },
        });
        if (existingUser) {
            redirect("/dashboard");
        }
        return (
            <div className="w-full h-screen bg-gradient-to-r from-[#d4fc79] to-[#96e6a1] flex justify-center items-center">
                <UserOnboardForm user={user} />
            </div>
        );
    }
}
