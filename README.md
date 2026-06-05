# 🔍 Esploratore Pokémon Angular

Un'applicazione Angular moderna per esplorare i Pokémon per tipo utilizzando l'API PokéAPI.

## 🎮 Funzionalità

- **Esplorazione per Tipo**: Visualizza e seleziona i tipi di Pokémon disponibili
- **Lista Pokémon**: Mostra tutti i Pokémon di un tipo selezionato
- **Dettagli Pokémon**: Visualizza informazioni dettagliate di ogni Pokémon
- **Relazioni di Danno**: Mostra che tipi sono efficaci/inefficaci contro ogni tipo
- **Statistiche**: Visualizza tutte le statistiche base di un Pokémon

## 📦 Tecnologie Utilizzate

- **Angular 18+** - Framework frontend
- **Standalone Components** - Componenti Angular standalone
- **HttpClient** - Per le richieste HTTP verso PokéAPI
- **Angular Routing** - Per la navigazione tra le pagine
- **TypeScript** - Per la tipizzazione
- **CSS3** - Per lo styling

## 🗂️ Struttura del Progetto

```
src/
├── app/
│   ├── components/
│   │   ├── type-explorer/           # Componente principale
│   │   │   ├── type-explorer.component.ts
│   │   │   ├── type-explorer.component.html
│   │   │   └── type-explorer.component.css
│   │   └── pokemon-detail/          # Dettagli del Pokémon
│   │       ├── pokemon-detail.component.ts
│   │       ├── pokemon-detail.component.html
│   │       └── pokemon-detail.component.css
│   ├── services/
│   │   └── pokemon.service.ts       # Servizio HTTP per PokéAPI
│   ├── models/
│   │   └── pokemon-type.model.ts    # Modelli di dati TypeScript
│   ├── app.routes.ts                # Configurazione routing
│   ├── app.config.ts                # Configurazione applicazione
│   ├── app.ts                       # Componente principale
│   └── app.html                     # Template principale
├── styles.css                        # Stili globali
└── main.ts                          # Entry point
```

## 🚀 Come Avviare

### Prerequisiti
- Node.js (v18+)
- npm (v9+)
- Angular CLI

### Installazione

```bash
# Clonare il repository
git clone <repository-url>
cd pok_tampieri

# Installare le dipendenze (se non già installate)
npm install
```

### Sviluppo

```bash
# Avviare il server di sviluppo
ng serve

# Navigare su http://localhost:4200/
```

### Build di Produzione

```bash
# Compilare per la produzione
ng build --configuration production
```

## 📡 API Utilizzate

L'applicazione utilizza [PokéAPI](https://pokeapi.co/) per ottenere i dati:

- **GET /type** - Lista di tutti i tipi
- **GET /type/{name}** - Dettagli di un tipo specifico
- **GET /pokemon/{id}** - Dettagli di un Pokémon

Esempi:
- https://pokeapi.co/api/v2/type - Tutti i tipi
- https://pokeapi.co/api/v2/type/normal - Tipo Normal
- https://pokeapi.co/api/v2/pokemon/28 - Pokémon ID 28 (Sandslash)

## 🎨 Componenti Principali

### TypeExplorerComponent
- Visualizza i tipi di Pokémon disponibili (primi 10)
- Mostra la lista di Pokémon di un tipo selezionato
- Visualizza le relazioni di danno del tipo
- Permette di navigare ai dettagli di un Pokémon

### PokemonDetailComponent
- Visualizza l'immagine del Pokémon
- Mostra informazioni base (altura, peso, ID)
- Lista i tipi del Pokémon con colori tematici
- Visualizza le abilità (incluse quelle nascoste)
- Mostra le statistiche base in forma di grafico

## 📊 Modelli di Dati TypeScript

### PokemonType
```typescript
export interface PokemonType {
  name: string;
  url: string;
}
```

### PokemonTypeDetail
```typescript
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
  pokemon: PokemonInType[];
}
```

### PokemonInType
```typescript
export interface PokemonInType {
  pokemon: { name: string; url: string };
  slot: number;
}
```

## 🔄 Flusso dell'Applicazione

1. **Caricamento Iniziale**: L'app carica i primi 10 tipi di Pokémon
2. **Selezione Tipo**: L'utente clicca su un tipo
3. **Caricamento Dettagli**: L'app recupera i dettagli del tipo e i Pokémon
4. **Visualizzazione**: I dati vengono mostrati nella sezione dei dettagli
5. **Navigazione Pokémon**: L'utente può cliccare su un Pokémon per vederne i dettagli
6. **Dettagli Pokémon**: Una nuova pagina mostra le informazioni complete del Pokémon

## 🎯 Routing

- `/` → Reindirizza a `/explorer`
- `/explorer` → Pagina principale con l'esploratore
- `/pokemon/:id` → Pagina di dettaglio del Pokémon con ID dinamico
- `**` → Reindirizza a `/explorer` (catch-all route)

## 💡 Funzionalità Aggiuntive

- **Responsive Design**: L'app funziona su desktop, tablet e mobile
- **Caricamento Asincrono**: Gestione elegante del caricamento e degli errori
- **Animazioni**: Transizioni smooth tra le sezioni
- **Colori Tematici**: I tipi di Pokémon hanno colori ufficiali
- **Scroll Styling**: Scrollbar personalizzata

## 🐛 Risoluzione dei Problemi

Se incontri problemi:

1. **Pulisci la cache e riavvia**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ng serve
   ```

2. **Verifica la connessione a Internet** - L'app richiede l'accesso a PokéAPI

3. **Controlla la console del browser** - Vedi i dettagli degli errori con F12

## 📝 Note Importanti

- L'app mostra i primi 10 tipi di Pokémon per scopi di performance
- Le immagini dei Pokémon sono caricate dall'API ufficiale di PokéAPI
- Le statistiche mostrate sono le statistiche base del Pokémon
- I colori dei tipi seguono lo schema ufficiale di Pokémon

## 🔗 Link Utili

- [Documentazione Angular](https://angular.io/docs)
- [PokéAPI Documentation](https://pokeapi.co/)
- [GitHub Repository PokéAPI](https://github.com/PokeAPI/pokeapi)

## 👨‍💻 Sviluppatore

Creato con Angular 18+ e PokéAPI - Giugno 2026
