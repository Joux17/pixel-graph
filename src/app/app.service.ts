import { Injectable } from "@angular/core";

export const consommation = {
  "NO_CONSOMMATION": {
    "color": "green",
    "range": ["0"]
  },
  "SMALL_CONSOMMATION": {
    "color": "yellow",
    "range": ["1", "2"]
  },
  "MEDIUM_CONSOMMATION": {
    "color": "orange",
    "range": ["3", "4"]
  },
  "BIG_CONSOMMATION": {
    "color": "red",
    "range": ["3", "4"]
  },
  "BLACKOUT": {
    "color": "black",
    "range": ["8", "9", "10"]
  }
}

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
  colors = [NO_CONSOMMATION, SMALL_CONSOMMATION, MEDIUM_CONSOMMATION, BIG_CONSOMMATION, BLACKOUT]

  persist(calendar: (string|null)[][]) {
    localStorage.setItem('calendar', JSON.stringify(calendar));
  }

  getCalendar(): (string|null)[][] {
    let calendar = localStorage.getItem('calendar');

    if (calendar == null) {
      return this.year;
    } else {
      return JSON.parse(calendar);
    }
  }
}
