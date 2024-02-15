import { ThumbsUp } from "lucide-react";
import { VideoPlayer } from "./video-player";
import { Label } from "../ui/label";
import { Badge } from "../ui/badge";

export const VideoData = () => {
    return (
        <div className="w-full flex flex-col gap-2">
            <VideoPlayer />
            <div className="*:pl-2">
                <div className="flex items-center justify-between">
                    <div className="pb-1 font-semibold text-muted-foreground">
                        0 views · 0 likes · 0 comments
                    </div>
                    <Label>
                        <input
                            type="checkbox"
                            value={"liked"}
                            className="hidden peer"
                        />
                        <ThumbsUp
                            width={20}
                            height={20}
                            strokeWidth={1.5}
                            className="transition-colors hover:cursor-pointer hover:fill-red-400 peer-checked:fill-red-400"
                        />
                    </Label>
                </div>
                <div className="text-xs font-medium text-muted-foreground pb-1">
                    Uploaded Date: 00/00/0000
                </div>

                <div className="text-3xl font-semibold h-[80px]">
                    Create new landscape art with waste water colors
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center overflow-hidden">
                        <img
                            src="/images/tree.png"
                            alt="uploader profile"
                            className="w-full"
                        />
                    </div>
                    <div>John Doe</div>
                </div>
                <div></div>
                <div className="flex flex-wrap items-center gap-2 pt-3 *:bg-primary/30 *:text-foreground *:hover:bg-primary/30">
                    <Badge>Category 1</Badge>
                    <Badge>Category 2</Badge>
                    <Badge>Category 3</Badge>
                </div>
                <div className="pt-2 text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem deleniti quam temporibus? Sed iste laborum maiores
                    cupiditate consequuntur! Repellendus architecto, ipsum
                    soluta voluptatum quod eum ducimus et tempora consectetur
                    eligendi. Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Possimus, facilis magnam nobis voluptatum
                    rerum ad a quibusdam deleniti aspernatur illum quia quis
                    maxime assumenda dicta non vel adipisci omnis eaque?
                </div>
            </div>
        </div>
    );
};
