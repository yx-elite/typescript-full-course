class Person {
  public readonly first: string;
  public readonly last: string;
  private age: number;

  constructor(first: string, last: string, age: number) {
    this.first = first;
    this.last = last;
    this.age = age;
  }
  // Can access within class but not outside
  public getAge(): string {
    return `Age: ${this.age}`
  }
}

let p1 = new Person('YX', 'elite', 24)
// console.log(p1.age)    // Error accessing private property
console.log(p1.getAge())