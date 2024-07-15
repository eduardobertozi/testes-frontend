import { render, screen } from '@testing-library/react'
import PokemonDetailsPage from './[id]/page'

describe('Testing Pokemon Details Page', () => {
  it('Should have a id on page', async () => {
    render(<PokemonDetailsPage params={{ id: '1' }} />)

    const title = await screen.findByRole('heading')

    expect(title.textContent).toBe('Pikachu')
  })
})
