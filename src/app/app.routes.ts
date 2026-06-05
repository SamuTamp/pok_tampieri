import { Routes } from '@angular/router';
import { TypeExplorerComponent } from './components/type-explorer/type-explorer.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/explorer', pathMatch: 'full' },
  { path: 'explorer', component: TypeExplorerComponent },
  { path: 'pokemon/:id', component: PokemonDetailComponent },
  { path: '**', redirectTo: '/explorer' },
];
