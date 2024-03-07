import { SendHorizonal } from "lucide-react";
import { Button } from "../ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { createCommentAction } from "@/lib/actions/comments/createCommentAction";
import { getAllCommentsOfVideo } from "@/lib/services/videos/comments/getAllCommentsOfVideo";

export const CommentSection = async ({ video }: { video: any }) => {
    const { getUser } = getKindeServerSession()
    const currentUser = await getUser()
    const { data: comments } = await getAllCommentsOfVideo({
        video_id: video.video_id
    })

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

            {comments.map((comment: any, i: number) =>
            (
                <div className="flex items-center gap-2" key={i}>
                    <div className="w-9 h-9 rounded-full overflow-hidden flex items-center">
                        {comment.user.profile_image ? <img src={comment.user.profile_image} alt="user profile" /> :<img src={"/images/proflie_image.jpeg"} alt="user proflie"/>}
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm text-muted-foreground font-semibold">
                            {`${comment.user.first_name} ${comment.user.last_name}`}
                        </span>
                        <span>{comment.comment}</span>
                    </div>
                </div>
            )
            )}
        </div>
    );
};

