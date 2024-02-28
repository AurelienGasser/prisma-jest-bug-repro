import { getNumOpenConnections } from "./lib";

test("B", async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const num = await getNumOpenConnections();
  console.log(`B: ${num} open connections`);
});
