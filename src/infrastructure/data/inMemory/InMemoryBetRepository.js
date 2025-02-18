import { BetRepository } from "../../../domain/repositories/BetRepository.js";

export class InMemoryBetRepository extends BetRepository {
  constructor() {
    super();
    this.loadBetsFromStorage(); 
  }

  loadBetsFromStorage() {
    const storedBets = localStorage.getItem("bets");
    this.bets = storedBets ? JSON.parse(storedBets) : [];
  }

  saveBet(bet) {
    this.bets.push(bet);
    localStorage.setItem("bets", JSON.stringify(this.bets)); 
    return bet;
  }

  getAllBets() {
    return this.bets;
  }

  removeBet(index) {
    this.bets.splice(index, 1);
    localStorage.setItem("bets", JSON.stringify(this.bets)); 
    return this.bets;
  }

  clearBets() {
    this.bets = [];
    localStorage.removeItem("bets");
  }
}
