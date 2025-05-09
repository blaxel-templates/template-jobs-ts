import { blJob } from '@blaxel/core';
import '@blaxel/telemetry';

type JobArguments = {
  name: string;
}

async function myJob({name}: JobArguments) {
  console.log(`Hello, world ${name}!`);
}

blJob.start(myJob);