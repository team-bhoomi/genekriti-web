import Link from "next/link";
import { QuestionCard } from "./question-card";
import { Button } from "../ui/button";
import { isQuestionAttempted } from "@/lib/services/quiz/isQuestionAttempted";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { submitAnswerAction } from "@/lib/actions/quiz/submitAnswerAction";

export const QuizData = async ({
    questions,
    ques_id,
    quiz_no,
}: {
    questions: any;
    ques_id: string;
    quiz_no: string;
}) => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    const response = await isQuestionAttempted({
        question_id: ques_id,
        user_id: user?.id as string,
    });

    let IS_QUESTION_ATTEMPTED = response?.questions_attempted.length != 0;

    let IS_CORRECT_ANSWER = false;

    if (IS_QUESTION_ATTEMPTED) {
        IS_CORRECT_ANSWER = response?.questions_attempted[0].is_correct!;
    }
    let IS_QUIZ_COMPLETED = false;


    let prevQuestionId = "/quiz";
    let nextQuestionId = "";
    let currentQuestionNumber = 1;
    let currentQuestion;
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].question_id === ques_id) {
            if (i != 0) {
                currentQuestion = i + 1;
                prevQuestionId = questions[i - 1].question_id;
                currentQuestionNumber = i + 1;
            }
            console.log(questions[i].is_attempted);
            if (i < 4) {
                nextQuestionId = questions[i + 1].question_id;
            } else {
                nextQuestionId = "/last";
            }
            currentQuestion = questions[i];
        }
    }

    return (
        <div className="w-full h-full fixed top-0 left-0 z-20 text-white flex items-center justify-center">
            <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center overflow-hidden bg-black -z-10">
                <img
                    src="/images/quiz-banner/quiz1-banner.jpg"
                    className="w-full opacity-35"
                    loading="lazy"
                    fetchPriority="high"
                />
            </div>

            <form
                action={submitAnswerAction}
                className="flex flex-col gap-10 items-center justify-start"
            >
                <QuestionCard
                    question={currentQuestion}
                    currentQuestionNumber={currentQuestionNumber}
                />
                <div className="flex items-center justify-between w-3/4">
                    {ques_id != questions[0].question_id ? (
                        <Link href={`/quiz/${quiz_no}/${prevQuestionId}`}>
                            Back
                        </Link>
                    ) : (
                        <Link href={`/quiz/`}>Back</Link>
                    )}
                    <div className="flex flex-col justify-center items-center gap-2">
                        {IS_QUESTION_ATTEMPTED && (
                            <div className="*:font-semibold *:text-xl">
                                {IS_CORRECT_ANSWER ? (
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
                        {
                            IS_QUESTION_ATTEMPTED ?
                                <div className="p-6 text-center font-semibold text-xl text-green-500">Correct answer : {currentQuestion.answer}</div> : null
                        }
                    </div>
                    <input
                        name="question_id"
                        className="hidden"
                        defaultValue={currentQuestion.question_id}
                    />
                    <input
                        name="answer"
                        className="hidden"
                        defaultValue={currentQuestion.answer}
                    />
                    <input
                        name="user_id"
                        className="hidden"
                        defaultValue={user?.id}
                    />
                    <input
                        name="group"
                        className="hidden"
                        defaultValue={currentQuestion.group}
                    />
                    {!IS_QUESTION_ATTEMPTED ? (
                        <Button
                            type="submit"
                            variant={"outline"}
                            className="text-black"
                        >
                            Submit
                        </Button>
                    ) : (
                        (IS_CORRECT_ANSWER || IS_QUESTION_ATTEMPTED) && (
                            nextQuestionId == "/last" ? <Link href={`/quiz/`}>
                                Next
                            </Link> : <Link href={`/quiz/${quiz_no}/${nextQuestionId}`}>
                                Next
                            </Link>
                        )
                    )}
                </div>
            </form>
        </div>
    );
};
