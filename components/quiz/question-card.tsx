"use client";
import { questionDifficulty } from "@prisma/client";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { convertCategoryToLowerCase } from "@/lib/constants/convertCategoryToLowerCase";
import { useState } from "react";

export const QuestionCard = ({ question, currentQuestionNumber }: { question: any, currentQuestionNumber: number }) => {
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [isSelected, setIsSelected] = useState({
        opt_1: false,
        opt_2: false,
        opt_3: false,
        opt_4: false,
    });

    const DIFFICULTY_LEVEL: questionDifficulty = question.level;
    let options = [];
    options.push(question.opt_1);
    options.push(question.opt_2);
    options.push(question.opt_3);
    options.push(question.opt_4);

    console.log(selectedAnswer);
    return (
        <>
            <div className="border-2 border-slate-400 bg-primary/10 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm text-sm w-3/4 flex flex-col gap-2 p-6">
                <div className="flex gap-2">
                    {DIFFICULTY_LEVEL === "EASY" && <Badge className="w-fit bg-green-600 hover:bg-green-600">
                        Easy
                    </Badge>}
                    {
                        DIFFICULTY_LEVEL === "MEDIUM" && <Badge className="w-fit bg-yellow-600 hover:bg-yellow-600">
                            Medium
                        </Badge>
                    }
                    {
                        DIFFICULTY_LEVEL === "HARD" && <Badge className="w-fit bg-red-600 hover:bg-red-600">
                            Hard
                        </Badge>
                    }
                    <Badge className="bg-[#008b8b] hover:bg-[#008b8b]">
                        {convertCategoryToLowerCase(question.category)}
                    </Badge>
                </div>
                <span>Question {currentQuestionNumber} : </span>
                <span className="text-2xl font-medium">
                    {question.question}
                </span>
            </div>

            <div className="grid grid-cols-2 items-center gap-7 w-3/4 *:p-3">
                {
                    isSelected.opt_1 ? <QuestionOption is_selected={true} selected={isSelected}
                        opt={question.opt_1} i={1}
                        onClick={() => {
                            setSelectedAnswer(question.opt_1);
                            setIsSelected({
                                opt_1: true,
                                opt_2: false,
                                opt_3: false,
                                opt_4: false,
                            }
                            )
                        }} /> : <QuestionOption is_selected={false} selected={isSelected}
                            opt={question.opt_1} i={1}
                            onClick={() => {
                                setSelectedAnswer(question.opt_1);
                                setIsSelected({
                                    opt_1: true,
                                    opt_2: false,
                                    opt_3: false,
                                    opt_4: false,
                                }
                                )
                            }} />
                }
                {
                    isSelected.opt_2 ? <QuestionOption is_selected={true} selected={isSelected}
                        opt={question.opt_2} i={2}
                        onClick={() => {
                            setSelectedAnswer(question.opt_2);
                            setIsSelected({
                                opt_1: false,
                                opt_2: true,
                                opt_3: false,
                                opt_4: false,
                            }
                            )
                        }} /> : <QuestionOption is_selected={false} selected={isSelected}
                            opt={question.opt_2} i={2}
                            onClick={() => {
                                setSelectedAnswer(question.opt_2);
                                setIsSelected({
                                    opt_1: false,
                                    opt_2: true,
                                    opt_3: false,
                                    opt_4: false,
                                }
                                )
                            }} />
                }
                {
                    isSelected.opt_3 ? <QuestionOption is_selected={true} selected={isSelected}
                        opt={question.opt_3} i={3}
                        onClick={() => {
                            setSelectedAnswer(question.opt_3);
                            setIsSelected({
                                opt_1: false,
                                opt_2: false,
                                opt_3: true,
                                opt_4: false,
                            }
                            )
                        }} /> : <QuestionOption is_selected={false} selected={isSelected}
                            opt={question.opt_3} i={3}
                            onClick={() => {
                                setSelectedAnswer(question.opt_3);
                                setIsSelected({
                                    opt_1: false,
                                    opt_2: false,
                                    opt_3: true,
                                    opt_4: false,
                                }
                                )
                            }} />
                }
                {
                    isSelected.opt_4 ? <QuestionOption is_selected={true} selected={isSelected}
                        opt={question.opt_4} i={4}
                        onClick={() => {
                            setSelectedAnswer(question.opt_4);
                            setIsSelected({
                                opt_1: false,
                                opt_2: false,
                                opt_3: false,
                                opt_4: true,
                            }
                            )
                        }} /> : <QuestionOption is_selected={false} selected={isSelected}
                            opt={question.opt_4} i={4}
                            onClick={() => {
                                setSelectedAnswer(question.opt_4);
                                setIsSelected({
                                    opt_1: false,
                                    opt_2: false,
                                    opt_3: false,
                                    opt_4: true,
                                }
                                )
                            }} />
                }
                <input name="user_answer" className="hidden" defaultValue={selectedAnswer} />
            </div>
        </>
    );
};


const QuestionOption = ({ opt, i, onClick, selected, is_selected }: { opt: string, i: number, onClick: any, selected: any, is_selected: boolean }) => {
    return (
        <div
            className={`${is_selected ? "bg-primary/60" : null} border-2 min-h-[7rem] border-slate-400 bg-primary/10 rounded-md tracking-wide bg-clip-padding backdrop-filter backdrop-blur-sm flex flex-col gap-2 p-1 hover:bg-primary/60 has-[:checked]:bg-primary/60 hover:cursor-pointer`}
            onClick={onClick}
        >
            <span>Option {i}:</span>
            <div>{opt}</div>
        </div>
    )
}