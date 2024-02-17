import { tipIcon, tips } from "@/lib/data/tips";

export const Loading = () => {
    const randomTip = Math.floor(Math.random() * (tips.length - 1));
    const randomTipIcon = Math.floor(Math.random() * (tipIcon.length - 1));
    return (
        <div className="flex items-center gap-3">
            <div className="w-[175px] h-[175px] flex items-center">
                <img
                    src={tipIcon[randomTipIcon].imgSrc}
                    alt={tipIcon[randomTipIcon].imgAlt}
                    className="w-full"
                    loading="lazy"
                    fetchPriority="high"
                />
            </div>
            <div className="flex flex-col gap-4">
                <div className="text-xl font-semibold w-[475px]">
                    {tips[randomTip].tip}
                </div>
                <div className="loader"></div>
            </div>
        </div>
    );
};
