import { withSpan } from "@blaxel/core";

async function step2() {
  console.log(`Step 2`);
  await withSpan('step2_a', step2_a);
  await withSpan('step2_b', step2_b);
  console.log(`Step 2 done`);
}

async function step2_a() {
  console.log(`Step 2_a`);
  await new Promise(resolve => setTimeout(resolve, 10000));
  console.log(`Step 2_a done`);
}

async function step2_b() {
  console.log(`Step 2_b`);
  await new Promise(resolve => setTimeout(resolve, 10000));
  console.log(`Step 2_b done`);
}
export default step2;