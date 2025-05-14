import { withSpan } from "@blaxel/core";

async function step1(name: string){
  console.log(`Step 1 ${name}`);
  await new Promise(resolve => setTimeout(resolve, 10000));
  console.log(`Step 1 ${name} done`);
}

// Automatically add a span to the function to retrieve it in the blaxel telemetry interface
export default (name: string) => withSpan(`step1`, async () => step1(name));