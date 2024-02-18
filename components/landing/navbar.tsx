import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

export const Navbar = () => {
    return (
        <nav className="h-16 w-full fixed top-0 left-0 bg-[#faf0e6] px-6 flex items-center justify-between z-20">
            <Link className="text-3xl font-bold text-[#cb4154] logo" href={"/"}>
                Genekriti
            </Link>
            <div className="flex gap-5">
                <Link href={"/#about"} className="landing--button">
                    About
                </Link>

                <Link href={"/#features"} className="landing--button">
                    Features
                </Link>
                <Link href={"/#impact"} className="landing--button">
                    Impact
                </Link>
                <button className="landing--button">
                    <LoginLink>Log In</LoginLink>
                </button>
                <button className="landing--button">
                    <RegisterLink>Sign Up</RegisterLink>
                </button>
            </div>
        </nav>
    );
};
