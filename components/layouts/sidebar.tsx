"use client";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Menu, Power, X } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { usePathname } from "next/navigation";
import { featureMenu } from "@/lib/data/features";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export const SideBar = ({
    clicked,
    setClicked,
}: {
    clicked: boolean;
    setClicked: Dispatch<SetStateAction<boolean>>;
}) => {
    const router = usePathname();
    return (
        <NavigationMenu>
            <div className="flex items-center justify-center w-full px-3">
                {clicked && (
                    <div className="text-sm font-semibold w-full">
                        Genekriti
                    </div>
                )}
                <button
                    onClick={() => setClicked((prev) => !prev)}
                    className="*:transition-transform"
                >
                    {!clicked ? (
                        <Menu width={18} height={18} strokeWidth={3} />
                    ) : (
                        <X width={18} height={18} strokeWidth={3} />
                    )}
                </button>
            </div>

            <div className="flex items-center justify-center w-full px-2">
                <div className="min-w-9 h-9 rounded-full bg-red-300"></div>
                {clicked && (
                    <div className="flex flex-col justify-center w-full ml-[10px]">
                        <div className="font-bold">John</div>
                        <span className="text-xs font-medium">Individual</span>
                    </div>
                )}
            </div>
            <NavigationMenuList>
                {featureMenu.map(({ name, Icon, menulink }, id) => {
                    if (router === menulink) {
                        return (
                            <NavigationMenuItem
                                key={id}
                                className={cn(
                                    navigationMenuTriggerStyle(),
                                    "w-full relative bg-accent before:w-5 before:h-5 before:bg-transparent before:absolute before:-top-5 before:right-0 before:rounded-ee-full before:shadow-[5px_5px_0px_5px_#f4f4f5] before:transition-colors after:w-5 after:h-5 after:bg-transparent after:absolute after:-bottom-5 after:right-0 after:rounded-se-full after:shadow-[5px_-5px_0px_5px_#f4f4f5] after:transition-colors"
                                )}
                            >
                                <ListMenu
                                    name={name}
                                    Icon={Icon}
                                    menulink={menulink}
                                    clicked={clicked}
                                />
                            </NavigationMenuItem>
                        );
                    } else {
                        return (
                            <NavigationMenuItem
                                key={id}
                                className={cn(
                                    navigationMenuTriggerStyle(),
                                    "w-full relative"
                                )}
                            >
                                <ListMenu
                                    name={name}
                                    Icon={Icon}
                                    menulink={menulink}
                                    clicked={clicked}
                                />
                            </NavigationMenuItem>
                        );
                    }
                })}
            </NavigationMenuList>
            <NavigationMenuItem
                className={cn(
                    navigationMenuTriggerStyle(),
                    "w-full relative bg-accent before:w-5 before:h-5 before:bg-transparent before:absolute before:-top-5 before:right-0 before:rounded-ee-full before:shadow-[5px_5px_0px_5px_#f4f4f5] before:transition-colors after:w-5 after:h-5 after:bg-transparent after:absolute after:-bottom-5 after:right-0 after:rounded-se-full after:shadow-[5px_-5px_0px_5px_#f4f4f5] after:transition-colors"
                )}
            >
                <LogoutLink>
                    <LougoutButton clicked={clicked} Icon={({ peerClassName = "" }: { peerClassName: string }) => (
                        <Power width={20} height={20} />)} name="Log out" />
                </LogoutLink>
            </NavigationMenuItem>
        </NavigationMenu>
    );
};

const LougoutButton = ({
    Icon,
    name,
    clicked,
}: {
    Icon: ({ peerClassName }: { peerClassName: string }) => JSX.Element;
    name: string;
    clicked: boolean;
}) => {
    return (
        <div>
            <Icon peerClassName="group-hover:fill-[#355245]" />
            {clicked && name}
        </div>
    );
};
const ListMenu = ({
    menulink,
    Icon,
    name,
    clicked,
}: {
    menulink: string;
    Icon: ({ peerClassName }: { peerClassName: string }) => JSX.Element;
    name: string;
    clicked: boolean;
}) => {
    return (
        <div>
            <Link
                className={cn(navigationMenuTriggerStyle(), "group")}
                href={menulink}
            >
                <Icon peerClassName="group-hover:fill-[#355245]" />
                {clicked && name}
            </Link>
        </div>
    );
};
