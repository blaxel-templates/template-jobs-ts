import { startSpan, withSpan } from "@blaxel/core";

async function step2(name: string) {
  console.log(`Step 2 ${name}`);
  await step2_a(name);
  await step2_b(name);
  console.log(`Step 2 ${name} done`);
}

async function step2_a(name: string) {
  // Manually start a span for blaxel telemetry, allowing to set custom attributes
  const step2_a = startSpan('step2_a');
  console.log(`Step 2_a ${name}`);
  await new Promise(resolve => setTimeout(resolve, 2000));
  console.log(`Step 2_a ${name} done`);
  step2_a.end();
}

async function step2_b(name: string) {
  // Manually start a span for blaxel telemetry, allowing to set custom attributes
  const step2_b = startSpan('step2_b');
  console.log(`Step 2_b ${name}`);
  await new Promise(resolve => setTimeout(resolve, 2000));
  console.log(`Step 2_b ${name} done`);
  step2_b.end();
}

// Automatically add a span to the function to retrieve it in the blaxel telemetry interface
export default (name: string) => withSpan(`step2`, async () => await step2(name));