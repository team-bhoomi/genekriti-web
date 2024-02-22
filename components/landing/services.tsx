"use client";
import { AttentionSeeker, Zoom } from "react-awesome-reveal";
export const Services = () => {
    return (
        <section
            id="features"
            className="w-full min-h-screen flex flex-col p-10 pt-32 gap-10 relative"
        >
            <AttentionSeeker
                damping={0.1}
                effect="bounce"
                triggerOnce
                className="text-8xl font-bold mt-[-60px] w-full text-center text-[#cb4154] about--heading"
            >
                features
            </AttentionSeeker>

            <div className="flex flex-col gap-20">
                <Zoom triggerOnce damping={0.1}>
                    <div className="flex items-center justify-between gap-10 bg-[#fada5e] rounded-xl p-10">
                        <div className="w-full h-[500px] rounded-md overflow-hidden">
                            <img
                                src="/images/landing/services-banner1.jpg"
                                className="h-full object-cover"
                            />
                        </div>
                        <div className="w-full h-[500px] bg-[#faf0e6] rounded-md flex flex-col items-center gap-10 p-10">
                            <div className="hero--heading text-[#cb4154] font-semibold text-6xl">
                                Rekriti
                            </div>
                            <div className={`text-xl p-4 pt-0`}>
                                ReKriti is dedicated to revolutionizing the way
                                we think about waste. With ReKriti, we believe
                                that every discarded item has the potential to
                                be transformed into something beautiful, useful,
                                and sustainable. <br />
                                <br />
                                Transform waste into treasure:
                                <ul className="list-disc">
                                    <li>Upload a picture of your waste</li>
                                    <li>
                                        AI suggests DIY projects & home décor
                                        ideas
                                    </li>
                                    <li>
                                        Access instructional videos for easy
                                        transformation
                                    </li>
                                    <li>
                                        Give waste a new life,
                                        reduce your footprint!
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Zoom>
                <Zoom triggerOnce damping={0.1}>
                    <div className="flex items-center justify-between gap-10 bg-[#006a4e] rounded-xl p-10">
                        <div className="w-full h-[500px] bg-[#faf0e6] rounded-md flex flex-col items-center gap-10 p-10">
                            <div className="hero--heading text-[#cb4154] font-semibold text-6xl">
                                Market Place
                            </div>
                            <div className={`text-xl p-4 pt-0`}>
                                Discover a curated selection of organic,
                                eco-friendly products that are good for you and
                                the planet. With every purchase, you're
                                supporting ethical practices and making a
                                positive impact on the environment.
                                <br />
                                <br />
                                Shop consciously for:
                                <ul className="list-disc">
                                    <li>Organic & eco-friendly products</li>
                                    <li>Support local artisans & businesses</li>
                                    <li>Earn points with every purchase</li>
                                    <li>
                                        Redeem points for more sustainable goods
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full h-[500px] rounded-md flex items-end overflow-hidden">
                            <img
                                src="/images/landing/services-banner2.jpg"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </Zoom>

                <Zoom triggerOnce damping={0.1}>
                    <div className="flex items-center justify-between gap-10 bg-[#fada5e] rounded-xl p-10">
                        <div className="w-full h-[500px] rounded-md overflow-hidden">
                            <img
                                src="/images/landing/services-banner3.jpg"
                                className="h-full object-cover"
                            />
                        </div>
                        <div className="w-full h-[500px] bg-[#faf0e6] rounded-md flex flex-col items-center gap-10 p-10">
                            <div className="hero--heading text-[#cb4154] font-semibold text-6xl">
                                Quizes
                            </div>
                            <div className={`text-xl p-4 pt-0`}>
                                Challenge yourself with our interactive quizzes
                                on sustainability, eco-friendly living, and
                                environmental conservation. Put your knowledge
                                to the test and earn rewards for your efforts.
                                <br />
                                <br />
                                Test your sustainability knowledge:
                                <ul className="list-disc">
                                    <li>
                                        Engaging quizzes on environmental topics
                                    </li>
                                    <li>Earn points for correct answers</li>
                                    <li>
                                        Unlock exclusive benefits within
                                        GeneKriti
                                    </li>
                                    <li>Learn and grow while having fun!</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Zoom>

                <Zoom triggerOnce damping={0.1}>
                    <div className="flex items-center justify-between gap-10 bg-[#006a4e] rounded-xl p-10">
                        <div className="w-full h-[500px] bg-[#faf0e6] rounded-md flex flex-col items-center gap-10 p-10">
                            <div className="hero--heading text-[#cb4154] font-semibold text-6xl">
                                Events
                            </div>
                            <div className={`text-xl p-4 pt-0`}>
                                Looking to connect with like-minded individuals
                                and organizations? Browse through our curated
                                list of upcoming events focused on environmental
                                sustainability, conservation, and
                                eco-friendly living.
                                <br />
                                <br />
                                Discover and participate in:
                                <ul className="list-disc">
                                    <li>Educational workshops & talks</li>
                                    <li>Community clean-up drives</li>
                                    <li>Sustainability-focused events</li>
                                    <li>
                                        Connect, learn, and make a difference!
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full h-[500px] rounded-md flex items-end overflow-hidden">
                            <img
                                src="/images/landing/services-banner4.jpg"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </Zoom>
            </div>
        </section>
    );
};
