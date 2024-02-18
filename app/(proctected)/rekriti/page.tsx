import { VideoCard } from "@/components/rekriti/video-card";
import { SearchBar } from "./search-bar";
import { getAllVideos } from "@/lib/services/videos/getAllVidoes";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MessageCirclePlusIcon, Store, Upload } from "lucide-react";

export default async function Page() {
    const videos = await getAllVideos();
    return (
        <main className="w-full min-h-screen pr-4 flex flex-col">

            <div className="sticky top-[56px] left-0 bg-accent w-full flex items-center justify-between z-10">
                <div className="sticky top-[56px] left-0 bg-accent flex items-center justify-between w-full text-4xl font-semibold">
                    ReKriti
                </div>
                <div className="flex gap-5 items-center">
                    <Link
                        href={"/rekriti/ask"}
                        className="group min-w-[8rem] flex items-center gap-2 bg-primary/30 rounded-md text-center font-medium px-4 py-2 transition hover:bg-primary/90 hover:text-white"
                    >
                        <MessageCirclePlusIcon width={18} height={18} />
                        Ask AI
                    </Link>
                    <Link
                        href={"/rekriti/video"}
                        className="group whitespace-nowrap flex items-center gap-2 bg-primary/30 rounded-md text-center font-medium px-4 py-2 transition hover:bg-primary/90 hover:text-white"
                    >
                        <Upload width={18} height={18} />
                        Upload Video
                    </Link>
                </div>
            </div>
            <SearchBar />
            {/* <div className="flex items-center gap-10 py-6 px-4 w-full">
                <div className="font-semibold text-xl">Upload Images:</div>
                <div className="w-[300px] h-32 bg-blue-300 rounded-xl"></div>
                <div className="w-[300px] h-32 bg-blue-300 rounded-xl"></div>
            </div> */}
            <div className="flex flex-col gap-3 p-4 pb-10">
                <div className="text-3xl font-semibold">Videos</div>
                <div className="flex flex-wrap items-center justify-start gap-10">
                    {videos?.data ? videos.data.map((video, i) => {
                        return (
                            <VideoCard video={video} key={i} />
                        )
                    }) :
                        <div>
                            <Link href={"/rekriti/upload"}>
                                <Button>Upload Video</Button>
                            </Link>
                        </div>
                    }
                </div>
            </div>
        </main>
    );
}
