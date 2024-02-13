import { SearchBar } from "@/app/market-place/search-bar";
import { ProductCard } from "@/components/market-place/product-card";
export const dynamic = "force-dynamic";

export default function Page() {
    return (
        <main>
            <SearchBar />
            <div className="flex flex-wrap gap-10 px-4 pt-3 pb-10">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </main>
    );
}
