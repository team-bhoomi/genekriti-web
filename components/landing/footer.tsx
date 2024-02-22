import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";

import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="w-full p-4 bg-[#cb4154] text-white flex flex-col items-center gap-5">
            <div className="flex justify-center gap-10 w-full">
                <div className="w-full flex flex-col gap-1 items-center justify-center">
                    <Link
                        href={"/"}
                        className="hero--heading text-5xl font-semibold"
                    >
                        GeneKriti
                    </Link>
                    <div className="text-lg font-medium">
                        a catalyst for positive change
                    </div>
                    <Link
                        target="_blank"
                        href={"https://github.com/team-bhoomi/genekriti-web"}
                        className="flex flex-col items-center font-medium mt-2"
                    >
                        GitHub Repo
                    </Link>
                </div>
                <div className="w-full flex items-center justify-center">
                    <div className="flex flex-col gap-1">
                        <div className="text-lg font-medium">
                            Reference Links
                        </div>
                        <div className="flex flex-col gap-1">
                            <Link
                                href={"/#about"}
                                className="hover:font-medium w-fit"
                            >
                                About
                            </Link>

                            <Link
                                href={"/#impact"}
                                className="hover:font-medium w-fit"
                            >
                                Impact
                            </Link>

                            <Link
                                href={"/#services"}
                                className="hover:font-medium w-fit"
                            >
                                Services
                            </Link>
                            <button className="hover:font-medium w-fit">
                                <LoginLink>Log In</LoginLink>
                            </button>
                            <button className="hover:font-medium w-fit">
                                <RegisterLink>Sign Up</RegisterLink>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center gap-2 mt-4">
                <span>made with 💛 by team bhoomi</span>
                <span>© All rights reversed {new Date().getFullYear()}</span>
            </div>
        </footer>
    );
};
