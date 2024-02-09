import { prisma } from "@/lib/prisma";
import { Organization } from "@prisma/client";

export const createOrg = async ({
  address,
  city,
  org_id,
  country,
  description,
  email,
  founder_name,
  state,
  name,
  phone,
}: Pick<
  Organization,
  | "address"
  | "city"
  | "country"
  | "description"
  | "email"
  | "founder_name"
  | "name"
  | "org_id"
  | "phone"
  | "state"
>): Promise<Organization> => {
  const response = await prisma.organization.create({
    data: {
      org_id,
      name,
      description,
      email,
      phone,
      founder_name,
      address,
      city,
      state,
      country,
    },
  });
  return response;
};
