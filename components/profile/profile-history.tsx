import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EventHistoryCard } from "./event-history-card";
import { ProductHistoryCard } from "./product-history-card";
import { TransactionHistoryCard } from "./transaction-history-card";
import { ConversationHistoryCard } from "./conversation-history-card";

export function ProfileHistory() {
    return (
        <Tabs defaultValue="events" className="w-full p-5 pt-0">
            <TabsList className="flex w-full items-center justify-between">
                <TabsTrigger value="events">Events</TabsTrigger>
                <TabsTrigger value="products">Products</TabsTrigger>
                <TabsTrigger value="transactions">Transactions</TabsTrigger>
                <TabsTrigger value="ai-conversations">
                    AI Conversations
                </TabsTrigger>
            </TabsList>
            <TabsContent value="events">
                <Card className="w-full bg-primary/25 border-none rounded-tl-none">
                    <CardHeader>
                        <CardTitle>Event</CardTitle>
                        <CardDescription className="text-foreground">
                            See all your event participation
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <EventHistoryCard />
                        <EventHistoryCard />
                        <EventHistoryCard />
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="products">
                <Card className="w-full bg-primary/25 border-none">
                    <CardHeader>
                        <CardTitle>Products History</CardTitle>
                        <CardDescription className="text-foreground">
                            See all your recent purchases
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <ProductHistoryCard />
                        <ProductHistoryCard />
                        <ProductHistoryCard />
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="transactions">
                <Card className="w-full bg-primary/25 border-none">
                    <CardHeader>
                        <CardTitle>Recent Transactions</CardTitle>
                        <CardDescription className="text-foreground">
                            See all your recent transactions
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <TransactionHistoryCard />
                        <TransactionHistoryCard />
                        <TransactionHistoryCard />
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="ai-conversations">
                <Card className="w-full bg-primary/25 border-none rounded-tr-none">
                    <CardHeader>
                        <CardTitle>AI Conversations</CardTitle>
                        <CardDescription className="text-foreground">
                            See all your recent AI conversations
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <ConversationHistoryCard />
                        <ConversationHistoryCard />
                        <ConversationHistoryCard />
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    );
}
