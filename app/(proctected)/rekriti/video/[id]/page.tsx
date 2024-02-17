import { VideoPageData } from "@/components/rekriti/video-page-data";
import { getVideoById } from "@/lib/services/videos/getVideoById";

interface VideoPageParams {
    params: {
        id: string
    }
}
export default async function Page({ params }: VideoPageParams) {
    const video = await getVideoById({ video_id: params.id });
    return (
        <main className="w-full min-h-screen pr-4 flex flex-col">
            <div className="sticky top-[56px] left-0 bg-accent flex items-center justify-between w-full text-4xl font-semibold">
                ReKriti
            </div>
            <div className="flex flex-wrap gap-10 p-4 pb-10">
                <VideoPageData video={video.data} />
            </div>
        </main>
    );
}
