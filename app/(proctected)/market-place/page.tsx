import { SearchBar } from "@/app/(proctected)/market-place/search-bar";
import { getAllNotSoldProducts } from "@/components/market-place/getAllNotSoldProducts";
import { ProductCard } from "@/components/market-place/product-card";
export const dynamic = "force-dynamic";

export default async function Page() {
    const products = await getAllNotSoldProducts();
    return (
        <main>
            <SearchBar />
            <div className="flex flex-wrap gap-10 px-4 pt-3 pb-10">
                {products ?
                    products.map((product, i) => {
                        return (
                            <ProductCard product={product} key={i} />
                        )
                    }) : "Oops no product in market place"
                }
            </div>
        </main>
    );
}
