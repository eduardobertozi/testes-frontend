import { render } from '@testing-library/react'
import PokemonDetailsPage from '../../app/pokemon-detail/[id]/page'

describe('Testing Pokemon Details Page', () => {
  it('Should have a id on page', async () => {
    render(<PokemonDetailsPage params={{ id: '1' }} />)
  })
})
