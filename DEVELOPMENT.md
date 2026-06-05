# 🛠️ Guida Tecnica - Esploratore Pokémon Angular

## Architettura dell'Applicazione

### Pattern Utilizzati

1. **Standalone Components**: Tutti i componenti sono creati come standalone per una gestione più semplice delle dipendenze
2. **Service-based HTTP**: Un servizio centralizzato gestisce tutte le richieste HTTP
3. **Routing-based Navigation**: Utilizzo di Angular Router per navigare tra le diverse viste
4. **Type-safe with TypeScript**: Interfacce TypeScript per garantire la tipizzazione dei dati

## File Principali

### `src/app/models/pokemon-type.model.ts`
Definisce le interfacce TypeScript per i dati dei Pokémon:
- `PokemonType`: Struttura base di un tipo
- `PokemonTypeListResponse`: Risposta dell'API per la lista dei tipi
- `PokemonTypeDetail`: Dettagli completi di un tipo
- `PokemonInType`: Struttura di un Pokémon in relazione a un tipo

### `src/app/services/pokemon.service.ts`
Servizio HTTP che gestisce:
- `getPokemonTypes()`: Recupera la lista di tutti i tipi
- `getPokemonTypeDetails(typeName)`: Recupera i dettagli di un tipo specifico
- `getPokemonDetails(pokemonId)`: Recupera i dettagli di un Pokémon specifico

Utilizzo dell'HttpClient di Angular con Observables di RxJS per gestire le richieste asincrone.

### `src/app/components/type-explorer/`

#### TypeScript Component
```typescript
export class TypeExplorerComponent implements OnInit {
  pokemonTypes: PokemonType[] = [];
  selectedType: PokemonTypeDetail | null = null;
  selectedTypeName: string = '';
  loading: boolean = false;
  error: string = '';
  typesToShow: number = 10;

  ngOnInit(): void {
    this.loadPokemonTypes();
  }

  loadPokemonTypes(): void { /* ... */ }
  selectType(typeName: string): void { /* ... */ }
  getPokemonId(pokemonUrl: string): string { /* ... */ }
}
```

**Funzionamenti principali:**
- Carica i tipi al momento dell'inizializzazione
- Permette di selezionare un tipo e carica i dettagli
- Estrae l'ID del Pokémon dall'URL dell'API
- Gestisce gli stati di caricamento e errore

#### Template HTML
- Sidebar sinistra con lista dei tipi
- Panel principale con dettagli del tipo selezionato
- Sezione relazioni di danno (doppio danno, mezzo danno, immuno)
- Lista dei Pokémon di quel tipo con link ai dettagli

#### Styling CSS
- Gradient background purpureo
- Layout a due colonne (responsive)
- Animazioni di transizione smooth
- Colori coerenti con il tema dell'app

### `src/app/components/pokemon-detail/`

#### TypeScript Component
```typescript
export class PokemonDetailComponent implements OnInit {
  pokemon: PokemonDetail | null = null;
  loading: boolean = true;
  error: string = '';

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const pokemonId = params['id'];
      this.loadPokemonDetails(pokemonId);
    });
  }

  loadPokemonDetails(pokemonId: string | number): void { /* ... */ }
  goBack(): void { /* ... */ }
  getStat(statName: string): number { /* ... */ }
  getStatPercentage(value: number): number { /* ... */ }
}
```

**Funzionamenti principali:**
- Carica i dettagli del Pokémon basati sull'ID del route
- Fornisce metodi helper per accedere e calcolare le statistiche
- Gestisce la navigazione indietro

#### Template HTML
- Immagine del Pokémon (sprite)
- Informazioni base (altezza, peso, ID)
- Tipi con colori tematici
- Lista delle abilità
- Grafico delle statistiche base

#### Styling CSS
- Card design con shadow
- Barre statistiche animate
- Colori tipo ufficiali (normal, fire, water, ecc.)
- Layout responsive

### `src/app/app.routes.ts`
Definisce le rotte dell'applicazione:
```typescript
export const routes: Routes = [
  { path: '', redirectTo: '/explorer', pathMatch: 'full' },
  { path: 'explorer', component: TypeExplorerComponent },
  { path: 'pokemon/:id', component: PokemonDetailComponent },
  { path: '**', redirectTo: '/explorer' },
];
```

### `src/app/app.config.ts`
Configurazione dell'applicazione con i provider:
- `provideRouter(routes)`: Abilita il routing
- `provideHttpClient()`: Abilita le richieste HTTP
- `provideBrowserGlobalErrorListeners()`: Logging degli errori

## Gestione dello Stato

L'applicazione utilizza component-level state gestito con proprietà di classe e Observable:

```typescript
pokemonTypes: PokemonType[] = [];           // Lista dei tipi
selectedType: PokemonTypeDetail | null = null; // Tipo selezionato
loading: boolean = false;                  // Flag di caricamento
error: string = '';                        // Messaggio di errore
```

## Gestione degli Errori

Ogni richiesta HTTP include un gestore degli errori:

```typescript
this.pokemonService.getPokemonTypes().subscribe({
  next: (response) => { /* Successo */ },
  error: (err) => {
    this.error = 'Messaggio di errore';
    console.error(err);
  }
});
```

## Responsive Design

L'app utilizza CSS Grid e Media Query per essere responsive:

```css
@media (max-width: 768px) {
  .main-layout {
    grid-template-columns: 1fr; /* Una sola colonna su mobile */
  }
}
```

## Performance

- **Lazy Loading**: Carica i componenti al momento della navigazione
- **OnPush Change Detection**: Potrebbe essere aggiunto per migliorare la performance
- **Limit Results**: Mostra solo i primi 10 tipi per evitare un carico troppo grande
- **Caching**: Le richieste all'API non hanno caching speciale, ma potrebbe essere implementato

## Possibili Miglioramenti Futuri

1. **State Management**: Aggiungere NgRx o Signals per una migliore gestione dello stato
2. **Caching**: Implementare un caching per le richieste HTTP frequenti
3. **Pagination**: Aggiungere pagination per mostrare tutti i tipi (non solo i primi 10)
4. **Search**: Aggiungere ricerca di Pokémon o tipi
5. **Filters**: Aggiungere filtri avanzati
6. **Unit Tests**: Aggiungere test unitari per service e componenti
7. **E2E Tests**: Aggiungere test end-to-end con Cypress o Playwright
8. **PWA**: Convertire in Progressive Web App per installazione offline
9. **Dark Mode**: Aggiungere tema scuro
10. **Comparazione**: Permettere di comparare due Pokémon

## Dipendenze Principali

- `@angular/common`: Utilità comuni di Angular
- `@angular/core`: Core di Angular
- `@angular/router`: Sistema di routing
- `@angular/common/http`: Client HTTP

## Comandi Disponibili

```bash
# Sviluppo
ng serve                           # Avvia server dev
ng serve --open                    # Avvia e apre nel browser
ng serve --port 3000              # Cambia porta

# Build
ng build                           # Build di sviluppo
ng build --configuration production # Build di produzione

# Testing
ng test                            # Esegui unit test
ng e2e                            # Esegui e2e test

# Linting
ng lint                            # Verifica il codice
```

## Variabili d'Ambiente

Non attualmente utilizzate, ma potrebbero essere aggiunte per:
- URL dell'API (per diverse versioni)
- Feature flags
- Configurazione di logging

## Debugging

### Browser DevTools
- Network tab: Vedi le richieste HTTP a PokéAPI
- Console: Vedi i log degli errori
- Angular DevTools: Inspeziona lo stato dell'app

### Angular CLI
```bash
ng serve --poll 2000    # Per sistemi file watching lenti
ng serve --ssl          # Per HTTPS
```

## Struttura di Cartelle Suggerita per l'Espansione

```
src/app/
├── components/
│   ├── type-explorer/
│   ├── pokemon-detail/
│   ├── pokemon-list/       # (futuro)
│   └── shared/             # Componenti condivisi
├── services/
│   ├── pokemon.service.ts
│   └── cache.service.ts    # (futuro)
├── models/
│   ├── pokemon-type.model.ts
│   └── user.model.ts       # (futuro)
├── guards/                 # Route guards (futuro)
├── interceptors/           # HTTP interceptors (futuro)
└── pipes/                  # Custom pipes (futuro)
```
