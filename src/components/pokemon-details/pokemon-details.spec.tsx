import { render, screen } from '@testing-library/react'
import { PokemonDetails } from '.'
import { faker } from '@faker-js/faker'
import { act } from 'react'

const mockFetchPokemonDetailsFn = vi.fn().mockImplementation(async () => {
  return {
    id: 1,
    name: 'Pikachu',
    image: faker.image.urlPlaceholder(),
    type: 'Elétrico',
  }
})

describe('Test Pokemon Details Component', () => {
  it('Should have a id on page', async () => {
    await act(async () =>
      render(
        <PokemonDetails
          id={1}
          fetchPokemonDetails={mockFetchPokemonDetailsFn}
        />
      )
    )

    const title = await screen.findByRole('heading')

    expect(title.textContent).toBe('Pikachu')
  })
})
