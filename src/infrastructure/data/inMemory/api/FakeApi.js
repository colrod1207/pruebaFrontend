// src/infrastructure/api/FakeApi.js
import { InMemoryRaceRepository } from "../InMemoryRaceRepository";
import { InMemoryBetRepository } from "../InMemoryBetRepository";

export class FakeApi {
  constructor() {
    this.raceRepository = new InMemoryRaceRepository();
    this.betRepository = new InMemoryBetRepository();
  }

  getAllRaces() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.raceRepository.getAllRaces());
      }, 500); 
    });
  }

  getRacesByCountry(country) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const races = this.raceRepository.getAllRacesByCountry(country);
        resolve(races);
      }, 500); 
    });
  }

  getRaceById(raceId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const race = this.raceRepository.getRaceById(raceId);
        resolve(race);
      }, 500);
    });
  }

  getAllBets() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const bets = this.betRepository.getAllBets();
        resolve(bets);
      }, 500);
    });
  }
  
  placeBet(betData) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const bet = this.betRepository.saveBet(betData);
        resolve(bet);
      }, 500);
    });
  }
  

  getNext6Races() {
    return new Promise((resolve) => {
      setTimeout(() => {
        let allRaces = [];
        for (const countryData of this.raceRepository.data) {
          allRaces = allRaces.concat(countryData.upcomingRaces);
        }

        allRaces.sort((a, b) => Number(a.time) - Number(b.time));

        const next6 = allRaces.slice(0, 6);

        resolve(next6);
      }, 500);
    });
  }

  
}
