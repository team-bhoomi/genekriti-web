import { Button } from "../ui/button";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";
import Link from "next/link";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "../ui/tooltip";

export const ListMenu = ({
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
    if (menulink != "")
        return (
            <Link
                className="w-full h-full group font-medium flex items-center gap-3"
                href={menulink}
            >
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger className="w-full h-full pl-2 pr-4 py-2 z-10">
                            <Icon peerClassName="group-hover:fill-foreground" />
                            {clicked && name}
                        </TooltipTrigger>
                        {!clicked && (
                            <TooltipContent side="right">{name}</TooltipContent>
                        )}
                    </Tooltip>
                </TooltipProvider>
            </Link>
        );
    else
        return (
            <div className="w-full h-full flex items-center">
                <TooltipProvider>
                    <Tooltip>
                        <Dialog>
                            <TooltipTrigger className="w-full h-full pl-2 pr-4 py-2 z-10">
                                <DialogTrigger asChild>
                                    <button className="group font-medium flex items-center gap-3 focus:bg-transparent">
                                        <Icon peerClassName="group-hover:fill-foreground" />
                                        {clicked && name}
                                    </button>
                                </DialogTrigger>
                            </TooltipTrigger>
                            {!clicked && (
                                <TooltipContent side="right">
                                    Log Out
                                </TooltipContent>
                            )}

                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>Log Out</DialogTitle>
                                    <DialogDescription>
                                        Are you sure you want to log out?
                                    </DialogDescription>
                                </DialogHeader>
                                <DialogFooter>
                                    <LogoutLink>
                                        <Button variant={"destructive"}>
                                            Log Out
                                        </Button>
                                    </LogoutLink>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </Tooltip>
                </TooltipProvider>
            </div>
        );
};
