import { VideoCard } from "@/components/rekriti/video-card";
import { SearchBar } from "./search-bar";

export default function Page() {
    return (
        <main className="w-full min-h-screen pr-4 flex flex-col">
            <div className="sticky top-[56px] left-0 bg-accent flex items-center justify-between w-full text-4xl font-semibold">
                ReKriti
            </div>
            <SearchBar />
            <div className="flex items-center gap-10 py-6 px-4 w-full">
                <div className="font-semibold text-xl">Upload Images:</div>
                <div className="w-[300px] h-32 bg-blue-300 rounded-xl"></div>
                <div className="w-[300px] h-32 bg-blue-300 rounded-xl"></div>
            </div>
            <div className="flex flex-col gap-3 p-4 pb-10">
                <div className="text-3xl font-semibold">Videos</div>
                <div className="flex flex-wrap items-center justify-between gap-10">
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                </div>
            </div>
        </main>
    );
}
