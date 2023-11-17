export function rcg() {
  return "#" + (((1 << 24) * Math.random()) | 0).toString(16);
}
