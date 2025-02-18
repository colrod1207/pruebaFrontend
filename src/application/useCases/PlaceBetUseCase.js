export class PlaceBetUseCase {
  constructor(betService) {
    this.betService = betService;
  }
  execute({ raceId, horseName, amount, odds }) {
    return this.betService.placeBet({ raceId, horseName, amount, odds });
  }
}
