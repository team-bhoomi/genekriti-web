import { AddProduct } from "@/components/market-place/add-product";
import { UploadedCarousel } from "@/components/market-place/uploaded-carousel";
import { Button } from "@/components/ui/button";

export default function Page() {
    return (
        <main className="w-full min-h-screen pt-4 pr-4 flex flex-col gap-6">
            <div className="text-xl font-semibold">Product Details</div>
            <div className="flex justify-between gap-5 px-5">
                <AddProduct />
                <UploadedCarousel />
            </div>
            <Button className="w-fit m-auto">Publish your product</Button>
        </main>
    );
}
