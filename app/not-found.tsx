"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();
    return (
        <main className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center gap-5 z-30">
            <div className="w-[300px] h-[300px] flex items-center justify-center">
                <img src="/images/tree.png" className="w-full" alt="tree" />
            </div>
            <div className="flex flex-col gap-3">
                <div className="text-4xl font-semibold">
                    Oops! Page Not Found
                </div>
                <div className="text-xl text-muted-foreground font-medium w-[475px]">
                    404 Error: You might be accessing a page thats not in our
                    domain. Worry not let's get you back to our app.
                </div>

                <Button
                    variant={"outline"}
                    className="w-fit text-lg mt-3 hover:bg-primary/40"
                    onClick={() => router.back()}
                >
                    Go Back
                </Button>
            </div>
        </main>
    );
}
