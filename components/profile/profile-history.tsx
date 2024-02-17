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
import { getEventById } from "@/lib/services/events/getEventById";
import { getRegistrantById } from "@/lib/services/events/getRegistrantById";
import { ProductPurchaseHistoryCard } from "./product-purchase-history-card";
import { getAllEventsOfOrg } from "@/lib/services/events/getAllEventsOfOrg";
import { getAllAttendees } from "@/lib/services/events/getAllAttendees";
import { getAllEventsAttendedByUser } from "@/lib/services/events/getAllEventsAttendedByUser";
import { EventUserHistoryCard } from "./event-user-history-card";
import { redirect } from "next/navigation";
import Link from "next/link";

export async function ProfileHistory({ data }: { data: any }) {
    // TODO hanlde cases when user has no data on website
    if (!data?.payer_transactions || !data?.recipent_transactions) {
        redirect("/dashboard");
    }
    const transactions = [...data.payer_transactions, ...data.recipent_transactions]
    // console.log(data);
    const IS_ORG: boolean = data.role === "ORGANIZATION";
    let eventDetails = [];
    let userEventDetails;
    if (IS_ORG) {
        const { data: eventDetailsFetch } = await getAllEventsOfOrg({ org_id: data.id as string })
        eventDetails = eventDetailsFetch;
    } else {
        userEventDetails = await getAllEventsAttendedByUser({ user_id: data.id })
    }
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
                        {IS_ORG && eventDetails ? eventDetails.map((event: any, i: number) => {
                            return (
                                <EventHistoryCard event={event} key={i} />
                            )
                        }) : <div>
                            <Link href={"/events/create"}>
                                <Button>Create Events</Button>
                            </Link>
                        </div>}

                        {!IS_ORG && userEventDetails ? userEventDetails.map((event: any, i: number) => {
                            return (
                                <EventUserHistoryCard event={event} key={i} />
                            )
                        }) : <div>
                            <Link href={"/events"}>
                                <Button>Explore Events</Button>
                            </Link>
                        </div>}
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
                        {data.seller.length != 0 ? data.seller.map((product: any, i: number) => {
                            return (
                                <ProductHistoryCard key={i} product={product} />

                            )
                        }) : <div>
                            <Link href={"/market-place/sell"}>
                                <Button>Sell Product</Button>
                            </Link>
                        </div>}

                        {data.buyer.length != 0 ? data.buyer.map((product: any, i: number) => {
                            return (
                                <ProductPurchaseHistoryCard product={product} key={i} />

                            )
                        }) : <div>
                            <Link href={"/market-place"}>
                                <Button>Explore Products</Button>
                            </Link>
                        </div>}
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
                        {
                            transactions.length != 0 ? transactions.map((transaction: any, i: number) => {
                                return (
                                    <TransactionHistoryCard transaction={transaction} key={i} />
                                )
                            }) : "No transactions yet"
                        }
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
