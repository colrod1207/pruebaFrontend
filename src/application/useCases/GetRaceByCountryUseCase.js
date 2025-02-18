export class GetRacesByCountryUseCase {
  constructor(raceService) {
    this.raceService = raceService;
  }
  execute(country) {
    return this.raceService.getRacesByCountry(country);
  }
}
