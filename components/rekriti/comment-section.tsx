import { SendHorizonal } from "lucide-react";
import { Button } from "../ui/button";

export const CommentSection = () => {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
                <textarea
                    className="w-full h-fit p-2 rounded-lg resize-none"
                    placeholder="Write your comment..."
                />
                <Button variant={"ghost"} className="group">
                    <SendHorizonal
                        width={22}
                        height={22}
                        className="group-hover:fill-primary/50 group-hover:stroke-primary"
                    />
                </Button>
            </div>

            <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-red-500"></div>
                <div className="flex flex-col">
                    <span className="text-sm text-muted-foreground font-semibold">
                        John Doe
                    </span>
                    <span>The video is very nice. Thank you</span>
                </div>
            </div>

            <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-red-500"></div>
                <div className="flex flex-col">
                    <span className="text-sm text-muted-foreground font-semibold">
                        Jane Smith
                    </span>
                    <span>The idea is really very good</span>
                </div>
            </div>
        </div>
    );
};
