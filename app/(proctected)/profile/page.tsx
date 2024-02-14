import { ProfileHistory } from "@/components/profile/profile-history";

export default function Page() {
    return (
        <main className="w-full min-h-screen pr-4 pb-10 flex flex-col gap-5">
            <div className="sticky top-[56px] left-0 bg-accent flex items-center justify-between w-full text-4xl font-semibold">
                Profile
            </div>

            <div className="flex items-center gap-5">
                <div className="w-20 h-20 rounded-full bg-red-500"></div>
                <div className="flex flex-col gap-1">
                    <div className="text-xl font-semibold">John Doe</div>
                    <div>johndoe@gmail.com</div>
                    <div className="text-sm text-muted-foreground font-medium">
                        Individual
                    </div>
                </div>
            </div>
            <div className="border-b-2 border-slate-300" />
            <div className="text-lg font-medium">Account History</div>
            <ProfileHistory />
        </main>
    );
}
