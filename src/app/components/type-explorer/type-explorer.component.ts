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
  loading: boolean = true;
  error: string = '';
  typesToShow: number = 10;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    console.log('TypeExplorerComponent initialized');
    this.loadPokemonTypes();
  }

  loadPokemonTypes(): void {
    console.log('Loading Pokemon types...');
    this.loading = true;
    this.error = '';
    this.pokemonService.getPokemonTypes().subscribe({
      next: (response) => {
        console.log('Received response:', response);
        this.pokemonTypes = response.results.slice(0, this.typesToShow);
        this.loading = false;
        console.log('Types loaded successfully:', this.pokemonTypes);
      },
      error: (err) => {
        console.error('Error loading types:', err);
        this.error = 'Errore nel caricamento dei tipi di pokemon';
        this.loading = false;
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
    const parts = pokemonUrl.split('/');
    return parts[parts.length - 2];
  }
}
