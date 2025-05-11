async function step1() {
  console.log(`Step 1`);
  await new Promise(resolve => setTimeout(resolve, 10000));
  console.log(`Step 1 done`);
}

export default step1;