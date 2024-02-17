import { QuizData } from "@/components/quiz/quiz-data";
import { getQuizQuestions } from "@/lib/services/quiz/getQuizQuestions";
import { isQuizAttempted } from "@/lib/services/quiz/isQuizAttempted";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
interface QuizQuestionPageParams {
    params: {
        quiz_no: string,
        ques_id: String,
    }
}
export default async function Page({ params }: QuizQuestionPageParams) {
    const questions = await getQuizQuestions({ group: parseInt(params.quiz_no) });
    return (
        <main className="w-full h-screen pr-4 mb-4 overflow-hidden">
            <QuizData questions={questions} ques_id={params.ques_id as string} quiz_no={params.quiz_no} />
        </main>
    );
}
