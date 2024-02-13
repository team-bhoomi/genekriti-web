import { QuizCard } from "@/components/quiz/quiz-card";
import { SearchBar } from "./search-bar";
import { quizBanners } from "@/lib/data/quiz-banner";
export const dynamic = "force-dynamic";

export default function Page() {
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
                {quizBanners.map((img, id) => (
                    <QuizCard key={id} imgSrc={img} />
                ))}
            </div>
        </main>
    );
}
