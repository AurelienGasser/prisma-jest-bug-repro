import { prisma, db } from './db';

export const getNumOpenConnections = async () => {
  const query = `SELECT count(*) FROM pg_stat_activity where datname = '${db}'`;
  return ((await prisma.$queryRawUnsafe(query)) as any)[0].count;
};
