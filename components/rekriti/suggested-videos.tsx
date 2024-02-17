import { getAllVideos } from "@/lib/services/videos/getAllVidoes";
import { ScrollArea } from "../ui/scroll-area";
import { SuggestedVideoCard } from "./suggested-video-card";
import Link from "next/link";
import { Button } from "../ui/button";

export const SuggestedVideos = async () => {
    const { data: videos } = await getAllVideos();
    return (
        <ScrollArea className="h-[452px] flex flex-col items-end gap-3">
            {videos?.length != 0 ?
                videos?.map((video: any, i: number) => {
                    return (
                        <SuggestedVideoCard key={i} video={video} />
                    )
                })
                : <div>
                    <div>No videos uploaded yet</div>
                    <Link href={"/rekriti/video/upload"}>
                        <Button>Create Video</Button>
                    </Link>
                </div>
            }
        </ScrollArea>
    );
};
