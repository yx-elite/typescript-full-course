// Example 1
interface MathOperation {
  (x: number, y: number): number;
}
const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;

console.log(add(6, 3));
console.log(subtract(6, 3))

// Example 2
interface Car {
  brand: string;
  model: string;
  year: number;
}
function displayCarInfo(car: Car): void {
  console.log(`Brand: ${car.brand}, Model: ${car.model}, Year: ${car.year}`);
}
const myCar: Car = {
  brand: "Honda",
  model: "City",
  year: 2000,
};
displayCarInfo(myCar);