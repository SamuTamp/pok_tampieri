#!/bin/bash

# Script per testare l'API PokéAPI da linea di comando
# Utile per verificare i dati disponibili

echo "🔍 Test PokéAPI - Esploratore Pokémon"
echo "===================================="
echo ""

# Test 1: Lista di tutti i tipi
echo "1️⃣ Recuperando lista dei tipi..."
echo "URL: https://pokeapi.co/api/v2/type"
curl -s https://pokeapi.co/api/v2/type | head -c 500
echo ""
echo ""

# Test 2: Dettagli di un tipo specifico (normal)
echo "2️⃣ Recuperando dettagli tipo 'normal'..."
echo "URL: https://pokeapi.co/api/v2/type/normal"
curl -s https://pokeapi.co/api/v2/type/normal | jq '.id, .name, .pokemon[0:3]'
echo ""

# Test 3: Dettagli di un Pokémon specifico (ID 1 - Bulbasaur)
echo "3️⃣ Recuperando Pokémon #1 (Bulbasaur)..."
echo "URL: https://pokeapi.co/api/v2/pokemon/1"
curl -s https://pokeapi.co/api/v2/pokemon/1 | jq '.id, .name, .types, .stats[0:3]'
echo ""

# Test 4: Conta i tipi disponibili
echo "4️⃣ Contando tipi disponibili..."
COUNT=$(curl -s https://pokeapi.co/api/v2/type | jq '.count')
echo "Total types: $COUNT"
echo ""

echo "✅ Test completati!"
echo ""
echo "Esempi di URL per testare manualmente:"
echo "- https://pokeapi.co/api/v2/type"
echo "- https://pokeapi.co/api/v2/type/fire"
echo "- https://pokeapi.co/api/v2/type/water"
echo "- https://pokeapi.co/api/v2/pokemon/25 (Pikachu)"
echo "- https://pokeapi.co/api/v2/pokemon/6 (Charizard)"
