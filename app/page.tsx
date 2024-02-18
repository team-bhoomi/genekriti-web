import { About } from "@/components/landing/about";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { Impact } from "@/components/landing/impact";
import { Navbar } from "@/components/landing/navbar";
import { Services } from "@/components/landing/services";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
    const { isAuthenticated } = getKindeServerSession();
    const isAuthed = await isAuthenticated();
    if (isAuthed) {
        redirect("/dashboard");
    }

    return (
        <main className="flex min-h-screen w-full flex-col items-center justify-between overflow-hidden bg-[#faf0e6] select-none">
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Impact />
            <Footer />
        </main>
    );
}
