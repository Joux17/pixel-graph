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
