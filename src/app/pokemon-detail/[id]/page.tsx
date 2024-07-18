import { PokemonDetails } from '@/components/pokemon-details'
import { fetchPokemonDetails } from '@/services/pokemons'

interface PokemonDetailsPageProps {
  params: {
    id: string
  }
}

export default function PokemonDetailsPage({
  params: { id },
}: PokemonDetailsPageProps) {
  return <PokemonDetails id={+id} fetchPokemonDetails={fetchPokemonDetails} />
}
