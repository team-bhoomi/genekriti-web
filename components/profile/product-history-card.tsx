import { Card, CardContent } from "../ui/card";

export const ProductHistoryCard = () => {
    return (
        <Card className="w-full border-none flex flex-col items-center justify-center">
            <div className="flex items-center justify-between w-full">
                <CardContent className="gap-1 p-4">
                    <div className="text-xl font-semibold">Product Name</div>
                    <div className="text-sm text-muted-foreground">
                        sold by: Seller Name
                    </div>
                </CardContent>
                <div className="font-medium p-4">Price: Rs 300</div>
            </div>
            <div className="w-full p-4 pt-0">Date: 00/00/0000</div>
        </Card>
    );
};
