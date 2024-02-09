import { prisma } from "@/lib/prisma";
import { Organization } from "@prisma/client";

export const findOrg = async (
  org_id: string
): Promise<{ data: Organization | null; success: boolean }> => {
  const response = await prisma.organization.findUnique({
    where: {
      org_id,
    },
  });

  if (!response) {
    return { data: null, success: false };
  } else {
    return { data: response, success: true };
  }
};
