import { Link, QrCode } from "lucide-react";
import { Button } from "../ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";
export const ScanQR = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="w-fit flex items-center gap-2 bg-[#fd5800] hover:bg-[#fd5800]/90">
                    <QrCode width={20} height={20} />
                    Scan QR
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Scan QR Code</DialogTitle>
                    <DialogDescription>
                        Share your event ticket with your family and friends.
                    </DialogDescription>
                </DialogHeader>
                <div className="w-full h-full flex flex-col items-center justify-center gap-4">
                    <div className="w-[200px] h-[200px] bg-orange-500"></div>

                    <span className="font-medium">Share on</span>
                    <div className="flex justify-between w-full gap-8 px-4 *:text-base *:flex *:gap-1 *:items-center *:w-full">
                        <Button>WhatsApp</Button>
                        <Button className="bg-gradient-to-r from-[#4f5bd5] via-[#d62976] to-[#feda77]">
                            Instagram
                        </Button>
                    </div>
                    <span className="font-medium">or via link</span>
                </div>
                <div className="flex justify-between w-full">
                    <Button
                        variant={"outline"}
                        className="text-sm flex items-center gap-1"
                    >
                        Copy Link <Link width={18} height={18} />
                    </Button>
                    <DialogClose asChild>
                        <Button type="button" variant="destructive">
                            Close
                        </Button>
                    </DialogClose>
                </div>
            </DialogContent>
        </Dialog>
    );
};
