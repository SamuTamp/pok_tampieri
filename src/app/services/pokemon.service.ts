import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import {
  PokemonTypeListResponse,
  PokemonTypeDetail,
} from '../models/pokemon-type.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private readonly apiUrl = '/api/v2';

  constructor(private http: HttpClient) {}

  // Ottiene la lista di tutti i tipi di Pokemon
  getPokemonTypes(): Observable<PokemonTypeListResponse> {
    console.log('Fetching Pokemon types from', this.apiUrl + '/type');
    return this.http.get<PokemonTypeListResponse>(`${this.apiUrl}/type`).pipe(
      tap(response => console.log('Success: Received types', response))
    );
  }

  // Ottiene i dettagli di un tipo specifico usando il nome
  getPokemonTypeDetails(typeName: string): Observable<PokemonTypeDetail> {
    console.log('Fetching details for type:', typeName);
    return this.http.get<PokemonTypeDetail>(
      `${this.apiUrl}/type/${typeName}`
    ).pipe(
      tap(response => console.log('Success: Received type details', response))
    );
  }

  // Ottiene i dettagli di un Pokemon usando l'ID
  getPokemonDetails(pokemonId: number | string): Observable<any> {
    console.log('Fetching Pokemon details for ID:', pokemonId);
    return this.http.get<any>(`${this.apiUrl}/pokemon/${pokemonId}`).pipe(
      tap(response => console.log('Success: Received pokemon details', response))
    );
  }
}
