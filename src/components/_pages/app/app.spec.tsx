import { render, screen } from "@testing-library/react"
import App from "@/components/_pages/app"

describe('Test default page', () => {
  /* it ('Should have a title on page', async () => {
    render(<App />)

    const title = await screen.findByRole('heading')

    expect(title).toBeInTheDocument()
  }) */

  it ('Should have two titles on page', async () => {
    render(<App />)

    const title = await screen.findAllByRole('heading')

    expect(title).toHaveLength(2)
  })

  it ('Should have two titles writed "hello world"', async () => {
    render(<App />)

    const title = await screen.findByRole('heading', {
      name: 'Hello World' // included
    })

    // expect(title.textContent).toBe('Hello World')
    expect(title).toBeInTheDocument()
  })
})