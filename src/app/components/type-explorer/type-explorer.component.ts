import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonType, PokemonTypeDetail } from '../../models/pokemon-type.model';

@Component({
  selector: 'app-type-explorer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './type-explorer.component.html',
  styleUrls: ['./type-explorer.component.css']
})
export class TypeExplorerComponent implements OnInit {
  pokemonTypes: PokemonType[] = [];
  selectedType: PokemonTypeDetail | null = null;
  selectedTypeName: string = '';
  loading: boolean = false;
  error: string = '';
  typesToShow: number = 10; // Mostrerà i primi 10 tipi

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.loadPokemonTypes();
  }

  loadPokemonTypes(): void {
    this.loading = true;
    this.error = '';
    this.pokemonService.getPokemonTypes().subscribe({
      next: (response) => {
        // Mostra solo i primi N tipi
        this.pokemonTypes = response.results.slice(0, this.typesToShow);
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Errore nel caricamento dei tipi di pokemon';
        this.loading = false;
        console.error(err);
      }
    });
  }

  selectType(typeName: string): void {
    this.loading = true;
    this.error = '';
    this.selectedTypeName = typeName;
    this.pokemonService.getPokemonTypeDetails(typeName).subscribe({
      next: (typeDetails) => {
        this.selectedType = typeDetails;
        this.loading = false;
      },
      error: (err) => {
        this.error = `Errore nel caricamento dei dettagli del tipo ${typeName}`;
        this.loading = false;
        console.error(err);
      }
    });
  }

  getPokemonId(pokemonUrl: string): string {
    // Estrae l'ID del pokemon dall'URL
    const parts = pokemonUrl.split('/');
    return parts[parts.length - 2];
  }
}
