import { getSeller } from "@/lib/services/market-place/getSeller";
import { Card, CardContent } from "../ui/card";
import dayjs from "dayjs";
import { Badge } from "../ui/badge";
import { getProductyId } from "@/lib/services/market-place/getProductById";

export const ProductPurchaseHistoryCard = async ({ product }: { product: any }) => {
  const data = await getProductyId({ product_id: product.product_id, is_sold: true })
  return (
    <Card className="w-full border-none flex flex-col items-center justify-center">
      <div className="flex items-center justify-between w-full">
        <CardContent className="gap-1 p-4">
          <div className="text-xl font-semibold">{data?.name}</div>
          <div className="text-[1rem]">{data?.description}</div>
          <div className="text-sm text-muted-foreground">
            sold by: {`${data?.seller.first_name} ${data?.seller.last_name}`}
          </div>
          <div className="text-sm text-muted-foreground">
            Status: {data?.is_sold ? <Badge variant={"secondary"}>Purchased</Badge>
              : <Badge variant={"secondary"}>Available</Badge>}
          </div>
        </CardContent>
        <div className="font-medium p-4">Price: Rs {product.price}</div>
      </div>
      <div className="w-full p-4 pt-0">Date: {dayjs(product.created_at).format("DD/MM/YYYY")}</div>
    </Card>
  );
};
