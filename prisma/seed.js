import { PrismaClient } from "@prisma/client";
import { questions } from "@/lib/data/quiz";

const prisma = new PrismaClient();

async function main() {
  await prisma.questions.createMany({
    data: questions,
  });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
