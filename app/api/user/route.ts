import { createUser } from "@/lib/services/user/createUser";
import { getUserById } from "@/lib/services/user/getUserById";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const { id, first_name, last_name, email, role, profile_image } =
    await req.json();

  const existingUser = await getUserById({ id });
  if (existingUser) {
    return NextResponse.json(
      { data: existingUser, message: "User already exists in database" },
      { status: 400 }
    );
  }
  const user = await createUser({
    id,
    first_name,
    last_name,
    email,
    role,
    profile_image,
  });

  return NextResponse.json(
    { data: user, message: "User created successfully" },
    { status: 201 }
  );
};
