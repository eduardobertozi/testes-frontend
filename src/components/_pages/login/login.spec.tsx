import { render, screen } from '@testing-library/react'
import Login from '.'

describe('Test Login component', () => {
  vi.mock('next/navigation', () => require('next-router-mock'))

  it('Should be a title writed "Sign in"', async () => {
    render(<Login />)

    const title = await screen.findByRole('heading')

    expect(title.textContent).toBe('Sign In')
  })

  it('Should two Inputs on screen', async () => {
    render(<Login />)

    const inputs = await screen.findAllByRole('textbox')

    expect(inputs).toHaveLength(2)
  })

  it('Should be a Button and this button should have a text "Entrar"', async () => {
    render(<Login />)

    const button = await screen.findByRole('button', {
      name: 'Entrar',
    })

    expect(button).toBeInTheDocument()
  })

  it('should be a input to e-mail', async () => {
    render(<Login />)

    const inputEmail = await screen.findByPlaceholderText('Insira seu e-mail')

    expect(inputEmail).toBeInTheDocument()
  })

  it('should be a input to password', async () => {
    render(<Login />)

    const inputPassword = await screen.findByPlaceholderText('Insira sua senha')

    expect(inputPassword).toBeInTheDocument()
  })
})
