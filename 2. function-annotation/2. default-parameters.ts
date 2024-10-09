// Set the default values for function parameters

function greet (person: string = 'Anonymous') {
  return `Hello ${person}`;
}

const res = greet('YX-elite');
console.log(res)