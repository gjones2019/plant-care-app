import { render, screen } from '@testing-library/react'
import Home from '../../pages/index'

describe('Home', () => {
  it('renders heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: "Welcome to My Plant Care App",
    })

    expect(heading).toBeInTheDocument()
  })

  it('renders home page unchanged', () => {
    const { container } = render(<Home />)
    expect(container).toMatchSnapshot()
  })
})