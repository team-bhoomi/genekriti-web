import { prisma } from "@/lib/prisma";
import { User } from "@prisma/client";

export type createUserType = Pick<
  User,
  "id" | "first_name" | "last_name" | "email" | "role" | "profile_image"
>;
export const createUser = async ({
  id,
  first_name,
  last_name,
  email,
  role,
  profile_image,
}: createUserType) => {
  const response = await prisma.user.create({
    data: {
      id,
      first_name,
      last_name,
      email,
      role,
      profile_image,
    },
  });
  return response;
};
