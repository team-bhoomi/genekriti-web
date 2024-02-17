import { getSeller } from "@/lib/services/market-place/getSeller";
import { Card, CardContent } from "../ui/card";
import dayjs from "dayjs";
import { Badge } from "../ui/badge";
import { BadgeIndianRupee } from "lucide-react";

export const ProductHistoryCard = async ({ product }: { product: any }) => {
    const data = await getSeller({ product_id: product.product_id })
    return (
        <Card className="w-full border-none flex flex-col items-center justify-center">
            <div className="flex items-center justify-between w-full">
                <CardContent className="gap-1 p-4">
                    <div className="text-xl font-semibold">{product.name}</div>
                    <div className="text-[1rem]">{product.description}</div>
                    <div className="text-sm text-muted-foreground">
                        sold by: {`${data?.seller.first_name} ${data?.seller.last_name}`}
                    </div>
                    <div className="text-sm text-muted-foreground">
                        Status: {product.is_sold ? <Badge variant={"secondary"}>Sold</Badge>
                            : <Badge variant={"secondary"}>Available</Badge>}
                    </div>
                </CardContent>
                <div className="font-medium p-4">
                    <div className="flex justify-start items-center gap-1">
                        <BadgeIndianRupee
                            width={20}
                            height={20}
                            fill="#ffbf00"
                            color="#5C4033"
                        />{" "}
                        <span>{product.is_sold ? <span className="text-green-600"> + </span> : <span className="text-red-600">-</span>}</span>
                        <span>{product.price}</span>
                    </div>
                </div>
            </div>
            <div className="w-full p-4 pt-0">Date: {dayjs(product.created_at).format("DD/MM/YYYY")}</div>
        </Card>
    );
};
