import { AddEvent } from "@/components/events/add-event";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Page() {
    const { getUser } = getKindeServerSession()
    const user = await getUser()
    return (
        <main className="w-full min-h-screen pt-4 pr-4 flex flex-col gap-6">
            <div className="text-xl font-semibold">Events Details</div>
            <AddEvent org_id={user?.id!} />
        </main>
    );
}
