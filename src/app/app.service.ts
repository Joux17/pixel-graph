import { Injectable } from "@angular/core";

export interface ColorObject {
  color: string,
  label: string,
  value: number
}

export type Border = "left"|"right"|"top"|"bottom"

export const quantites = [
  {
      id: "NO_CONSOMMATION",
      color: "white",
      value: 0,
      label: "no alcohol"
  },
  {
      id: "SMALL_CONSOMMATION",
      color: "yellow",
      value: 1,
      label: "1 glass"
  },
  {
      id: "MEDIUM_CONSOMMATION",
      color: "orange",
      value: 2,
      label: "3 glasses"
  },
  {
      id: "BIG_CONSOMMATION",
      color: "red",
      value: 3,
      label: "5 glasses"
  },
  {
      id: "BLACKOUT",
      color: "black",
      value: 4,
      label: "black out"
  }
]

const NO_CONSOMMATION = "white"
const SMALL_CONSOMMATION = "yellow"
const MEDIUM_CONSOMMATION = "orange"
const BIG_CONSOMMATION = "red"
const BLACKOUT = "black"

let janvier = new Array(31);
let fevrier = new Array(29);
let mars = new Array(31);
let avril = new Array(30);
let mai = new Array(31);
let juin = new Array(30);
let juillet = new Array(31);
let aout = new Array(31);
let septembre = new Array(30);
let octobre = new Array(31);
let novembre = new Array(30);
let decembre = new Array(31);

@Injectable({
  providedIn: 'root',
})
export class AppService {
  year: (string | null)[][] = [janvier, fevrier, mars, avril, mai, juin, juillet, aout, septembre, octobre, novembre, decembre]
  colors = quantites;

  persist(calendar: (string|null)[][]) {
    localStorage.setItem('calendar', JSON.stringify(calendar));
  }

  persistDay(indiceMois: number, indiceJour: number, value: number): void {
    let consoAsString: string | null = localStorage.getItem('conso');
    let conso: { [key: string]: number } = {};

    if(consoAsString) {
      conso = JSON.parse(consoAsString);
    }

    conso[`${indiceMois}:${indiceJour}`] = value;
    localStorage.setItem('conso', JSON.stringify(conso));

  }

  getCalendar(): (string|null)[][] {
    let calendar = localStorage.getItem('calendar');

    if (calendar == null) {
      return this.year;
    } else {
      return JSON.parse(calendar);
    }
  }

  getConso(): (string|null)[][] {
    let calendar = localStorage.getItem('conso');

    if (calendar == null) {
      return this.year;
    } else {
      return JSON.parse(calendar);
    }
  }
}
