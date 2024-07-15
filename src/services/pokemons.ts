import { PokemonType } from '@/types/pokemon'

const BASE_URL = 'http://localhost:3001'

export async function fetchPokemonList(): Promise<PokemonType[]> {
  const response = await fetch('http://localhost:3001/pokemons')
  return await response.json()
}

export async function fetchPokemonDetails(id: number): Promise<PokemonType> {
  const response = await fetch(`${BASE_URL}/pokemons/${id}`)
  return await response.json()
}
