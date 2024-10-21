// Define a person object
const person: {firstName: string; lastName: string; age: number} = {
  firstName: 'YX',
  lastName: 'elite',
  age: 24
}
// Access the properties
console.log(`Name: ${person.firstName} ${person.lastName}, Age: ${person.age}`)


// Using objects as function return value
function printUser(): {firstName: string; lastName: string; age: number} {
  return {
    firstName: 'YX',
    lastName: 'elite',
    age: 24
  }
}
const res = printUser();
console.log(`Name: ${res.firstName} ${res.lastName}, Age: ${res.age}`)


// using objects as function params
function printUserName(person: {firstName: string; lastName: string; age: number}) {
  console.log(`Name: ${person.firstName} ${person.lastName}, Age: ${person.age}`)
}
printUserName({
  firstName: 'YX',
  lastName: 'elite',
  age: 24
})