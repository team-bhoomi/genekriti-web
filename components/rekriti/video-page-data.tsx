import { CommentSection } from "./comment-section";
import { SuggestedVideos } from "./suggested-videos";
import { VideoData } from "./video-data";

export const VideoPageData = () => {
    return (
        <div className="w-full h-full flex justify-between gap-28 pl-10 pr-10">
            <VideoData />

            <div className="w-fit flex flex-col gap-2">
                <div className="text-lg font-semibold">Suggested videos</div>
                <SuggestedVideos />
                <div className="text-lg font-semibold">Comments</div>
                <CommentSection />
            </div>
        </div>
    );
};
