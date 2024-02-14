import { BadgeIndianRupee } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export const TransactionHistoryCard = () => {
    var isReduced = true;
    return (
        <Card className="w-full border-none flex flex-col items-center justify-center">
            <div className="flex items-center justify-between w-full">
                <div className="text-xl font-semibold p-4">Party Name</div>
                <div
                    className={`font-semibold p-4 flex items-center gap-1 ${
                        isReduced ? "text-red-600" : "text-primary"
                    }`}
                >
                    {isReduced ? "-" : "+"}{" "}
                    <BadgeIndianRupee
                        width={20}
                        height={20}
                        fill="#ffbf00"
                        color="#5C4033"
                    />{" "}
                    300
                </div>
            </div>
            <div className="w-full p-4 pt-0 text-sm font-medium">
                Date: 00/00/0000
            </div>
        </Card>
    );
};
