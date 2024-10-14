// Type constraint using the 'extends' keyword

interface Indentifiable {
  id: number;
}

// Generic function with type constraint
// Record<string, any> is a TypeScript utility type that describes an object where:
// - The keys are strings (i.e., string represents the keys of the object).
// - The values can be any type (any means the values could be any data type)
function mergeObject<T extends Indentifiable, U extends Record<string, any>> (obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 }
}

// Example usage
const object1 = { id: 1, name: "Object 1" };
const object2 = { id: 2, description: "Object 2" };

const mergedObject = mergeObject(object1, object2);
console.log(mergedObject);