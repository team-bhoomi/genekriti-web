"use client";
import { Montserrat } from "next/font/google";
import { Bounce, Slide } from "react-awesome-reveal";
const monsterrat = Montserrat({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["cyrillic"],
});
export const About = () => {
    return (
        <section
            id="about"
            className="w-full min-h-full flex flex-col items-center p-10 pt-16 relative"
        >
            <div className="flex flex-col justify-center items-end w-full">
                <Slide
                    triggerOnce
                    damping={0.1}
                    direction="right"
                    className="w-[900px] h-[275px] flex items-end justify-center rounded-lg overflow-hidden"
                >
                    <img
                        src="/images/landing/hero-banner2.jpg"
                        className="w-full object-cover"
                    />
                </Slide>
                <Slide
                    triggerOnce
                    damping={0.1}
                    direction="left"
                    className="text-8xl font-bold mt-[-60px] w-full text-[#cb4154] about--heading"
                >
                    About
                </Slide>
            </div>
            <div className="border-y-2 border-[#cb4154] w-full flex gap-10 p-4">
                <Slide
                    damping={0.1}
                    triggerOnce
                    direction="left"
                    className="w-[300px] min-w-[300px] h-[500px] flex items-center justify-center rounded-xl overflow-hidden"
                >
                    <img
                        src="/images/landing/about-banner1.jpg"
                        className="w-full object-cover"
                    />
                </Slide>
                <Slide damping={0.1} direction="right" triggerOnce>
                    <div className="w-full p-10 flex flex-col gap-4 bg-[#006a4e] text-white about--bg">
                        <div
                            className={`text-3xl font-semibold ${monsterrat.className}`}
                        >
                            Welcome to Genekriti – your gateway to a more
                            sustainable lifestyle!
                        </div>
                        <div
                            className={`text-xl font-medium ${monsterrat.className}`}
                        >
                            {" "}
                            At Genekriti, we are committed to fostering positive
                            change by promoting eco-conscious practices and
                            providing innovative solutions for a greener future.
                        </div>
                        <div
                            className={`text-xl font-medium ${monsterrat.className}`}
                        >
                            GeneKriti is your one-stop platform for embracing a
                            greener and more sustainable future. Join our
                            vibrant community and unlock a world of features
                            designed to inspire and empower you
                        </div>
                        <Bounce damping={0.1} delay={500} triggerOnce>
                            <div className="about--tagline bg-[#faf0e6] text-xl font-semibold text-[#006a4e] p-6 mt-10">
                                GeneKriti is more than just an app, it's a
                                community. Join us today and be the change you
                                want to see in the world!
                            </div>
                        </Bounce>
                    </div>
                </Slide>
            </div>
            <div
                className={`tagline--banner bg-[#cb4154] z-10 text-white font-semibold text-2xl w-fit mt-10 p-10 py-6 mx-9 ${monsterrat.className}`}
            >
                a catalyst for positive change
            </div>
        </section>
    );
};
