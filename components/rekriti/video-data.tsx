import { ThumbsUp } from "lucide-react";
import { VideoPlayer } from "./video-player";
import { Label } from "../ui/label";
import { Badge } from "../ui/badge";
import dayjs from "dayjs";
import { convertCategoryToLowerCase } from "@/lib/constants/convertCategoryToLowerCase";
import { Button } from "../ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { likeVideoAction } from "@/lib/actions/likes/likeVideoAction";


export const VideoData = async ({ video }: { video: any }) => {
    const { getUser } = getKindeServerSession()
    const user = await getUser();
    return (
        <div className="w-full flex flex-col gap-2">
            <VideoPlayer video_url={video.video_url} />
            <div className="*:pl-2">
                <div className="flex items-center justify-between">
                    <div className="pb-1 font-semibold text-muted-foreground">
                        {video.like_count} likes · {video.comment_count} comments
                    </div>
                    <form action={likeVideoAction}>
                        {/* <input
                                type="checkbox"
                                value={"liked"}
                                className="hidden peer"
                            /> */}
                        <button>
                            <input className="hidden" name="user_id" defaultValue={user?.id} />
                            <input className="hidden" name="video_id" defaultValue={video.video_id} />
                            <ThumbsUp
                                type="submit"
                                width={20}
                                height={20}
                                strokeWidth={1.5}
                                className="transition-colors hover:cursor-pointer hover:fill-red-400 peer-checked:fill-red-400"
                            />
                        </button>

                    </form>
                </div>
                <div className="text-xs font-medium text-muted-foreground pb-1">
                    Uploaded Date: {dayjs(video.created_at).format("DD/MM/YYYY")}
                </div>

                <div className="text-3xl font-semibold h-[80px]">
                    {video.title}
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center overflow-hidden">
                        <img
                            src="/images/tree.png"
                            alt="uploader profile"
                            className="w-full"
                            loading="lazy"
                            fetchPriority="high"
                        />
                    </div>
                    <div>{`${video.user.first_name} ${video.user.last_name}`}</div>
                </div>
                <div></div>
                <div className="flex flex-wrap items-center gap-2 pt-3 *:bg-primary/30 *:text-foreground *:hover:bg-primary/30">
                    {video.categories.map((category: any, index: number) => {
                        const parsedCategory = convertCategoryToLowerCase(category);
                        return (
                            <Badge key={index}>{parsedCategory}</Badge>
                        )
                    })}
                </div>
                <div className="pt-2 text-muted-foreground">
                    {video.description}
                </div>
            </div>
        </div>
    );
};
