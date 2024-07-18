import { render, screen } from '@testing-library/react'
import Dashboard from './page'

describe('Testing Dashboard', () => {
  it('should have a title on page', async () => {
    render(<Dashboard />)

    const title = await screen.findByRole('heading')

    expect(title).toHaveTextContent('Dashboard')
  })
})
