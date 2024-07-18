import { render, screen } from '@testing-library/react'
import { PokemonList } from '.'
import { faker } from '@faker-js/faker'

const mockFetchListPokemonFn = vi.fn().mockImplementation(async () => {
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

describe('Testing PokemonList component', () => {
  it('should have a list with ten pokemons', async () => {
    render(<PokemonList fetchPokemonList={mockFetchListPokemonFn} />)

    const items = await screen.findAllByRole('listitem')

    expect(items).toHaveLength(2)
  })

  it('should have a pikachu on list', async () => {
    render(<PokemonList fetchPokemonList={mockFetchListPokemonFn} />)

    const pokemonsList = await mockFetchListPokemonFn()

    expect(pokemonsList).toHaveLength(2)
    expect(pokemonsList[0].name).toBe('Pikachu')

    const pikachu = await screen.findByText('Pikachu')

    expect(pikachu).toBeInTheDocument()
  })

  it('should have a link to pokemon page', async () => {
    render(<PokemonList fetchPokemonList={mockFetchListPokemonFn} />)

    const link = await screen.findAllByRole('link')

    expect(link).toHaveLength(2)
  })
})
