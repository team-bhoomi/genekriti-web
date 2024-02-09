import { getOrgById } from "@/lib/services/org/getOrgById";
import { createOrg } from "@/lib/services/org/createOrg";
import { Organization } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const {
    org_id,
    city,
    address,
    state,
    country,
    name,
    founder_name,
    phone,
    description,
    email,
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
  > = await req.json();

  const existingOrg = await getOrgById({ org_id });
  if (existingOrg) {
    NextResponse.json({ message: "org already exists in DB" }, { status: 400 });
  }

  const response = await createOrg({
    org_id,
    city,
    address,
    state,
    country,
    name,
    founder_name,
    phone,
    description,
    email,
  });

  NextResponse.json(
    { message: "Org added successfully", data: response },
    { status: 200 }
  );
};
