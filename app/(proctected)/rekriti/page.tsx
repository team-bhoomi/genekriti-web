import { VideoCard } from "@/components/rekriti/video-card";

export default function Page() {
    return (
        <main className="w-full min-h-screen pr-4 flex flex-col">
            <div className="sticky top-[56px] left-0 bg-accent flex items-center justify-between w-full text-4xl font-semibold">
                ReKriti
            </div>
            {/* <SearchBar /> */}
            <div className="flex flex-wrap gap-10 p-4 pb-10">
                <VideoCard />
                <VideoCard />
                <VideoCard />
            </div>
        </main>
    );
}
