import { ProductBuyButton } from "@/components/market-place/buy-button";
import { ProductData } from "@/components/market-place/product-data";
import { getCurrentUserId } from "@/lib/constants/getCurrentUserId";
import { getProductyId } from "@/lib/services/market-place/getProductById";
interface ProductPageParams {
    params: {
        id: string
    }
}
export default async function Page({ params }: ProductPageParams) {
    const product = await getProductyId({ product_id: params.id, is_sold: false });
    const user_id = await getCurrentUserId()
    return (
        <main className="w-full min-h-screen pt-4 pr-4 flex flex-col gap-6">
            <ProductData product={product} children={<ProductBuyButton product={product} user_id={user_id} />} />
        </main>
    );
}
