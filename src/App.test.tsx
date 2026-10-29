import { render, screen } from '@testing-library/react'
import App from '@/App'

describe('App', () => {
  it('renderiza o título inicial', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /portfólio em construção/i })).toBeInTheDocument()
  })
})
