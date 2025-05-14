import { withSpan } from "@blaxel/core";

async function step3(name: string) {
  console.log(`Step 3 ${name}`);
  await new Promise(resolve => setTimeout(resolve, 10000));
  console.log(`Step 3 ${name} done`);
}

// Automatically add a span to the function to retrieve it in the blaxel telemetry interface
export default (name: string) => withSpan(`step3`, async () => step3(name));
