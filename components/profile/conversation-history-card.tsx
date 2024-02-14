import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export const ConversationHistoryCard = () => {
    return (
        <Accordion type="single" collapsible className="w-fit no-underline">
            <Card className="w-full border-none flex flex-col items-center justify-center">
                <AccordionItem value="item-1">
                    <div className="flex items-center justify-between w-full">
                        <CardContent className="gap-1 p-4 w-3/4 ">
                            <div className="text-xl font-semibold">Title</div>
                            <div className="text-sm text-muted-foreground h-[40px] text-pretty">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quam possimus iusto laudantium
                                sunt, odio, ut quis ipsam dolor rem provident
                                placeat eaque eos non commodi, laboriosam
                                quisquam voluptatem tenetur. Pariatur?
                            </div>
                        </CardContent>
                        <CardContent className="items-end gap-2 p-4 text-sm">
                            <Badge className="w-fit">Category</Badge>
                            <div className="font-medium">00/00/0000</div>
                            <AccordionTrigger>Show More</AccordionTrigger>
                        </CardContent>
                    </div>

                    <AccordionContent className="p-4 pt-0">
                        <div className="font-medium text-muted-foreground text-lg">
                            AI Response:
                        </div>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
            </Card>
        </Accordion>
    );
};
