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
import { navigationMenuTriggerStyle } from "../ui/navigation-menu";
import { cn } from "@/lib/utils";

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
                className="group pl-2 pr-1 font-medium flex items-center gap-3"
                href={menulink}
            >
                <Icon peerClassName="group-hover:fill-foreground" />
                {clicked && name}
            </Link>
        );
    else
        return (
            <div>
                <Dialog>
                    <DialogTrigger asChild>
                        <button
                            className={cn(
                                "group pl-2 pr-1 font-medium flex items-center gap-3 focus:bg-transparent"
                            )}
                        >
                            <Icon peerClassName="group-hover:fill-foreground" />
                            {clicked && name}
                        </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Log Out</DialogTitle>
                            <DialogDescription>
                                Are you sure you want to log out?
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                            <LogoutLink>
                                <Button variant={"destructive"}>Log Out</Button>
                            </LogoutLink>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        );
};
