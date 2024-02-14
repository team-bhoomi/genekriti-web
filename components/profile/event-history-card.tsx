import { Card, CardContent } from "../ui/card";

export const EventHistoryCard = () => {
    return (
        <Card className="w-full border-none flex flex-col items-center justify-center">
            <div className="flex items-center justify-between w-full">
                <CardContent className="gap-1 p-4">
                    <div className="text-xl font-semibold">Event Name</div>
                    <div className="text-sm text-muted-foreground">
                        Organiser Name
                    </div>
                </CardContent>
                <CardContent className="gap-1 p-4 text-sm">
                    <div className="font-medium">00/00/0000 - 00/00/0000</div>
                    <div className="text-muted-foreground">Online</div>
                </CardContent>
            </div>
            <div className="w-full p-4 pt-0">
                Location: City, Country (Pincode)
            </div>
        </Card>
    );
};
