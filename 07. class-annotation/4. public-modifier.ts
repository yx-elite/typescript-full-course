class Person {
  public readonly first: string;
  public readonly last: string;
  public age: number;

  constructor(first: string, last: string, age: number) {
    this.first = first;
    this.last = last;
    this.age = age;
  }
}

let p1 = new Person('YX', 'elite', 24)
console.log(p1.first)