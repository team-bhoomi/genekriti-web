import { AIPrompt } from "@/components/rekriti/ai-prompt";
import { VideoCard } from "@/components/rekriti/video-card";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Page() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    return (
        <main className="w-full min-h-screen pr-4 flex flex-col">
            <div className="sticky top-[56px] left-0 bg-accent flex items-center justify-between w-full text-4xl font-semibold">
                ReKriti : Ask
            </div>
            <div className="flex flex-col gap-14 pt-4 px-4 pb-10">
                <AIPrompt user_id={user?.id!} />
                {/* <div className="flex flex-col gap-3">
                    <div className="text-2xl font-semibold">
                        Suggested Videos :
                    </div>

                    <div className="flex flex-wrap gap-10">
                    </div>
                </div> */}
            </div>
        </main>
    );
}
