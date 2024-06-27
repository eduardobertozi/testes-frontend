import { fireEvent, render, screen } from '@testing-library/react'
import SignUpPage from './page'
import mockRouter from 'next-router-mock'

const push = vi.fn()
vi.mock('next/navigation', () => require('next-router-mock'))

describe('Test a sign up page component', () => {
  it('should have 3 inputs on screen', async () => {
    render(<SignUpPage />)

    const inputs = await screen.findAllByRole('textbox')

    expect(inputs).toHaveLength(3)
  })

  it('should have a inputs from name, email and password', async () => {
    render(<SignUpPage />)

    const inputName = await screen.findByPlaceholderText('Insira seu nome')
    const inputEmail = await screen.findByPlaceholderText('Insira seu e-mail')
    const inputPassword = await screen.findByPlaceholderText('Insira sua senha')

    expect(inputName).toBeInTheDocument()
    expect(inputEmail).toBeInTheDocument()
    expect(inputPassword).toBeInTheDocument()
  })

  it('should have a button on screen', async () => {
    render(<SignUpPage />)

    const button = await screen.findByRole('button')

    expect(button).toHaveTextContent('Sign Up')
  })

  it('should have a title "Cadastre-se"', async () => {
    render(<SignUpPage />)

    const title = await screen.findByRole('heading', {
      level: 1,
    })

    expect(title).toHaveTextContent('Cadastre-se')
  })

  it('should navigate to dashboard page', async () => {
    mockRouter.push = push

    render(<SignUpPage />)

    const button = await screen.findByRole('button')
    fireEvent.click(button)

    expect(push).toHaveBeenCalledTimes(1)
  })
})
