// Example 1
interface Person {
  firstName: string;
  lastName: string;
  age: number;
  sayHello(): void;
}
function greet(person: Person) {
  console.log(`Hello, ${person.firstName} ${person.lastName}!`);
  person.sayHello();
}
const yxElite: Person = {
  firstName: 'YX',
  lastName: 'elite',
  age: 24,
  sayHello() {
    console.log(`Hello ${this.firstName}`)
  },
};
greet(yxElite)

// Example 2
interface Song {
  songName: string;
  singerName?: string;
  printSongInfo(songName: string, singerName: string): string;
}
const song1: Song = {
  songName: 'Over the Horizon',
  singerName: 'yx',
  printSongInfo(songName, singerName) {
    return `Song: ${songName} Singer: ${singerName}`;
  }
}
console.log(song1.printSongInfo('Over the Horizon', 'yx'));