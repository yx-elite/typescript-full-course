// Regular function
function addOne(num: number) {
  return num + 1;
}
const res = addOne(6);
console.log(res);

// Arrow function
const double = (x: number, y: number) => x * y;
const result = double(3, 6)
console.log(result)

// TS will give warning if you provide more or less arguments than you specify in your parameters area.
// double(2, 10, 20);