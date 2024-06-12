import { Injectable, inject } from "@angular/core";
import { ColorObject, DailyValue, Metrics, YearlyData } from "./app.types";
import { FirebaseService } from "./utils/firebase/firebase.utils";

@Injectable({
  providedIn: 'root',
})
export class AppService {

  firebaseService = inject(FirebaseService);

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
    const consoYearAsString: string | null = localStorage.getItem('consoYear');

    let conso: DailyValue = {};
    let consoYear: YearlyData = {};

    if (consoAsString) {
      conso = JSON.parse(consoAsString) || {};
    }

    if (consoYearAsString) {
      consoYear = JSON.parse(consoYearAsString);

    }

    // La clé sous laquelle est stockée la valeur de conso est de la forme 0;0
    conso[`${indiceMois};${indiceJour}`] = value;

    // TODO TFX : pas très fan de cette partie là
    if (!consoYear[year]) {
      consoYear[year] = {};
    }

    consoYear[year][`${indiceMois};${indiceJour}`] = value;
    //

    localStorage.setItem('conso', JSON.stringify(conso));
    localStorage.setItem('consoYear', JSON.stringify(consoYear));

    const metricsToSave: Metrics = {
      year: 2024,
      userId: "joux",
      dailyMetrics: [
        { day: indiceJour, month: indiceMois, value: value }
      ]
    };

    this.firebaseService.updateMetrics(metricsToSave).subscribe((response) => {
      console.log(response);
    });

  }

  getConso(): DailyValue {
    const conso: string | null = localStorage.getItem('conso') ?? null;

    if (conso === null) {
      return {};
    } else {
      return JSON.parse(conso);
    }

  }

  getConsoYear(year: number): DailyValue {
    const conso: string | null = localStorage.getItem('consoYear') ?? null;

    if (conso === null) {
      return {};
    } else {
      const data = JSON.parse(conso);
      return data[year] ?? {};
    }

  }

}
