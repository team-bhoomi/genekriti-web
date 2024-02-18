import dayjs from "dayjs";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { convertCategoryToLowerCase } from "@/lib/constants/convertCategoryToLowerCase";

export const ConversationHistoryCard = ({ conversation }: { conversation: any }) => {
    return (
        <Accordion type="single" collapsible className="w-full no-underline">
            <Card className="w-full border-none flex flex-col items-center justify-center">
                <AccordionItem value="item-1" className="w-full">
                    <div className="flex items-center justify-between w-full">
                        <CardContent className="w-3/4 ">
                            <div className="text-xl font-semibold">{conversation.prompt}</div>
                            <div className="text max-h-[42px] text-sm text-muted-foreground text-pretty truncate">
                                {conversation.ai_response}
                            </div>
                        </CardContent>
                        <CardContent className="items-end gap-2 p-4 text-sm">
                            <div className="flex justify-between items-center gap-2">
                                {conversation.categories.map((category: any, i: number) => {
                                    const parsedCategory = convertCategoryToLowerCase(category);
                                    return (
                                        <Badge key={i} className="w-fit" variant={"secondary"}>{category}</Badge>
                                    )
                                })}
                            </div>
                            <div className="font-medium">{dayjs(conversation.created_at).format("DD/MM/YYYY")}</div>
                            <AccordionTrigger>Show More</AccordionTrigger>
                        </CardContent>
                    </div>

                    <AccordionContent className="p-4 pt-0">
                        <div className="font-medium text-muted-foreground text-lg">
                            AI Response:
                        </div>
                        <div className="prose text-sm text-muted-foreground min-w-[70rem]">{conversation.ai_response}</div>
                    </AccordionContent>
                </AccordionItem>
            </Card>
        </Accordion>
    );
};
