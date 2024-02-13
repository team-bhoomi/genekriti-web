import {
    LayoutDashboard,
    LineChart,
    Power,
    ShoppingBag,
    SpellCheck,
    Sprout,
    Ticket,
    UserRound,
} from "lucide-react";
import { cn } from "../utils";

export const featureMenu = [
    {
        id: 0,
        name: "Profile",
        Icon: ({ peerClassName }: { peerClassName: string }) => (
            <UserRound
                width={20}
                height={20}
                className={cn(peerClassName, "")}
            />
        ),
        menulink: "/profile",
    },
    {
        id: 1,
        name: "Dashboard",
        Icon: ({ peerClassName }: { peerClassName: string }) => (
            <LayoutDashboard
                width={20}
                height={20}
                className={cn(peerClassName, "")}
            />
        ),
        menulink: "/dashboard",
    },
    {
        id: 2,
        name: "Market Place",
        Icon: ({ peerClassName = "" }: { peerClassName: string }) => (
            <ShoppingBag width={20} height={20} />
        ),
        menulink: "/market-place",
    },
    {
        id: 3,
        name: "Events",
        Icon: ({ peerClassName = "" }: { peerClassName: string }) => (
            <Ticket width={20} height={20} />
        ),
        menulink: "/events",
    },
    {
        id: 4,
        name: "Plant a Sap",
        Icon: ({ peerClassName }: { peerClassName: string }) => (
            <Sprout width={20} height={20} className={cn(peerClassName, "")} />
        ),
        menulink: "/plant-a-sap",
    },
    {
        id: 5,
        name: "Take a Quiz",
        Icon: ({ peerClassName = "" }: { peerClassName: string }) => (
            <SpellCheck width={20} height={20} />
        ),
        menulink: "/quiz",
    },
    {
        id: 6,
        name: "Analytics",
        Icon: ({ peerClassName = "" }: { peerClassName: string }) => (
            <LineChart width={20} height={20} />
        ),
        menulink: "/analytics",
    },
    {
        id: 7,
        name: "R3",
        Icon: ({ peerClassName }: { peerClassName: string }) => (
            <Ticket width={20} height={20} className={cn(peerClassName, "")} />
        ),
        menulink: "/r3",
    },
    // {
    //     id: 8,
    //     name: "Log Out",
    //     Icon: ({ peerClassName = "" }: { peerClassName: string }) => (
    //         <Power width={20} height={20} />
    //     ),
    //     menulink: "/logout",
    // },
];
