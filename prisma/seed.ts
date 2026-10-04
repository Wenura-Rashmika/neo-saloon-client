import { PrismaClient, Prisma } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

const userData: Prisma.UserCreateInput[] = [
    {
        email : "admin@saloonleo.lk",
        firstName : "Admin",
        lastName : "Neo",
        password : "$2a$12$/4Sv6X7IP9qQ85IMgHPH4uGeUIY2V7R/x85frjJj5IGpL/Uoxue1i",
        role : "ADMIN",
        status : "ACTIVE",
        privileges : []
    }
];

export async function main() {
  for (const u of userData) {
    await prisma.user.create({ data: u });
  }
}

main();