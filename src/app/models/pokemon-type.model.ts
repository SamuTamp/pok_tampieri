// Modello per un tipo di Pokemon nella lista
export interface PokemonType {
  name: string;
  url: string;
}

// Modello per la risposta della lista dei tipi
export interface PokemonTypeListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonType[];
}

// Modello per la risposta dettagliata di un tipo
export interface PokemonTypeDetail {
  id: number;
  name: string;
  damage_relations: {
    half_damage_from: { name: string; url: string }[];
    half_damage_to: { name: string; url: string }[];
    no_damage_from: { name: string; url: string }[];
    no_damage_to: { name: string; url: string }[];
    double_damage_from: { name: string; url: string }[];
    double_damage_to: { name: string; url: string }[];
  };
  pokemon: {
    pokemon: { name: string; url: string };
    slot: number;
  }[];
}

// Modello per un Pokemon nella lista di un tipo
export interface PokemonInType {
  pokemon: {
    name: string;
    url: string;
  };
  slot: number;
}
