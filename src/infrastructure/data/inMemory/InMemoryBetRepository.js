import { BetRepository } from "../../../domain/repositories/BetRepository.js";

export class InMemoryBetRepository extends BetRepository {
  constructor() {
    super();
    this.loadBetsFromStorage(); // 🔹 Cargar apuestas desde localStorage al iniciar
  }

  // 🔹 Cargar apuestas guardadas en localStorage
  loadBetsFromStorage() {
    const storedBets = localStorage.getItem("bets");
    this.bets = storedBets ? JSON.parse(storedBets) : [];
  }

  // 🔹 Guardar una nueva apuesta en localStorage
  saveBet(bet) {
    this.bets.push(bet);
    localStorage.setItem("bets", JSON.stringify(this.bets)); // 🔹 Guardar en localStorage
    return bet;
  }

  // 🔹 Obtener todas las apuestas desde localStorage
  getAllBets() {
    return this.bets;
  }

  // 🔹 Eliminar una apuesta específica por índice
  removeBet(index) {
    this.bets.splice(index, 1);
    localStorage.setItem("bets", JSON.stringify(this.bets)); // 🔹 Actualizar localStorage
    return this.bets;
  }

  // 🔹 Limpiar todas las apuestas (opcional)
  clearBets() {
    this.bets = [];
    localStorage.removeItem("bets");
  }
}
