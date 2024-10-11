// Example 1
interface Computer {
  name: string;
  ram: number;
  hdd: number;
}
const computerExample: Computer = {
  name: 'i7',
  ram: 8,
  hdd: 100,
};
console.log(computerExample.name);
console.log(computerExample.ram);
console.log(computerExample.hdd);

// Example 2
interface Movie {
  readonly name: string;    // Readonly Property
  ratings: number;
  genre?: string;           // Optional Property
}
const movie1: Movie = {
  name: 'Star Wars',
  ratings: 9.1,
};
console.log(movie1);