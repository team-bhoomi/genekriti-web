import Link from "next/link";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";

export const VideoCard = ({ video }: { video: any }) => {
    return (
        <Link href={`/rekriti/video/${video.video_id}`}>
            <Card className="bg-background overflow-hidden">
                <div className="w-[300px] h-[190px] flex items-center justify-center overflow-hidden">
                    <img
                        src={video.thumbnail_img_url ? video.thumbnail_img_url : "/images/quiz-banner/quiz7-banner.jpg"}
                        alt="video-banner"
                        className="h-full"
                        loading="lazy"
                        fetchPriority="high"
                    />
                </div>
                <div className="px-2 py-1 flex items-center">
                    <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center overflow-hidden">
                        <img
                            src="/images/tree.png"
                            alt="uploader profile"
                            className="w-full"
                            loading="lazy"
                            fetchPriority="high"
                        />
                    </div>
                    <CardContent className="space-y-0 gap-0 p-2">
                        <CardTitle className="text-lg p-0 font-medium w-[210px] line-clamp-2 leading-[22px]">
                            {video.title}
                        </CardTitle>
                        <CardDescription className="flex flex-col">
                            <span>{`${video.user.first_name} ${video.user.last_name}`}</span>
                            <span>{video.like_count} likes · {video.comment_count} comments</span>
                        </CardDescription>
                    </CardContent>
                </div>
            </Card>
        </Link>
    );
};
