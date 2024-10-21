// Email as optional property

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  email?: string;
  location: string;
};

const printUser = (person: Person): string => {
  return `Name: ${person.firstName} ${person.lastName}, Age: ${person.age}, Email: ${person.email}, Location: ${person.location}`
}

const res = printUser({ firstName: 'YX', lastName: 'elite', age: 24, location: 'MYS' })
console.log(res)
