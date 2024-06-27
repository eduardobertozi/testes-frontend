import { render, screen } from '@testing-library/react'
import Dashboard from '.'

describe('Testing Dashboard', () => {
  it('Should have two links', async () => {
    render(<Dashboard />)

    const links = await screen.findAllByRole('link')

    expect(links).toHaveLength(2)
  })

  it('should have a link were navigate to /login', async () => {
    render(<Dashboard />)

    const link = await screen.findByRole('link', { name: 'Login' })

    expect(link).toHaveAttribute('href', '/login')
  })

  it('should have a link were navigate to /signup', async () => {
    render(<Dashboard />)

    const link = await screen.findByRole('link', { name: 'Sign Up' })

    expect(link).toHaveAttribute('href', '/signup')
  })

  ///signup
})
