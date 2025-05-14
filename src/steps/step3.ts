import { startSpan, withSpan } from "@blaxel/core";

async function step3() {
  const step3 = startSpan('step3');
  console.log(`Step 3`);
  await new Promise(resolve => setTimeout(resolve, 10000));
  console.log(`Step 3 done`);
  step3.end();
}

// Automatically add a span to the function to retrieve it in the blaxel telemetry interface
export default () => withSpan('step3', step3);