// Email as read only property

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  readonly email: string;
  location: string;
};

const person: Person = {
  firstName: "YX",
  lastName: "elite",
  age: 24,
  email: 'yxelite@test.com',
  location: 'MYS',
}

// person.email = 'readonly@test.com'    // Error

console.log(`Name: ${person.firstName} ${person.lastName}, Age: ${person.age}, Email: ${person.email}, Location: ${person.location}`)