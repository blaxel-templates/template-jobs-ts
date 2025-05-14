import { withSpan } from "@blaxel/core";

async function step1(){
  console.log(`Step 1`);
  await new Promise(resolve => setTimeout(resolve, 10000));
  console.log(`Step 1 done`);
}

// Automatically add a span to the function to retrieve it in the blaxel telemetry interface
export default () => withSpan('step1', step1);