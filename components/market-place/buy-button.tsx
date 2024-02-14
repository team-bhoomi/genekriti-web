import { getSeller } from "@/lib/services/market-place/getSeller"
import { Button } from "../ui/button"
import { buyProductAction } from "@/lib/actions/market-place/buyProductAction";

export const ProductBuyButton = async ({ product, user_id }: { product: any, user_id: string }) => {
  let IS_USER_SELLER = product.seller_id === user_id;
  return (
    IS_USER_SELLER ? "You are selling this product" :
      <div>
        <form action={buyProductAction}>
          <input className="hidden" name="buyer_id" defaultValue={user_id} />
          <input className="hidden" name="product_id" defaultValue={product.product_id} />
          <input className="hidden" name="seller_id" defaultValue={product.seller_id} />
          <input className="hidden" name="price" defaultValue={product.price} />
          <Button className="py-2">Buy Now</Button>
        </form>
      </div>
  )
}