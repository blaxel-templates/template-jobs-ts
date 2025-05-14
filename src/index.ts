import { blStartJob } from '@blaxel/core';
import '@blaxel/telemetry';
import step1 from './steps/step1';
import step2 from './steps/step2';
import step3 from './steps/step3';

type JobArguments = {
  name: string;
}

async function myJob({name}: JobArguments) {
  console.log(`Hello, world ${name}!`);
  await step1(name);
  await step2(name);
  await step3(name);
}

blStartJob(myJob);