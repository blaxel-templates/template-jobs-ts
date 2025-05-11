import { startSpan } from "@blaxel/core";

async function step3() {
  const step3 = startSpan('step3');
  console.log(`Step 3`);
  await new Promise(resolve => setTimeout(resolve, 10000));
  console.log(`Step 3 done`);
  step3.end();
}

export default step3;