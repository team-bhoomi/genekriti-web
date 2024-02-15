import { BadgeIndianRupee } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import dayjs from "dayjs";
import { getRecipent } from "@/lib/services/transactions/getRecipent";
import { convertCategoryToLowerCase } from "@/lib/constants/convertCategoryToLowerCase";
import { Badge } from "../ui/badge";

export const TransactionHistoryCard = async ({ transaction }: { transaction: any }) => {
    let IS_RECIPENT = false;
    const { getUser } = await getKindeServerSession();
    const user = await getUser();
    if (user) {
        IS_RECIPENT = transaction.recipent_id === user.id;
    }

    const transactionDetails = await getRecipent({ recipent_id: transaction.recipent_id, transaction_id: transaction.transaction_id })

    return (
        <Card className="w-full border-none flex flex-col items-center justify-center">
            <div className="flex items-center justify-between w-full">
                <div>
                    <div className="flex p-4 pb-0 justify-start items-start gap-2">
                        <div className="text-xl font-semibold">{IS_RECIPENT ? `${transactionDetails?.recipent.first_name} ${transactionDetails?.recipent.last_name}` : `${transactionDetails?.payer.first_name} ${transactionDetails?.payer.last_name}`}


                        </div>
                        <div>
                            <Badge variant={"secondary"}>{convertCategoryToLowerCase(transaction.source)}</Badge>
                        </div>
                    </div>
                    {IS_RECIPENT ?
                        <div className="px-4 text-sm text-muted-foreground">From : {`${transactionDetails?.payer.first_name} ${transactionDetails?.payer.last_name}`}</div>
                        : <div className="px-4 text-sm text-muted-foreground">To : {`${transactionDetails?.recipent.first_name} ${transactionDetails?.payer.last_name}`}</div>}

                </div>
                <div
                    className={`font-semibold p-4 flex items-center gap-1 ${!IS_RECIPENT ? "text-red-600" : "text-primary"
                        }`}
                >
                    <BadgeIndianRupee
                        width={20}
                        height={20}
                        fill="#ffbf00"
                        color="#5C4033"
                    />{" "}
                    {!IS_RECIPENT ? "-" : "+"}{" "}
                    {transaction.amount}
                </div>
            </div>
            <div className="w-full p-4 pt-2 text-sm font-medium">
                Date: {dayjs(transaction.date).format("DD/MM/YYYY")}
            </div>
        </Card>
    );
};
