class Player {

  constructor(
    public first: string,
    public last: string,
    protected _score: number
  ) {
  }

  // Access within the class
  get score(): number {
    return this._score;
  }
}

class SuperPlayer extends Player {
  public isAdmin: boolean = true;

  // Can access in extended class
  maxScore(): void {
    this._score = 99999;
  }
}


// Example usage
const player1 = new Player("John", "Doe", 100);
console.log(`${player1.first} ${player1.last}'s score: ${player1.score}`);

// Instantiate the SuperPlayer
const superPlayer1 = new SuperPlayer("Jane", "Smith", 100);
console.log(`${superPlayer1.first} ${superPlayer1.last}'s score: ${superPlayer1.score}`);

// Set max score using the SuperPlayer class
superPlayer1.maxScore();
console.log(`${superPlayer1.first} ${superPlayer1.last}'s new score: ${superPlayer1.score}`);
