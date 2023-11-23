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

export function rcg() {
  return "#" + (((1 << 24) * Math.random()) | 0).toString(16);
}
