import { ScrollArea } from "../ui/scroll-area";
import { SuggestedVideoCard } from "./suggested-video-card";

export const SuggestedVideos = () => {
    return (
        <ScrollArea className="h-[452px] flex flex-col items-end gap-3">
            <SuggestedVideoCard />
            <SuggestedVideoCard />
            <SuggestedVideoCard />
            <SuggestedVideoCard />
            <SuggestedVideoCard />
            <SuggestedVideoCard />
        </ScrollArea>
    );
};
