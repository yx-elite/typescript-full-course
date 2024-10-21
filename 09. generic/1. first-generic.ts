// Without generic
function printNumber(item: number, defaultValue: number): [number, number] {
  return [item, defaultValue];
}
function printString(item: string, defaultValue: string): [string, string] {
  return [item, defaultValue];
}
function printBoolean(item: boolean, defaultValue: boolean): [boolean, boolean] {
  return [item, defaultValue];
}
// Example usage
const num = printNumber(42, 0);
console.log(num);

const str = printString("hello", "world");
console.log(str);

const bool = printBoolean(true, false);
console.log(bool);


// Using generic
function uniqueDataTypeFunc<Type>(item: Type, defaultValue: Type): [Type, Type] {
  return [item, defaultValue];
}
// Example usage
const num1 = uniqueDataTypeFunc<number>(42, 0)
console.log(num1);

const str1 = uniqueDataTypeFunc<string>("hello", "world");
console.log(str1);

const bool1 = uniqueDataTypeFunc<boolean>(true, false);
console.log(bool1);

// Example custom type
interface Dog {
  name: string;
  breed: string;
}
const dog1 = uniqueDataTypeFunc<Dog>(
  { name: "Buddy", breed: "Labrador" }, // item
  { name: "Default", breed: "Unknown" } // default value
)
console.log(dog1)