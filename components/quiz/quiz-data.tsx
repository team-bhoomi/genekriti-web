import Link from "next/link";
import { QuestionCard } from "./question-card";
import { Button } from "../ui/button";

export const QuizData = () => {
    var quesAnswered = false;
    var correctlyAnswered = false;

    return (
        <div className="w-full h-full fixed top-0 left-0 z-20 text-white flex items-center justify-center">
            <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center overflow-hidden bg-black -z-10">
                <img
                    src="/images/quiz-banner/quiz1-banner.jpg"
                    className="w-full opacity-35"
                />
            </div>

            <div className="flex flex-col gap-10 items-center justify-start">
                <QuestionCard />
                <div className="flex items-center justify-between w-3/4">
                    <Link href={"/quiz/1/question-1"}>Back</Link>
                    {quesAnswered && (
                        <div className="*:font-semibold *:text-xl">
                            {correctlyAnswered ? (
                                <span className="text-green-500">
                                    Correct Answer !
                                </span>
                            ) : (
                                <span className="text-red-500">
                                    Wrong Answer
                                </span>
                            )}
                        </div>
                    )}
                    <Button variant={"outline"} className="text-black">
                        Submit
                    </Button>
                    {quesAnswered && (
                        <Link href={"/quiz/1/question-2"}>Next</Link>
                    )}
                </div>
            </div>
        </div>
    );
};
