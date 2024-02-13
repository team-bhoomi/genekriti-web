"use client";
import { useEffect, useState } from "react";
import { Card, CardContent } from "../ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
    CarouselApi,
} from "../ui/carousel";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const UploadedCarousel = () => {
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
    );
};
