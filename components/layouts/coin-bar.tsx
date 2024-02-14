import { BadgeIndianRupee } from "lucide-react";

export const CoinBar = () => {
    console.log("I AM WORKING");
    return (
        <div className="sticky top-0 right-0 bg-accent w-full h-[56px] flex items-start justify-between gap-1 pt-2 pr-2 z-20">
            <span>Welcome to Genekriti,</span>
            <div className="flex items-center justify-center gap-1">
                <BadgeIndianRupee
                    width={22}
                    height={22}
                    fill="#ffbf00"
                    color="#5C4033"
                />
                <span className="text-sm font-semibold">89</span>
            </div>
        </div>
    );
};
