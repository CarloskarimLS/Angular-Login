export interface Frase {
    value: string; // Contiene la frase
    id: string;
    doi: string; // Identificador la frase aleatoria
    title: string; // URL que contiene el ID y permite recuperar la frase
  }