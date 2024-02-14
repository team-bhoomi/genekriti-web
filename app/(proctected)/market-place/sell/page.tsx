"use client";
import { AddProduct } from "@/components/market-place/add-product";
import { UploadedCarousel } from "@/components/market-place/uploaded-carousel";
import { Button } from "@/components/ui/button";
import { sellProductAction } from "@/lib/actions/market-place/sellProductAction";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import { Button } from "../ui/button";
import { Badge } from '@/components/ui/badge';
import { productCategories } from "@/lib/data/categories";
import { BadgeIndianRupee } from "lucide-react";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
    CarouselApi
} from "@/components/ui/carousel"
import { useKindeAuth, useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"
import { getCurrentUserId } from "@/lib/constants/getCurrentUserId";

export default function Page() {
    const { user } = useKindeBrowserClient();
    const [prodCat, setProdCat] = useState<string[]>([]);
    const handleTags = (tag: string) => {
        var usedTags = [...prodCat];
        if (prodCat.includes(tag)) {
            usedTags.splice(usedTags.indexOf(tag), 1);
        } else {
            usedTags.push(tag);
        }
        setProdCat(usedTags);
    };
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("")
    useEffect(() => {
        if (!api) {
            return;
        }
        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            console.log("current");
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("categories", JSON.stringify(prodCat));
    formData.append("seller_id", user?.id as string);
    return (
        <main className="w-full min-h-screen pt-4 pr-4 flex flex-col gap-6">
            <div className="text-xl font-semibold">Product Details</div>
            <form onSubmit={(e) => {
                e.preventDefault();
                sellProductAction(formData)
            }}>
                <div className="flex justify-between gap-5 px-5">
                    {/* <AddProduct /> */}

                    <div className="flex flex-col gap-5 pr-5 w-full *:flex *:flex-col *:gap-1 *:text-lg *:font-medium">
                        <div className="*:text-lg">
                            <Label>Product Name</Label>
                            <Input type="text" onChange={e => { setName(e.target.value) }} name="name" placeholder="Product Name" />
                        </div>

                        <div className="*:text-lg">
                            <Label>Product Description</Label>
                            <Input type="text" onChange={e => { setDescription(e.target.value) }} name="description" placeholder="Product Description" />
                        </div>

                        <div >
                            <Label className="text-lg">Product Category</Label>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button className="w-fit" variant="outline">
                                        Categories
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent side="right" className="w-56">
                                    <DropdownMenuLabel>
                                        Product Categories
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    {productCategories.map((value, id) => (
                                        <DropdownMenuCheckboxItem

                                            onClick={() => {
                                                handleTags(value);
                                            }}
                                            checked={prodCat.includes(value)}
                                            key={id}
                                        >
                                            {value}
                                        </DropdownMenuCheckboxItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <div className="flex flex-wrap gap-2 pt-2">
                                {prodCat[0] != "" &&
                                    prodCat.map((cat, id) => (
                                        <Badge key={id} className="w-fit">
                                            {cat}
                                        </Badge>
                                    ))}
                            </div>
                        </div>

                        <div className="*:text-lg">
                            <Label>Product Price</Label>
                            <div className="flex items-center gap-4 *:text-lg">
                                <span className="flex items-center">
                                    <BadgeIndianRupee
                                        width={24}
                                        height={24}
                                        fill="#ffbf00"
                                        color="#5C4033"
                                    />
                                </span>
                                <Input
                                    onChange={e => setPrice(e.target.value)}
                                    name="price"
                                    type="number"
                                    min={10}
                                    max={2000}
                                    step={1}
                                    placeholder="10"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-5 w-full">
                        <div className="w-[500px] h-[300px] px-12 mb-12">
                            <Carousel setApi={setApi} className="w-full h-[300px]">
                                <CarouselContent>
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <CarouselItem key={index}>
                                            <Card className="h-[300px] w-auto flex items-center">
                                                <CardContent className="flex aspect-square items-center justify-center w-full">
                                                    <span className="text-4xl font-semibold">
                                                        {index + 1}
                                                    </span>
                                                </CardContent>
                                            </Card>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                            <div className="py-2 text-center text-sm text-muted-foreground">
                                Slide {current} of {count}
                            </div>
                        </div>
                        <div></div>
                        <Button variant={"outline"} className="w-fit z-10">
                            Add more images
                            <Input type="file" className="absolute opacity-0 w-fit" />
                        </Button>
                    </div>
                    {/* <UploadedCarousel /> */}
                </div>
                <Button type="submit" className="w-fit m-auto">Publish your product</Button>
            </form>
        </main>
    );
}
