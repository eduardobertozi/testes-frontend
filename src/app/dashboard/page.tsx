import { PokemonList } from '@/components/pokemon-list'
import { fetchPokemonList } from '@/services/pokemons'

function Dashboard() {
  return (
    <div className='grid place-items-center space-y-12 p-6'>
      <h1 className='text-3xl font-bold'>Dashboard</h1>

      <PokemonList fetchPokemonList={fetchPokemonList} />
    </div>
  )
}

export default Dashboard
