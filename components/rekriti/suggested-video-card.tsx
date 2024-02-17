import Link from "next/link";
import { Card, CardContent, CardTitle, CardDescription } from "../ui/card";

export const SuggestedVideoCard = ({ video }: { video: any }) => {
    console.log(video);
    return (
        <Link href={"/rekriti/video/video-1"}>
            <Card className="overflow-hidden flex items-center !bg-transparent shadow-none border-none my-3">
                <div className="w-40 h-24 bg-red-500 flex items-center rounded-lg overflow-hidden">
                    <img
                        src={video.thumbnail_img_url ? video.thumbnail_img_url : "/images/quiz-banner/quiz8-banner.jpg"}
                        alt="video-banner"
                        className="object-cover h-full overflow-hidden flex items-center"
                        loading="lazy"
                        fetchPriority="high"
                    />
                </div>
                <CardContent className="space-y-0 gap-1 w-[285px]">
                    <CardTitle className="text-lg font-medium leading-[22px] line-clamp-2">
                        {video.title}
                    </CardTitle>
                    <CardDescription>
                        <div>{`${video.user.first_name} ${video.user.last_name}`}</div>
                        <div>{video.view_count} views · {video.comment_count} comments</div>
                    </CardDescription>
                </CardContent>
            </Card>
        </Link>
    );
};
