interface MovieDetails {
  readonly name: string;
  ratings: number;
  printMovieInfo(name: string, price: number, ratings: number): string;
}

interface MovieGenre extends MovieDetails {
  genre: string;
}

const movie1: MovieGenre = {
  name: 'Star Wars',
  genre: 'Action',
  ratings: 9.1,
  printMovieInfo(name: string, price: number, ratings: number): string {
    return `Movie name: ${name}, Price: ${price}, Ratings: ${ratings}`
  }
}

const res = movie1.printMovieInfo('Star Wars', 100, 9);
console.log(res)