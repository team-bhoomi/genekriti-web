import { Store } from "lucide-react";
import Link from "next/link";

export default function MarketPlaceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="w-full min-h-screen pr-4 flex flex-col relative">
            <div className="sticky top-[56px] left-0 bg-accent w-full flex items-center justify-between z-10">
                <div className="text-4xl font-semibold">Market Place</div>
                <Link
                    href={"/market-place/sell"}
                    className="group flex items-center gap-2 bg-primary/30 rounded-md text-center font-medium px-4 py-2 transition hover:bg-primary/90 hover:text-white"
                >
                    <Store width={18} height={18} />
                    Sell
                </Link>
            </div>
            {children}
        </main>
    );
}
