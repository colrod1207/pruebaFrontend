import { Horse } from "./Horse";

export class Race{
  constructor({id, country, flag, name, number, time, type, distance, participants}){
    this.id = id;
    this.country = country;
    this.flag = flag;
    this.name = name;
    this.number = number;
    this.time = time;
    this.type = type;
    this.distance = distance;
    this.participantes = participants.map(
      (p) => new Horse({
        id:p.id,
        name: p.name,
        jockey: p.jockey,
        trainer: p.trainer,
        weight:p.weight,
        odds: p.odds,
        ml: p.ml,

      })
    );
  }
}
