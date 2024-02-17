import { QuizCard } from "@/components/quiz/quiz-card";
import { SearchBar } from "./search-bar";
import { quizBanners } from "@/lib/data/quiz-banner";
import { getAllQuestions } from "@/lib/services/quiz/getAllQuestions";
import { Questions } from "@prisma/client";
import { isQuizAttempted } from "@/lib/services/quiz/isQuizAttempted";
export const dynamic = "force-dynamic";

export default async function Page() {
    const questions = await getAllQuestions();
    const quiz_1 = questions?.slice(0, 5)!;
    const quiz_2 = questions?.slice(5, 10)!;
    const quiz_3 = questions?.slice(10, 15)!;
    const quiz_4 = questions?.slice(15, 20)!;
    const quiz_5 = questions?.slice(20, 25)!;
    const quiz_6 = questions?.slice(25, 30)!;
    const quiz_7 = questions?.slice(30, 35)!;
    const quiz_8 = questions?.slice(35, 40)!;
    const quiz_9 = questions?.slice(40, 45)!;
    const quiz_10 = questions?.slice(45, 50)!;

    // @ts-ignore
    let quizes = [];
    quizes.push(quiz_1!);
    // @ts-ignore
    quizes.push(quiz_2!);
    // @ts-ignore
    quizes.push(quiz_3!);
    // @ts-ignore
    quizes.push(quiz_4!);
    // @ts-ignore
    quizes.push(quiz_5!);
    // @ts-ignore
    quizes.push(quiz_6!);
    // @ts-ignore
    quizes.push(quiz_7!);
    // @ts-ignore
    quizes.push(quiz_8!);
    // @ts-ignore
    quizes.push(quiz_9!);
    // @ts-ignore
    quizes.push(quiz_10!);
    return (
        <main className="w-full min-h-screen pr-4 flex flex-col">
            <div className="sticky top-[56px] left-0 bg-accent flex items-center justify-between w-full text-4xl font-semibold">
                Quiz
            </div>

            <SearchBar />
            <div className="p-4 text-xl font-medium">
                Test your knowledge on environment basic and earn some coins!
            </div>
            <div className="flex flex-wrap gap-10 px-4 pb-10">
                {quizes.map((quiz, i) => {
                    return (
                        <QuizCard quiz_no={i + 1} quiz={quiz} key={i} img_url={`/images/quiz-banner/quiz${i + 1}-banner.jpg`} />
                    )
                })}
            </div>
        </main>
    );
}
