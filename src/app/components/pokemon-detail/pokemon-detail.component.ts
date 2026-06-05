import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';

interface PokemonDetail {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
    back_default: string;
    front_shiny?: string;
  };
  types: Array<{
    slot: number;
    type: { name: string; url: string };
  }>;
  stats: Array<{
    base_stat: number;
    stat: { name: string };
  }>;
  abilities: Array<{
    ability: { name: string };
    is_hidden: boolean;
  }>;
}

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  pokemon: PokemonDetail | null = null;
  loading: boolean = true;
  error: string = '';

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const pokemonId = params['id'];
      this.loadPokemonDetails(pokemonId);
    });
  }

  loadPokemonDetails(pokemonId: string | number): void {
    this.loading = true;
    this.error = '';
    this.pokemonService.getPokemonDetails(pokemonId).subscribe({
      next: (pokemon) => {
        this.pokemon = pokemon;
        this.loading = false;
      },
      error: (err) => {
        this.error = `Errore nel caricamento del Pokémon #${pokemonId}`;
        this.loading = false;
        console.error(err);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/explorer']);
  }

  getStat(statName: string): number {
    if (!this.pokemon) return 0;
    const stat = this.pokemon.stats.find((s) =>
      s.stat.name.toLowerCase().includes(statName.toLowerCase())
    );
    return stat ? stat.base_stat : 0;
  }

  getStatPercentage(value: number): number {
    return (value / 150) * 100; // Scala percentuale basata su max 150
  }
}
