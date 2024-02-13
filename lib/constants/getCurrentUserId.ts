import { cookies } from "next/headers";

export const getCurrentUserId = (): string => {
  return JSON.parse(cookies().get("user")?.value!).id;
};
