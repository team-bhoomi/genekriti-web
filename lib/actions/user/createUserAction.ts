"use server";
import { createUser } from "@/lib/services/user/createUser";
import { UserType } from "@prisma/client";
import { redirect } from "next/navigation";

export const createUserAction = async (formData: FormData) => {
  try {
    // const role = formData.get("role");
    // const user = await createUser({
    //   id: formData.get("id") as string,
    //   first_name: formData.get("first_name") as string,
    //   last_name: formData.get("last_name") as string,
    //   email: formData.get("email") as string,
    //   role: role as UserType,
    //   profile_image: formData.get("profile_image") as string,
    // });
    // // if (role == "INDIVIDUAL") {
    // //   redirect("/dashboard");
    // // } else {
    // //   redirect("/onboard/org");
    // // }
    // redirect("/onboard/org");
    redirect("/");
  } catch (error) {
    console.log(error);
  }
};
