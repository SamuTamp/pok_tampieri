import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  PokemonTypeListResponse,
  PokemonTypeDetail,
} from '../models/pokemon-type.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private readonly apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  // Ottiene la lista di tutti i tipi di Pokemon
  getPokemonTypes(): Observable<PokemonTypeListResponse> {
    return this.http.get<PokemonTypeListResponse>(`${this.apiUrl}/type`);
  }

  // Ottiene i dettagli di un tipo specifico usando il nome
  getPokemonTypeDetails(typeName: string): Observable<PokemonTypeDetail> {
    return this.http.get<PokemonTypeDetail>(
      `${this.apiUrl}/type/${typeName}`
    );
  }

  // Ottiene i dettagli di un Pokemon usando l'ID
  getPokemonDetails(pokemonId: number | string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/pokemon/${pokemonId}`);
  }
}
