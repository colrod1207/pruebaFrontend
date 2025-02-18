export class Bet {
  constructor({ raceId, horseName, amount, possibleWin }) {
    this.raceId = raceId;
    this.horseName = horseName;
    this.amount = amount;
    this.possibleWin = possibleWin;
  }
}
