import { prisma } from "@/lib/prisma";
import { User } from "@prisma/client";

export const getUserById = async ({
  id,
}: {
  id: string;
}): Promise<User | null> => {
  const response = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  return response;
};
