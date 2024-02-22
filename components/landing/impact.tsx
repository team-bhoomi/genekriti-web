"use client";
import { AttentionSeeker } from "react-awesome-reveal";

export const Impact = () => {
    return (
        <section
            id="impact"
            className="w-full min-h-screen flex flex-col p-10 pt-32 gap-10 relative"
        >
            <AttentionSeeker
                damping={0.1}
                effect="bounce"
                triggerOnce
                className="text-8xl font-bold mt-[-60px] w-full text-center text-[#cb4154] about--heading"
            >
                impact
            </AttentionSeeker>

            <div className="flex flex-col gap-10 p-10">
                <iframe
                    src="https://ourworldindata.org/grapher/global-plastics-production?time=earliest..2019"
                    loading="lazy"
                    style={{
                        width: "100%",
                        height: "600px",
                        border: "0px none",
                        borderRadius: "16px",
                    }}
                ></iframe>

                <iframe
                    src="https://ourworldindata.org/grapher/share-degraded-land?time=2019"
                    loading="lazy"
                    style={{
                        width: "100%",
                        height: "600px",
                        border: "0px none",
                        borderRadius: "16px",
                    }}
                ></iframe>

                <iframe
                    src="https://ourworldindata.org/grapher/plastics-top-rivers"
                    loading="lazy"
                    style={{
                        width: "100%",
                        height: "600px",
                        border: "0px none",
                        borderRadius: "16px",
                    }}
                ></iframe>
            </div>
        </section>
    );
};
