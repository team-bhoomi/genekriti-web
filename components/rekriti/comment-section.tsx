import { SendHorizonal } from "lucide-react";
import { Button } from "../ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { createCommentAction } from "@/lib/actions/comments/createCommentAction";

export const CommentSection = async ({ video }: { video: any }) => {
    const { getUser } = getKindeServerSession()
    const currentUser = await getUser()
    return (
        <div className="flex flex-col gap-3">
            <form action={createCommentAction} className="flex items-center gap-2">
                <textarea
                    name="comment"
                    className="w-full h-fit p-2 rounded-lg resize-none"
                    placeholder="Write your comment..."
                />
                <input className="hidden" name="user_id" defaultValue={currentUser?.id} />
                <input className="hidden" name="video_id" defaultValue={video.video_id} />
                <Button variant={"ghost"} className="group">
                    <SendHorizonal
                        width={22}
                        height={22}
                        className="group-hover:fill-primary/50 group-hover:stroke-primary"
                    />
                </Button>
            </form>


            <CommentsCard />
            <CommentsCard />
            <CommentsCard />
            <CommentsCard />
            <CommentsCard />


            {/* <div className="flex items-center gap-2">
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
            </div> */}
        </div>
    );
};


const CommentsCard = () => {
    return (
        <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-red-500"></div>
            <div className="flex flex-col">
                <span className="text-sm text-muted-foreground font-semibold">
                    Jane Smith
                </span>
                <span>The idea is really very good</span>
            </div>
        </div>
    )
}