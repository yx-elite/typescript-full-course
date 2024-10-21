// Properties annotation
class Person {
  name: string;
  age: number;

  constructor(name: string, age:number) {
    this.name = name;
    this.age = age;
  }
}
const person = new Person("yx-elite", 24);
console.log(person)
