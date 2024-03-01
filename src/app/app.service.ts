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
    "color": "red",
    "range": ["3","4"]
  },
  "BLACKOUT": {
    "color": "black",
    "range": ["8","9","10"]
  }
}

const NO_CONSOMMATION = "white"
const SMALL_CONSOMMATION = "yellow"
const MEDIUM_CONSOMMATION = "orange"
const BIG_CONSOMMATION = "red"
const BLACKOUT = "black"

let janvier = [NO_CONSOMMATION,NO_CONSOMMATION,SMALL_CONSOMMATION,MEDIUM_CONSOMMATION,BLACKOUT,BIG_CONSOMMATION,NO_CONSOMMATION,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
let fevrier = [MEDIUM_CONSOMMATION,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
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
  colors = [NO_CONSOMMATION, SMALL_CONSOMMATION, MEDIUM_CONSOMMATION, BIG_CONSOMMATION, BLACKOUT]
}
