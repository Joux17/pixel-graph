export interface ColorObject {
  color: string,
  label: string,
  value: number
}

// Permet de définir quels côtés d'une case doit être tracés
export type BoxBorder = "left" | "right" | "top" | "bottom";

export interface Coordinates {
  x: number,
  y: number
}

// Type pour représenter les coordonnées sous forme "jour;mois"
type DailyCoordinates = `${number};${number}`;

// Décrit les coordonnées jour-mois et leurs valeurs
export interface DailyValue {
  [coordinates: DailyCoordinates]: number
}

// Décrit les données par année
export interface YearlyData {
  [year: string]: DailyValue
}
