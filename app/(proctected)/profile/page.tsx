import { ProfileHistory } from "@/components/profile/profile-history";
import { getUserById } from "@/lib/services/user/getUserById";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Page() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    const data = await getUserById({ id: user?.id as string });
    // console.log(data);

    return (
        <main className="w-full min-h-screen pr-4 pb-10 flex flex-col gap-5">
            <div className="sticky top-[56px] left-0 bg-accent flex items-center justify-between w-full text-4xl font-semibold">
                Profile
            </div>

            <div className="flex items-center gap-5">
                <div className="w-20 h-20 rounded-full bg-red-500 flex items-center overflow-hidden">
                    <img
                        src={data?.profile_image!}
                        alt="Profile image"
                        loading="lazy"
                        fetchPriority="high"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <div className="text-xl font-semibold">{`${data?.first_name} ${data?.last_name}`}</div>
                    <div>{data?.email}</div>
                    <div className="text-sm text-muted-foreground font-medium">
                        {data?.role}
                    </div>
                </div>
            </div>
            <div className="border-b-2 border-slate-300" />
            <div className="text-lg font-medium">Account History</div>
            {/* {data?.attendees.length === 0 && data?.conversations.length === 0 && data?.payer_transactions?.length === 0 && data?.recipent_transactions.length == 0 && data?.seller.length == 0 ? "No data yet please do something on the website" : <ProfileHistory data={data} />} */}
            <ProfileHistory data={data} />
        </main>
    );
}
