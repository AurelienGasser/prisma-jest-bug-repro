import { PrismaClient } from "@prisma/client";

export const db = "testdb";
export let prisma = new PrismaClient({
  datasourceUrl: `postgres://postgres:postgres@localhost:5432/${db}`,
});

export default prisma;
