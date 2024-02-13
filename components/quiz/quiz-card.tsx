import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
} from "../ui/card";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { BadgeIndianRupee } from "lucide-react";

export const QuizCard = ({ imgSrc }: { imgSrc: string }) => {
    var hasUserCompletedQuiz = true;
    return (
        <Card>
            <CardHeader>
                <div className="w-[275px] h-[130px] bg-green-300 rounded-md flex items-center justify-center overflow-hidden">
                    <img src={imgSrc} className="w-full" />
                </div>

                <CardTitle className="flex justify-between items-center">
                    Quiz 1
                    {hasUserCompletedQuiz && (
                        <Badge className="mx-4 mb-2 font-medium bg-primary/30 text-black">
                            Completed
                        </Badge>
                    )}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap items-center gap-2 text-sm font-semibold">
                    Level: <span className="font-normal">{"Easy"}</span>
                </div>
                <div className="text-left font-semibold flex gap-1 text-sm">
                    Reward Points:
                    <span className="flex items-center gap-1 font-normal">
                        <BadgeIndianRupee
                            width={18}
                            height={18}
                            fill="#ffbf00"
                            color="#5C4033"
                        />{" "}
                        300
                    </span>
                </div>
                <div className="flex flex-wrap items-center gap-2 w-[280px]">
                    <Badge variant={"secondary"}>Category 1</Badge>
                    <Badge variant={"secondary"}>Category 2</Badge>
                    <Badge variant={"secondary"}>Category 3</Badge>
                    <Badge variant={"secondary"}>Category 4</Badge>
                </div>
            </CardContent>

            <CardFooter className="flex justify-between gap-2 *:w-full *:text-sm *:rounded-md *:py-2">
                <Link
                    href={"/quiz/1/question-1"}
                    className="text-primary-foreground text-center font-medium bg-primary px-4 hover:bg-primary/90"
                >
                    Start
                </Link>
            </CardFooter>
        </Card>
    );
};
