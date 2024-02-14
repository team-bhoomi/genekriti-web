import { cookies } from "next/headers";

export const getCurrentUserId = async () => {
  return JSON.parse(cookies().get("user")?.value!).id;
};
