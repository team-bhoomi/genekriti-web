import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export const QuestionCard = () => {
    var quesType = "hard";
    return (
        <>
            <div className="border-2 border-slate-400 bg-primary/10 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm text-sm w-3/4 flex flex-col gap-2 p-6">
                <div className="flex gap-2">
                    {quesType == "easy" ? (
                        <Badge className="w-fit bg-green-600 hover:bg-green-600">
                            Easy
                        </Badge>
                    ) : quesType == "medium" ? (
                        <Badge className="w-fit bg-yellow-600 hover:bg-yellow-600">
                            Medium
                        </Badge>
                    ) : (
                        <Badge className="w-fit bg-red-600 hover:bg-red-600">
                            Hard
                        </Badge>
                    )}
                    <Badge className="bg-[#008b8b] hover:bg-[#008b8b]">
                        Category 1
                    </Badge>
                    <Badge className="bg-[#008b8b] hover:bg-[#008b8b]">
                        Category 2
                    </Badge>
                    <Badge className="bg-[#008b8b] hover:bg-[#008b8b]">
                        Category 3
                    </Badge>
                    <Badge className="bg-[#008b8b] hover:bg-[#008b8b]">
                        Category 4
                    </Badge>
                </div>
                <span>Question 1 : </span>
                <span className="text-2xl font-medium">
                    What is the main disadvantage of hydroelectricity compared
                    to other renewable energy sources?
                </span>
            </div>

            <div className="grid grid-cols-2 items-center gap-7 w-3/4 *:p-3">
                {[1, 2, 3, 4].map((value, id) => (
                    <form
                        key={id}
                        className="border-2 border-slate-400 bg-primary/10 rounded-md tracking-wide bg-clip-padding backdrop-filter backdrop-blur-sm flex flex-col gap-2 p-1 hover:bg-primary/60 has-[:checked]:bg-primary/60 hover:cursor-pointer"
                    >
                        <span>Option {value}:</span>
                        <Label className="font-normal">
                            <Input
                                type="radio"
                                name="quiz-option"
                                value={"option1"}
                                className="hidden checked:hidden"
                            />
                            Primary pollutants are emitted directly from
                            sources, while secondary pollutants form in the
                            atmosphere from chemical reactions.
                        </Label>
                    </form>
                ))}
            </div>
        </>
    );
};
