import { getNumOpenConnections } from "./lib";

test("A", async () => {
  const num = await getNumOpenConnections();
  console.log(`A: ${num} open connections`);
});
