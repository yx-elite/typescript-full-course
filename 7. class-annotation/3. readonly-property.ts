// Read only properties
class Person2 {
  readonly name: string;
  readonly age: number;
  location: string = 'MYS';

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
const person2 = new Person2("yx-elite", 24);
console.log(person2.age);
// person2.age = 20;    // ERROR
