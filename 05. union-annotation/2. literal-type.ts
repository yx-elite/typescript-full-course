let color: 'red' | 'blue' | 'green';
color = 'green';
// color = 'teal'    // Error
console.log(color)

let isTrue: true | false
isTrue = true;
// isTrue = 'yes'    // Error
console.log(isTrue);

let number = 1 | 2 | 3;
number = 1;
console.log(number);

let password: 'secretpassword' = 'secretpassword'
// password = '12345678'    // Error
console.log(password)