// src/infrastructure/data/inMemory/InMemoryRaceRepository.js
import { RaceRepository } from "../../../domain/repositories/RaceRepository.js";
import { Race } from "../../../domain/entities/Race.js";

export class InMemoryRaceRepository extends RaceRepository {
  constructor() {
    super();

    this.data = [
      {
        country: "Inglaterra",
        flag: "races-list__flag--uk",
        upcomingRaces: [
          new Race({
            id: 1,
            country: "Inglaterra",
            flag: "races-list__flag--uk",
            name: "Musselburgh R1",
            time: "6",
            number: "R1",
            type: "Pure Blood",
            distance: "6 Min",
            participants: [
              { id: 101, name: "Arctic Ambition", jockey: "John Doe", trainer: "Trainer A", weight: 168, odds: "12/1", ml: "BL" },
              { id: 102, name: "Goodtimes Badtimes", jockey: "Alex Smith", trainer: "Trainer B", weight: 165, odds: "8/1", ml: "BL" },
              { id: 103, name: "Swift Runner", jockey: "Emily Brown", trainer: "Trainer C", weight: 160, odds: "10/1", ml: "BL" }
            ]
          }),
          new Race({
            id: 2,
            country: "Inglaterra",
            flag: "races-list__flag--uk",
            name: "Musselburgh R2",
            time: "12",
            number: "R2",
            type: "Pure Blood",
            distance: "6 Min",
            participants: [
              { id: 104, name: "Low Mileage", jockey: "Chris Adams", trainer: "Trainer D", weight: 157, odds: "6/1", ml: "BL" },
              { id: 105, name: "Menteha Young", jockey: "Laura Johnson", trainer: "Trainer E", weight: 155, odds: "6/1", ml: "BL" },
              { id: 106, name: "Thunder Bolt", jockey: "Michael White", trainer: "Trainer F", weight: 154, odds: "5/1", ml: "BL" }
            ]
          })
        ]
      },
      {
        country: "España",
        flag: "races-list__flag--spain",
        upcomingRaces: [
          new Race({
            id: 3,
            country: "España",
            flag: "races-list__flag--spain",
            name: "Madrid Sprint",
            time: "724",
            number: "R1",
            type: "Thoroughbred",
            distance: "7 Furlongs",
            participants: [
              { id: 107, name: "Relámpago", jockey: "Carlos Ruiz", trainer: "Trainer G", weight: 165, odds: "9/2", ml: "BL" },
              { id: 108, name: "Tormenta", jockey: "Fernando López", trainer: "Trainer H", weight: 160, odds: "7/1", ml: "BL" },
              { id: 109, name: "Centella", jockey: "Ana Torres", trainer: "Trainer I", weight: 158, odds: "5/1", ml: "BL" }
            ]
          }),
          new Race({
            id: 4,
            country: "España",
            flag: "races-list__flag--spain",
            name: "Sevilla Derby",
            time: "739",
            number: "R2",
            type: "Thoroughbred",
            distance: "10 Furlongs",
            participants: [
              { id: 110, name: "Furia Roja", jockey: "Javier Gómez", trainer: "Trainer J", weight: 162, odds: "6/1", ml: "BL" },
              { id: 111, name: "Viento del Sur", jockey: "Luis Sánchez", trainer: "Trainer K", weight: 159, odds: "4/1", ml: "BL" },
              { id: 112, name: "Leyenda", jockey: "Marta Fernández", trainer: "Trainer L", weight: 161, odds: "5/2", ml: "BL" }
            ]
          })
        ]
      },
      {
        country: "Australia",
        flag: "races-list__flag--australia",
        upcomingRaces: [
          new Race({
            id: 5,
            country: "Australia",
            flag: "races-list__flag--australia",
            name: "Wagga R1",
            time: "674",
            number: "R1",
            type: "Pure Blood",
            distance: "8 Furlongs",
            participants: [
              { id: 201, name: "Lightning Strike", jockey: "Brad Walker", trainer: "Trainer M", weight: 170, odds: "9/1", ml: "BL" },
              { id: 202, name: "Boomerang", jockey: "Tom Harris", trainer: "Trainer N", weight: 167, odds: "6/1", ml: "BL" }
            ]
          }),
          new Race({
            id: 6,
            country: "Australia",
            flag: "races-list__flag--australia",
            name: "Scone R1",
            time: "689",
            number: "R1",
            type: "Pure Blood",
            distance: "8 Furlongs",
            participants: [
              { id: 203, name: "Down Under", jockey: "Matt Brown", trainer: "Trainer O", weight: 165, odds: "4/1", ml: "BL" },
              { id: 204, name: "Red Kangaroo", jockey: "James Wilson", trainer: "Trainer P", weight: 162, odds: "7/2", ml: "BL" }
            ]
          }),
          new Race({
            id: 7,
            country: "Australia",
            flag: "races-list__flag--australia",
            name: "Thangool R1",
            time: "696",
            number: "R1",
            type: "Pure Blood",
            distance: "8 Furlongs",
            participants: [
              { id: 205, name: "Koala Runner", jockey: "Harry Clarke", trainer: "Trainer Q", weight: 168, odds: "5/2", ml: "BL" }
            ]
          })
        ]
      },
      {
        country: "Argentina",
        flag: "races-list__flag--argentina",
        upcomingRaces: [
          new Race({
            id: 8,
            country: "Argentina",
            flag: "races-list__flag--argentina",
            name: "Palermo Sprint",
            time: "815",
            number: "R1",
            type: "Pure Blood",
            distance: "7 Furlongs",
            participants: [
              { id: 301, name: "Pampero", jockey: "Santiago Pérez", trainer: "Trainer R", weight: 166, odds: "6/1", ml: "BL" },
              { id: 302, name: "Tango Dancer", jockey: "Carlos Martínez", trainer: "Trainer S", weight: 163, odds: "5/1", ml: "BL" }
            ]
          }),
          new Race({
            id: 9,
            country: "Argentina",
            flag: "races-list__flag--argentina",
            name: "San Isidro Derby",
            time: "840",
            number: "R2",
            type: "Pure Blood",
            distance: "10 Furlongs",
            participants: [
              { id: 303, name: "Gaucho Power", jockey: "Ricardo Gómez", trainer: "Trainer T", weight: 160, odds: "4/1", ml: "BL" },
              { id: 304, name: "Buenos Tiempos", jockey: "Andrés López", trainer: "Trainer U", weight: 158, odds: "7/2", ml: "BL" }
            ]
          })
        ]
      }
    ];
    
    
  }

  getAllRacesByCountry(country) {
    const countryData = this.data.find(item => item.country === country);
    return countryData ? countryData.upcomingRaces : [];
  }

  getRaceById(raceId) {
    for (let countryData of this.data) {
      const race = countryData.upcomingRaces.find(r => r.id === raceId);
      if (race) return race;
    }
    return null;
  }
  
  getAllFlattenedRaces() {
  let allRaces = [];
  for (const countryData of this.data) {
    allRaces = allRaces.concat(countryData.upcomingRaces);
  }
  return allRaces;
  }

  getAllRaces(){
    return this.data;
  }
}
