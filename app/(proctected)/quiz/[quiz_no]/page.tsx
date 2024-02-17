import { FinishCard } from "@/components/quiz/finish-card";
import { isQuizAttempted } from "@/lib/services/quiz/isQuizAttempted";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

interface QuizCompletionPageParams {
    params: {
        quiz_no: string,
    }
}
export default async function Page({ params }: QuizCompletionPageParams) {
    const { getUser } = getKindeServerSession()
    const user = await getUser();
    const { isAttempted, data } = await isQuizAttempted({ user_id: user?.id as string, group: parseInt(params.quiz_no) })
    if (!isAttempted) {
        redirect("/quiz");
    }

    let totalPointsEarned = 0;
    let numberOfCurrectAnswers = 0
    let totalPoints = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i].is_correct === true) {
            numberOfCurrectAnswers++;
            totalPointsEarned += data[i].questionData.points;
        }
        totalPoints += data[i].questionData.points;
    }
    return (
        <main className="w-full h-screen pr-4 flex flex-col gap-5">
            <div className="sticky top-[56px] left-0 bg-accent flex items-center justify-between w-full text-4xl font-semibold z-10">
                Your Quiz Results
            </div>
            <div className="relative flex items-center justify-center w-full h-full z-0 pb-12">
                <div className="absolute inset-0 -z-10 h-full w-full bg-accent bg-[linear-gradient(to_right,#f1f1f1_1px,transparent_1px),linear-gradient(to_bottom,#f1f1f1_1px,transparent_1px)] bg-[size:6rem_4rem]">
                    <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_200px_at_50%_200px,#8cf0b1,transparent)]"></div>
                </div>
                <FinishCard totalPointsEarned={totalPointsEarned} numberOfCurrectAnswers={numberOfCurrectAnswers} totalPoints={totalPoints} />
            </div>
        </main>
    );
}
