import { startSpan, withSpan } from "@blaxel/core";

async function step2() {
  console.log(`Step 2`);
  await step2_a();
  await step2_b();
  console.log(`Step 2 done`);
}

async function step2_a() {
  // Manually start a span for blaxel telemetry, allowing to set custom attributes
  const step2_a = startSpan('step2_a');
  console.log(`Step 2_a`);
  await new Promise(resolve => setTimeout(resolve, 10000));
  console.log(`Step 2_a done`);
  step2_a.end();
}

async function step2_b() {
  // Manually start a span for blaxel telemetry, allowing to set custom attributes
  const step2_b = startSpan('step2_b');
  console.log(`Step 2_b`);
  await new Promise(resolve => setTimeout(resolve, 10000));
  console.log(`Step 2_b done`);
  step2_b.end();
}

// Automatically add a span to the function to retrieve it in the blaxel telemetry interface
export default () => withSpan('step2', step2);