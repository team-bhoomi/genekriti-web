import { addConversation } from "@/lib/services/ai/addConversation";
import { askOllama } from "@/lib/services/ai/askOllama";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { prompt, categories, user_id } = await req.json();
    const AIoutput = await askOllama({ prompt });
    // const response = await addConversation({
    //   ai_response: AIoutput,
    //   categories: JSON.parse(categories),
    //   prompt,
    //   user_id,
    //   resource_url: "",
    //   title: "",
    // });
    NextResponse.json(
      { message: "Request successfull", AIoutput },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    NextResponse.json(
      {
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
};
