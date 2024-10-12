function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
  return array.filter((item) => condition(item));
}

// Number
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumber = filterArray<number>(numberArray, (num) => num % 2 === 0);
console.log(evenNumber);

// String
const stringArray = ["apple", "banana", "cherry", "date"];
const shortWords = filterArray<string>(stringArray, (word) => word.length < 6);
console.log(shortWords);

// Object
interface Fruit {
  name: string;
  color: string;
}
const fruitArray: Fruit[] = [
  { name: "Apple", color: "Red" },
  { name: "Banana", color: "Yellow" },
  { name: "Cherry", color: "Red" },
];
const redFruit = filterArray<Fruit>(fruitArray, (fruit) => fruit.color === 'Red')
console.log(redFruit)