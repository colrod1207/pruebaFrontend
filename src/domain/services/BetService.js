import { Bet } from "../entities/Bet.js";

export class BetService {
  constructor(betRepository) {
    this.betRepository = betRepository;
  }

  placeBet({ raceId, horseName, amount, odds }) {
    const possibleWin = amount * odds;
    const bet = new Bet({ raceId, horseName, amount, possibleWin });
    return this.betRepository.saveBet(bet);
  }

  getAllBets() {
    return this.betRepository.getAllBets();
  }
}
