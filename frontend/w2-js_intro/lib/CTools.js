// Connors tools

export function rng(value) {
  return Math.floor(Math.random() * value + 1);
}

export function printVariables(results) {
  console.log("\n/////////////////////////////////////");

  for (let name in results) {
    let result = results[name];
    console.log(`\n${name}: ${JSON.stringify(result)}`);
  }

  console.log("\n/////////////////////////////////////\n");
}
