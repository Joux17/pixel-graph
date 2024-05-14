import { Injectable } from "@angular/core";
import { ColorObject, DailyValue } from "./app.types";

@Injectable({
  providedIn: 'root',
})
export class AppService {

  quantites: ColorObject[] = [
    { color: 'white', label: 'no alcohol', value: 0 },
    { color: 'yellow', label: '1 glass', value: 1 },
    { color: 'orange', label: '2 glasses', value: 2 },
    { color: 'red', label: '3 glasses', value: 3 },
    { color: 'brown', label: '5 glasses', value: 4 },
    { color: 'black', label: 'blackout', value: 5 },
  ];

  persistDay(year: number, indiceMois: number, indiceJour: number, value: number): void {
    const consoAsString: string | null = localStorage.getItem('conso');

    let conso: { [key: string]: number } = {};

    if (consoAsString) {
      conso = JSON.parse(consoAsString);
    }

    // La clé sous laquelle est stockée la valeur de conso est de la forme 0;0
    conso[`${indiceMois};${indiceJour}`] = value;

    localStorage.setItem('conso', JSON.stringify(conso));

  }

  getConso(): DailyValue {
    const conso: string | null = localStorage.getItem('conso') ?? null;

    if (conso === null) {
      return {};
    } else {
      return JSON.parse(conso);
    }

  }

}
