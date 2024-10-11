// Example 1
interface Car {
  brand: string;
  start(): void;
}
// Declaration merging
interface Car {
  model: string;
  stop(): void;
}

const myCar: Car = {
  brand: "Honda",
  model: "City",
  start() {
    console.log("Car started");
  },
  stop() {
    console.log("Car stopped");
  },
};


// Example 2
interface User {
  firstName: string;
  lastName: string;
  age: number;
}
// Declaration merging
interface User {
  printUserInfo(
    firstName: string,
    lastName: string,
    age: number
  ): string | number;
}

const yxElite: User = {
  firstName: "YX",
  lastName: "elite",
  age: 24,
  printUserInfo(firstName, lastName, age) {
    return `Name: (${firstName} ${lastName}) Age: (${age})`;
  },
};
console.log(yxElite.printUserInfo("YX", "elite", 24));