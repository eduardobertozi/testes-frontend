import { faker } from '@faker-js/faker'
import { render, screen } from '@testing-library/react'
import Dashboard from './page'
import { fetchPokemonList } from '@/services/pokemons'

const mockFetchListPokemonFn = vi
  .fn(fetchPokemonList)
  .mockImplementation(async () => {
    return [
      {
        id: 1,
        name: 'Pikachu',
        image: faker.image.urlPlaceholder(),
        type: 'Elétrico',
      },
      {
        id: 2,
        name: 'Charmander',
        image: faker.image.urlPlaceholder(),
        type: 'Fogo',
      },
    ]
  })

describe('Testing Dashboard', () => {
  it('should have a title on page', async () => {
    render(<Dashboard />)

    const title = await screen.findByRole('heading')

    expect(title).toHaveTextContent('Dashboard')
  })

  it('should have a list with ten pokemons', async () => {
    render(<Dashboard />)

    const items = await screen.findAllByRole('listitem')

    expect(items).toHaveLength(10)
  })

  it('should have a pikachu on list', async () => {
    render(<Dashboard />)

    const pokemonsList = await mockFetchListPokemonFn()

    expect(pokemonsList).toHaveLength(2)
    expect(pokemonsList[0].name).toBe('Pikachu')

    const pikachu = await screen.findByText('Pikachu')

    expect(pikachu).toBeInTheDocument()
  })
})
