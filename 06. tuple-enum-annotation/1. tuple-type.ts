// Fixed tuple type
let myTuple: [number, string];
myTuple = [3, 'test'];
// myTuple = ['test', 3];    // Error
console.log(myTuple);

// Mixed tuple
const products: (number | string)[] = [3, 6, 'test'];
console.log(products);

// Tuple of string
const games: [string, string, string] = ["test1", "test2", "test3"];
console.log(games);