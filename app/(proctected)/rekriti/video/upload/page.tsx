import { AddVideo } from "@/components/rekriti/add-video";

export default function Page() {
    return (
        <main className="w-full min-h-screen pr-4 flex flex-col">
            <div className="sticky top-[56px] left-0 bg-accent flex items-center justify-between w-full text-4xl font-semibold">
                ReKriti
            </div>
            <div className="flex flex-col gap-4 px-4 pb-10 pt-4">
                <div className="text-2xl font-semibold">Upload Videos</div>
                <AddVideo />
            </div>
        </main>
    );
}
