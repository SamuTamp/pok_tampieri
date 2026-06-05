# 🚀 Quick Start Guide - Esploratore Pokémon

## ⚡ Avvio Rapido

L'applicazione è **già in esecuzione** su: **http://localhost:4200/**

Apri il browser e accedi per iniziare a esplorare!

## 🎮 Come Usare l'Applicazione

### Step 1: Seleziona un Tipo
1. Apri http://localhost:4200/
2. Vedrai una lista di tipi di Pokémon a sinistra
3. Clicca su un tipo (es: **Normal**, **Fire**, **Water**)

### Step 2: Visualizza i Pokémon
4. Nel panel di destra vedrai:
   - Nome del tipo selezionato
   - Relazioni di danno (doppio danno, mezzo danno, immune)
   - Lista dei Pokémon di quel tipo

### Step 3: Dettagli del Pokémon
5. Clicca su qualunque Pokémon della lista
6. Vedrai una pagina con:
   - Immagine sprite del Pokémon
   - ID, altura, peso
   - Tipi con colori ufficiali
   - Abilità (incluse nascoste)
   - Statistiche base in forma di grafico

### Step 4: Torna Indietro
7. Clicca il bottone "← Torna alla lista" per tornare all'esplorazione

## 📂 Dove Trovare le Informazioni

### Documentazione
- **README.md** - Guida completa e overview progetto
- **DEVELOPMENT.md** - Guida tecnica per sviluppatori
- **CHECKLIST.md** - Lista completa delle feature implementate
- **test-api.sh** - Script per testare l'API da terminal

### Codice Sorgente
- **src/app/components/** - I componenti della UI
  - `type-explorer/` - Pagina principale
  - `pokemon-detail/` - Dettagli Pokémon
  
- **src/app/services/** - I servizi
  - `pokemon.service.ts` - Comunicazione con API
  
- **src/app/models/** - Le interfacce TypeScript
  - `pokemon-type.model.ts` - Modelli dati

## 🔧 Comandi Utili

```bash
# Se il server non è in esecuzione, avvialo:
cd /workspaces/pok_tampieri
ng serve

# Build per produzione:
ng build --configuration production

# Eseguire i test (quando implementati):
ng test
```

## 🌍 API Utilizzate

L'applicazione recupera i dati da **PokéAPI** (https://pokeapi.co/):

```
GET https://pokeapi.co/api/v2/type
GET https://pokeapi.co/api/v2/type/{name}
GET https://pokeapi.co/api/v2/pokemon/{id}
```

Esempi di URL da testare nel browser:
- https://pokeapi.co/api/v2/type - Tutti i tipi
- https://pokeapi.co/api/v2/type/normal - Tipo Normal
- https://pokeapi.co/api/v2/pokemon/25 - Pikachu

## 🐛 Risoluzione Problemi

### "La pagina non si carica"
- Verifica che il server sia in esecuzione
- Apri http://localhost:4200 nel browser
- Controlla la console del browser (F12) per errori

### "Le immagini non si vedono"
- Verifica la connessione a Internet
- L'app ha bisogno di accedere a PokéAPI
- Controlla il Network tab (F12) per richieste fallite

### "Il server non parte"
```bash
# Pulisci cache e reinstalla
rm -rf node_modules package-lock.json
npm install
ng serve
```

## 📱 Device Support

L'app funziona perfettamente su:
- 🖥️ Desktop (Chrome, Firefox, Safari, Edge)
- 📱 Tablet (iPad, Android tablets)
- 📱 Mobile (iPhone, Android phones)

**Test su mobile:**
Premi `F12` nel browser → Clicca "Toggle device toolbar" → Seleziona un device

## 🎨 Caratteristiche UI

- **Responsive Design** - Si adatta a qualsiasi dimensione schermo
- **Animazioni Smooth** - Transizioni piacevoli tra le sezioni
- **Colori Tematici** - Ogni tipo ha un colore ufficiale
- **Dark & Light** - Theme di default (purpureo)
- **Icone Emoji** - Per una migliore visual experience

## 🌟 Tipi Disponibili (primi 10)

1. Normal (Normale)
2. Fighting (Lotta)
3. Flying (Volante)
4. Poison (Veleno)
5. Ground (Terra)
6. Rock (Roccia)
7. Bug (Coleottero)
8. Ghost (Spettro)
9. Steel (Acciaio)
10. Fire (Fuoco)

Nota: Puoi scorrere per vederne altri se cambierai il valore di `typesToShow` nel codice.

## 🚀 Prossimi Passi Consigliati

1. **Esplora i tipi** - Guarda come cambiano i Pokémon per ogni tipo
2. **Seleziona un Pokémon** - Vedi tutte le sue informazioni
3. **Studia il codice** - Vedi come funziona Angular con le API
4. **Modifica il codice** - Aggiungi nuove feature!

## 💡 Suggerimenti per l'Espansione

Vuoi aggiungere funzionalità?

- Ricerca di Pokémon per nome
- Comparazione tra due Pokémon
- Favoritazioni
- Filtri avanzati
- Dark mode
- PWA features

Vedi **DEVELOPMENT.md** per più dettagli architetturali!

## 📞 Support

Se hai domande su:
- **Angular** → Vedi https://angular.io/docs
- **PokéAPI** → Vedi https://pokeapi.co/
- **Il progetto** → Leggi DEVELOPMENT.md

---

**Buon divertimento con l'Esploratore Pokémon! 🎮**
