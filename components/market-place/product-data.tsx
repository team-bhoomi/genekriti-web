"use client";
import { ArrowLeftCircle, BadgeIndianRupee } from "lucide-react";
import Link from "next/link";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

export const ProductData = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);
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
    return (
        <div className="flex flex-col gap-2 px-6">
            <Link
                href={"/market-place"}
                className="font-semibold flex items-center gap-1"
            >
                <ArrowLeftCircle width={18} height={18} />
                Back
            </Link>
            <div className="flex gap-6">
                <div className="w-full h-[500px] px-12">
                    <Carousel setApi={setApi} className="w-full h-full">
                        <CarouselContent>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem key={index}>
                                    <Card className="h-full w-auto flex items-center">
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
                <div className="flex flex-col gap-4 w-full">
                    <div className="text-5xl font-semibold leading-none tracking-tight pt-2">
                        Product Title
                    </div>
                    <div className="text-sm">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Sed vitae commodi sit aliquid eveniet, dolores
                        illo cum doloribus sunt atque dicta in eligendi,
                        quisquam molestias et nam pariatur odit explicabo!
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Nihil, iure ratione officiis nemo eius, voluptate
                        expedita similique omnis voluptatibus totam quisquam
                        architecto soluta est fugit assumenda vero explicabo
                        repellendus obcaecati.
                    </div>
                    <span className="text-muted-foreground font-semibold">
                        sold by: John Doe
                    </span>
                    <span className="font-medium">launched on: 00/00/0000</span>
                    <div className="flex flex-wrap items-end gap-2 font-medium">
                        Product Category:
                        <Badge variant={"secondary"}>Category 1</Badge>
                        <Badge variant={"secondary"}>Category 2</Badge>
                    </div>
                    <div className="font-semibold text-2xl flex items-center gap-1">
                        Price: Rs
                        <span>300</span>
                    </div>
                    <Button className="py-2">Buy Now</Button>
                </div>
            </div>
        </div>
    );
};
