import { Injectable } from "@angular/core";

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

  persistDay(indiceMois: number, indiceJour: number, value: number): void {
    let consoAsString: string | null = localStorage.getItem('conso');
    let conso: { [key: string]: number } = {};

    if(consoAsString) {
      conso = JSON.parse(consoAsString);
    }

    conso[`${indiceMois};${indiceJour}`] = value;
    localStorage.setItem('conso', JSON.stringify(conso));

  }

  getConso(): any {
    let conso : string = localStorage.getItem('conso') ?? '';

    return JSON.parse(conso);

  }
}
