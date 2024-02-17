"use client";
import confetti from "canvas-confetti";
import { useEffect } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
export const FinishCard = () => {
    useEffect(() => {
        confetti();
    }, []);
    return (
        <Card>
            <div className="flex flex-col items-center gap-3 rounded-xl p-4">
                <div className="text-2xl font-semibold text-center">
                    Hurray!! You completed the quiz.
                </div>
                <div className="text-xl font-medium">Your Score: {0}</div>
                <div className="text-xl font-medium">
                    Correctly Answered: {0}
                </div>
                <Button
                    variant={"outline"}
                    onClick={() => {
                        confetti();
                    }}
                    className="text-lg"
                >
                    Celebrate 🎉
                </Button>
            </div>
        </Card>
    );
};
