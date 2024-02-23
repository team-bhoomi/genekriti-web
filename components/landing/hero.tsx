"use client";
import { Bounce, Fade, Slide } from "react-awesome-reveal";
import { Montserrat } from "next/font/google";
const monsterrat = Montserrat({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["cyrillic"],
});
export const Hero = () => {
    return (
        <section className="w-full min-h-screen flex flex-col p-10 pt-16 relative">
            <Fade
                triggerOnce
                className="bg-[#006a4e] home--banner h-fit w-fit p-14 py-10 m-9 mt-16 text-white text-9xl font-extrabold z-10 hero--heading"
            >
                <Slide delay={1500} direction="down">
                    GeneKriti
                </Slide>
            </Fade>
            <Fade
                damping={0.1}
                triggerOnce
                className={`tagline--banner bg-[#cb4154] z-10 text-white font-semibold text-2xl w-fit p-10 py-6 mx-9 ${monsterrat.className}`}
            >
                Empowering Every Action Towards a Greener Future
            </Fade>
            <div className="absolute top-0 right-0 m-14 mt-24 flex gap-10 opacity-90">
                <Fade triggerOnce cascade damping={0.1}>
                    <div className="flex flex-col gap-10 items-end">
                        <Fade triggerOnce cascade damping={0.1}>
                            <div className="flex gap-10">
                                <Fade triggerOnce cascade damping={0.1}>
                                    <div className="w-[200px] h-[300px] rounded-lg overflow-hidden">
                                        <img
                                            src="/images/landing/hero-banner3.jpg"
                                            className="h-full object-cover"
                                        />
                                    </div>
                                    <div className="w-[250px] h-[300px] rounded-lg overflow-hidden">
                                        <img
                                            src="/images/landing/hero-banner5.jpg"
                                            className="h-full object-cover"
                                        />
                                    </div>
                                </Fade>
                            </div>
                            <div className="w-[650px] h-[260px] flex items-center justify-center  rounded-lg overflow-hidden">
                                <img
                                    src="/images/landing/hero-banner4.jpg"
                                    className="w-full object-cover"
                                />
                            </div>
                        </Fade>
                    </div>
                    <div className="w-[275px] h-[600px] rounded-lg overflow-hidden">
                        <img
                            src="/images/landing/hero-banner1.jpg"
                            className="h-full object-cover"
                        />
                    </div>
                </Fade>
            </div>
        </section>
    );
};
