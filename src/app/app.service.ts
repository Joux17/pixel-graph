import { Injectable } from "@angular/core";

export const consommation = {
  "NO_CONSOMMATION": {
    "color": "green",
    "range": ["0"]
  },
  "SMALL_CONSOMMATION": {
    "color": "yellow",
    "range": ["1","2"]
  },
  "MEDIUM_CONSOMMATION": {
    "color": "orange",
    "range": ["3","4"]
  },
  "BIG_CONSOMMATION": {
    "color": "orangrede",
    "range": ["3","4"]
  },
  "BLACKOUT": {
    "color": "black",
    "range": ["8","9","10"]
  }
}

const NO_CONSOMMATION = ["0"]
const SMALL_CONSOMMATION = ["1","2"]
const MEDIUM_CONSOMMATION = ["3","4"]
const BIG_CONSOMMATION = ["5","6","7"]
const BLACKOUT = ["8","9","10"]

let janvier = ["0","0","1","0","2","6",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
let fevrier = ["5",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
let mars =    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
let avril =   [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
let mai =     [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
let juin =    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
let juillet = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
let aout =    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
let septembre=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
let octobre = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
let novembre =[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
let decembre =[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]

@Injectable({
  providedIn: 'root',
})
export class AppService {
  year: (string|null)[][] = [janvier,fevrier,mars,avril,mai,juin,juillet,aout,septembre,octobre,novembre,decembre]
}
