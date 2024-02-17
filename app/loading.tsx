import { Loading } from "@/components/layouts/loading";

export default function Page() {
    return (
        <main className="fixed top-0 left-0 w-screen h-screen bg-background flex items-center justify-center gap-5 z-30">
            <Loading />{" "}
        </main>
    );
}
