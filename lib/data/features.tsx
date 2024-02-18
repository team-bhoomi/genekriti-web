import {
    LayoutDashboard,
    LineChart,
    Power,
    Recycle,
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
        name: "ReKriti",
        Icon: ({ peerClassName }: { peerClassName: string }) => (
            <Recycle width={20} height={20} className={cn(peerClassName, "")} />
        ),
        menulink: "/rekriti",
    },
    {
        id: 3,
        name: "Market Place",
        Icon: ({ peerClassName = "" }: { peerClassName: string }) => (
            <ShoppingBag width={20} height={20} />
        ),
        menulink: "/market-place",
    },
    {
        id: 4,
        name: "Events",
        Icon: ({ peerClassName = "" }: { peerClassName: string }) => (
            <Ticket width={20} height={20} />
        ),
        menulink: "/events",
    },
    // {
    //     id: 5,
    //     name: "Plant a Sap",
    //     Icon: ({ peerClassName }: { peerClassName: string }) => (
    //         <Sprout width={20} height={20} className={cn(peerClassName, "")} />
    //     ),
    //     menulink: "/plant-a-sap",
    // },
    {
        id: 6,
        name: "Take a Quiz",
        Icon: ({ peerClassName = "" }: { peerClassName: string }) => (
            <SpellCheck width={20} height={20} />
        ),
        menulink: "/quiz",
    },
    // {
    //     id: 7,
    //     name: "Analytics",
    //     Icon: ({ peerClassName = "" }: { peerClassName: string }) => (
    //         <LineChart width={20} height={20} />
    //     ),
    //     menulink: "/analytics",
    // },

    {
        id: 8,
        name: "Log Out",
        Icon: ({ peerClassName = "" }: { peerClassName: string }) => (
            <Power width={20} height={20} />
        ),
        menulink: "",
    },
];
