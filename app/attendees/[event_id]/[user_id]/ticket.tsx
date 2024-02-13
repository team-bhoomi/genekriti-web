import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/components/ui/card";
export const Ticket = () => {
    return (
        <Card className="p-4 w-1/2 min-w-fit flex items-center gap-4 relative overflow-hidden">
            <div className="w-[200px] h-[200px] bg-red-300"></div>
            <CardContent className="p-0 w-fit">
                <CardTitle className="w-[425px] flex items-center justify-between">
                    {"Anushree"}'s ticket
                    <Badge className="bg-primary/40 text-foreground font-medium tracking-wide">
                        Registered
                    </Badge>
                </CardTitle>
                <CardDescription className="*:font-medium pb-4">
                    <div className="text-foreground text-base">
                        {"Event Name"}
                    </div>
                    <div className="w-[425px] text-pretty h-[20px] truncate text-sm">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Distinctio sint voluptatum voluptas praesentium
                        nobis voluptates accusantium inventore nam
                        necessitatibus, porro suscipit voluptatibus explicabo
                        mollitia ullam libero eveniet reiciendis vitae ad.
                    </div>
                </CardDescription>
                <div className="*:text-sm *:font-medium">
                    <div>Mode: Online</div>
                    <div>Location: City, Country</div>
                    <div>Date: 00/00/0000 - 00/00/0000</div>
                </div>
            </CardContent>
            <div className="absolute top-0 right-0 rotate-90 h-full text-2xl text-muted-foreground font-semibold opacity-25 tracking-wide">
                <span>Genekriti · Genekriti</span>
            </div>
        </Card>
    );
};
