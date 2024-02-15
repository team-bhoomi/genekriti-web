import Link from "next/link";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";

export const VideoCard = () => {
    return (
        <Link href={`/rekriti/video/${"abc"}`}>
            <Card className="bg-background overflow-hidden">
                <div className="w-[350px] h-[190px] flex items-center justify-center overflow-hidden">
                    <img
                        src="/images/quiz-banner/quiz7-banner.jpg"
                        alt="video-banner"
                        className="w-full"
                    />
                </div>
                <div className="px-2 py-1 flex items-center">
                    <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center overflow-hidden">
                        <img
                            src="/images/tree.png"
                            alt="uploader profile"
                            className="w-full"
                        />
                    </div>
                    <CardContent className="space-y-0 gap-0 p-2">
                        <CardTitle className="text-lg p-0 font-medium w-[260px] line-clamp-2 leading-[22px]">
                            Create new landscape art with waste water colors
                        </CardTitle>
                        <CardDescription className="flex flex-col">
                            <span>John Doe</span>
                            <span>1K views · 1 day ago</span>
                        </CardDescription>
                    </CardContent>
                </div>
            </Card>
        </Link>
    );
};
