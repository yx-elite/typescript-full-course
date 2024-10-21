class Box<T> {
  private content: T;

  constructor(initialContent: T) {
    this.content = initialContent;
  }

  getContent(): T {
    return  this.content;
  }

  setContent(newContent: T): void {
    this.content = newContent;
  }
}

// Example usage 1
const stringBox = new Box<string>('Hello World');
console.log(stringBox.getContent());
stringBox.setContent('Hello New Content');
console.log(stringBox.getContent());

// Example usage 2
const numberBox = new Box<number>(3);
console.log(numberBox.getContent());
numberBox.setContent(6);
console.log(numberBox.getContent());