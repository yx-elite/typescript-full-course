// Return type of regular function
function double1 (x: number): number {
  return x * x
}
const res = double1(6);
console.log(res);

// Return type of arrow function
const double2 = (x: number): number => x * x;
const result = double2(6);
console.log(result);