import { blStartJob, withSpan } from '@blaxel/core';
import '@blaxel/telemetry';
import step1 from './steps/step1';
import step2 from './steps/step2';
import step3 from './steps/step3';
type JobArguments = {
  name: string;
}

async function myJob({name}: JobArguments) {
  console.log(`Hello, world ${name}!`);

  await withSpan('step1', step1);
  await withSpan('step2', step2);
  await withSpan('step3', step3);
}

blStartJob(myJob);