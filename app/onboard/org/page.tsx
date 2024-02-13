import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { OrgOnboardForm } from "./orgOnboardForm";
import { getOrgById } from "@/lib/services/org/getOrgById";
export default async function OnboardOrg() {
    const { isAuthenticated, getUser } = getKindeServerSession();
    const isAuthed = await isAuthenticated();
    if (!isAuthed) {
        redirect("/");
    }
    const user = await getUser();
    const { success } = await getOrgById({ org_id: user?.id as string });
    if (success) {
        redirect("/dashboard");
    }

    return (
        <div className="w-full h-screen bg-gradient-to-r from-[#d4fc79] to-[#96e6a1] grid place-content-center">
            <OrgOnboardForm user={user!} />
        </div>
    );
}
