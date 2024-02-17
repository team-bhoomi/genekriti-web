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
import { convertCategoryToLowerCase } from "@/lib/constants/convertCategoryToLowerCase";
import { questionCategory } from "@prisma/client";
import { isQuizAttempted } from "@/lib/services/quiz/isQuizAttempted";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const QuizCard = async ({ quiz, img_url, quiz_no }: { quiz: any; img_url: string, quiz_no: number }) => {
    // console.log(quiz);
    let categories: questionCategory[] = [];
    quiz.forEach((x: any) => {
        categories.push(x.category);
    });
    const uniqueCategories = categories.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
    // console.log(quiz);
    const { getUser } = getKindeServerSession()
    const user = await getUser();
    const { isAttempted } = await isQuizAttempted({ user_id: user?.id!, group: quiz_no })

    return (
        <Card className="h-fit">
            <CardHeader>
                <div className="w-[275px] h-[130px] bg-green-300 rounded-md flex items-center justify-center overflow-hidden">
                    <img
                        src={img_url}
                        className="w-full"
                        loading="lazy"
                        fetchPriority="high"
                    />
                </div>

                <CardTitle className="flex justify-between items-center">
                    Quiz {quiz[0].group!}
                    {isAttempted && (
                        <Badge className="mx-4 mb-2 font-medium bg-primary/30 text-black">
                            Completed
                        </Badge>
                    )}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-left font-semibold flex gap-1 text-sm">
                    Reward Points:
                    <span className="flex items-center gap-1 font-normal">
                        <BadgeIndianRupee
                            width={18}
                            height={18}
                            fill="#ffbf00"
                            color="#5C4033"
                        />{" "}
                        {"9"}
                    </span>
                </div>
                <div className="flex flex-wrap items-center gap-2 w-[280px]">
                    {uniqueCategories.map((q: any, i: number) => {
                        let parsedCategory = convertCategoryToLowerCase(q);
                        return (
                            <Badge
                                key={i}
                                variant={"secondary"}
                                className="capitalize"
                            >
                                {parsedCategory}
                            </Badge>
                        );
                    })}
                </div>
            </CardContent>

            <CardFooter className="flex justify-between gap-2 *:w-full *:text-sm *:rounded-md *:py-2">
                {!isAttempted ?
                    <Link
                        href={`/quiz/${quiz[0].group}/${quiz[0].question_id}`}
                        className="text-primary-foreground text-center font-medium bg-primary px-4 hover:bg-primary/90"
                    >
                        Start
                    </Link> :
                    <Link
                        href={`/quiz/${quiz[0].group}`}
                        className="text-primary-foreground text-center font-medium bg-primary px-4 hover:bg-primary/90"
                    >
                        Show Results
                    </Link>}
            </CardFooter>
        </Card>
    );
};
