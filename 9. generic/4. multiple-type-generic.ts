//Example 1
function reversePair<T, U>(value1: T, value2: U): [U, T] {
  return [value2, value1];
}
const reversedPair = reversePair('test', 36);
console.log(reversedPair);

// Example 2
function combinePair<T, U>(value1: T, value2: U): [T, U] {
  return [value1, value2]
}
const combinedStringNumber = combinePair('test', 36);
console.log(combinedStringNumber);

const combinedListBool = combinePair([1, 2, 3], true);
console.log(combinedListBool);
