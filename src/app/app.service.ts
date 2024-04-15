import { Injectable } from "@angular/core";
import { ColorObject } from "./app.types";

export const quantites: ColorObject[] = [
  { color: 'white', label: 'no alcohol', value: 0 },
  { color: 'yellow', label: '1 glass', value: 1 },
  { color: 'orange', label: '3 glasses', value: 2 },
  { color: 'red', label: '5 glasses', value: 3 },
  { color: 'black', label: 'blackout', value: 4 },
];

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
  quantites = quantites;

  persistDay(indiceMois: number, indiceJour: number, value: number): void {
    let consoAsString: string | null = localStorage.getItem('conso');
    let conso: { [key: string]: number } = {};

    if (consoAsString) {
      conso = JSON.parse(consoAsString);
    }

    conso[`${indiceMois};${indiceJour}`] = value;
    localStorage.setItem('conso', JSON.stringify(conso));

  }

  getConso(): { [key: string]: any } {
    let conso: string | null = localStorage.getItem('conso') ?? null;

    if (conso === null) {
      return {};
    } else {
      return JSON.parse(conso);
    }

  }
}
