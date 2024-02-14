import { tipIcon, tips } from "@/lib/data/tips";

export const Loading = () => {
    const randomTip = Math.floor(Math.random() * (tips.length - 1));
    const randomTipIcon = Math.floor(Math.random() * (tipIcon.length - 1));
    console.log(randomTipIcon);
    return (
        <div className="flex items-center gap-3 animate-[pulse_0.5s_ease-in-out_infinite]">
            <div className="w-[175px] h-[175px] flex items-center">
                <img
                    src={tipIcon[randomTipIcon].imgSrc}
                    alt={tipIcon[randomTipIcon].imgAlt}
                    className="w-full"
                />
            </div>
            <div className="text-xl font-semibold w-[475px]">
                {tips[randomTip].tip}
            </div>
        </div>
    );
};
