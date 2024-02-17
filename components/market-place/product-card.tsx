import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { BadgeIndianRupee } from "lucide-react";
import { productCategory } from "@prisma/client";
import { convertCategoryToLowerCase } from "@/lib/constants/convertCategoryToLowerCase";

export const ProductCard = ({ product }: { product: any }) => {
    return (
        <Card className="h-fit">
            <CardHeader>
                <div className="w-[275px] h-[130px] bg-green-300 rounded-md"></div>
                <CardTitle className="w-[275px] line-clamp-1">
                    {product.name}
                </CardTitle>
                <CardDescription>
                    sold by:{" "}
                    {`${product.seller.first_name} ${product.seller.last_name}`}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="w-[275px] h-[35px] line-clamp-2 text-xs">
                    {product.description}
                </div>
                <div className="flex flex-wrap items-center gap-2">
                    {product.categories.map(
                        (category: productCategory, i: number) => {
                            let prasedCategory =
                                convertCategoryToLowerCase(category);
                            return (
                                <Badge
                                    key={i}
                                    variant={"secondary"}
                                    className="capitalize"
                                >
                                    {prasedCategory}
                                </Badge>
                            );
                        }
                    )}
                </div>
            </CardContent>
            <CardFooter className="flex justify-between gap-2 *:w-full *:text-sm *:rounded-md *:py-2">
                <div className="text-left font-semibold px-1 flex gap-1">
                    Price:{" "}
                    <BadgeIndianRupee
                        width={20}
                        height={20}
                        fill="#ffbf00"
                        color="#5C4033"
                    />
                    <span>{product.price}</span>
                </div>
                <Link
                    href={`/market-place/${product.product_id}`}
                    className="text-primary-foreground text-center font-medium bg-primary px-4 hover:bg-primary/90"
                >
                    View Details
                </Link>
            </CardFooter>
        </Card>
    );
};
