// Class fields
class Person1 {
  name: string;
  age: number;
  location: string = 'MYS';

  constructor(name: string, age:number) {
    this.name = name;
    this.age = age;
  }
}
const person1 = new Person1("yx-elite", 24);
console.log(person1)
