import Link from "next/link";
import { Card, CardContent, CardTitle, CardDescription } from "../ui/card";

export const SuggestedVideoCard = () => {
    return (
        <Link href={"/rekriti/video/video-1"}>
            <Card className="overflow-hidden flex items-center !bg-transparent shadow-none border-none">
                <div className="w-40 h-24 bg-red-500 flex items-center rounded-lg overflow-hidden">
                    <img
                        src="/images/quiz-banner/quiz8-banner.jpg"
                        alt="video-banner"
                        className="object-cover h-full"
                        loading="lazy"
                        fetchPriority="high"
                    />
                </div>
                <CardContent className="space-y-0 gap-1 w-[285px]">
                    <CardTitle className="text-lg font-medium leading-[22px] line-clamp-2">
                        Create a landscape art with waste water colors and some
                        old papers
                    </CardTitle>
                    <CardDescription>
                        <div>John Doe</div>
                        <div>0 views · 5 months ago</div>
                    </CardDescription>
                </CardContent>
            </Card>
        </Link>
    );
};
