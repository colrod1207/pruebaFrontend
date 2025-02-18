export class RaceService {
  constructor(raceRepository) {
    this.raceRepository = raceRepository;
  }

  getRacesByCountry(country) {
    return this.raceRepository.getAllRacesByCountry(country);
  }

  getRace(raceId) {
    return this.raceRepository.getRaceById(raceId);
  }
}
