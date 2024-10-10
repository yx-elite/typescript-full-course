class MyClass {
  private _myProperty: number = 0

  get myProperty(): number {
    return this._myProperty
  }

  set myProperty(value: number) {
    this._myProperty = value;
  }
}

const myInstance = new MyClass();
console.log(myInstance.myProperty);

myInstance.myProperty = 36;
console.log(myInstance.myProperty);