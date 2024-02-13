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

export const ProductCard = () => {
    return (
        <Card>
            <CardHeader>
                <div className="w-[275px] h-[130px] bg-green-300 rounded-md"></div>
                <CardTitle>Item Title</CardTitle>
                <CardDescription>sold by: John Doe</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="w-[275px] text-pretty h-[35px] truncate text-xs">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Excepturi nisi hic nulla, similique animi, quidem totam
                    voluptatibus autem accusantium vero, exercitationem eveniet
                    quisquam obcaecati saepe labore laboriosam eius! Laudantium,
                    eum!
                </div>
                <div className="flex flex-wrap items-center gap-2">
                    <Badge variant={"secondary"}>Category 1</Badge>
                    <Badge variant={"secondary"}>Category 2</Badge>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between gap-2 *:w-full *:text-sm *:rounded-md *:py-2">
                <div className="text-left font-semibold px-1 flex gap-1">
                    Price: Rs
                    <span>300</span>
                </div>
                <Link
                    href={"/market-place/abc"}
                    className="text-primary-foreground text-center font-medium bg-primary px-4 hover:bg-primary/90"
                >
                    View Details
                </Link>
            </CardFooter>
        </Card>
    );
};
