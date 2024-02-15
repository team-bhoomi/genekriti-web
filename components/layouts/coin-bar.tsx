import { getUserById } from "@/lib/services/user/getUserById";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { BadgeIndianRupee } from "lucide-react";

export const CoinBar = async () => {
    const { getUser } = getKindeServerSession()
    const user = await getUser();
    let USER_BALANCE;
    const data = await getUserById({ id: user?.id as string })
    if (!data) {
        USER_BALANCE = 0;
    } else {
        USER_BALANCE = data.balance;
    }
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
                <span className="text-sm font-semibold">{USER_BALANCE}</span>
            </div>
        </div>
    );
};
