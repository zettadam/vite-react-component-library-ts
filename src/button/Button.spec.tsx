import * as React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'

import { Button } from './Button'

describe('<Button>', () => {
  describe('rendering', () => {
    it('should render with default props', async () => {
      render(<Button>Save</Button>)
      expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('has default type set on button component', () => {
      render(<Button />)
      expect(screen.getByRole('button')).toHaveAttribute('type', 'button')
    })

    it('passes type to button component', () => {
      render(<Button type="submit" />)
      expect(screen.getByRole('button')).toHaveAttribute('type', 'submit')
    })

    it('renders "aria-label" when there is/are no children', async () => {
      render(<Button label="Save" />)
      expect(screen.getByLabelText('Save')).toBeInTheDocument()
    })

    it('sets disabled attribute based on prop', () => {
      render(<Button disabled />)
      expect(screen.getByRole('button')).toBeDisabled()
    })

    it('sets a variant CSS class based on prop', () => {
      render(
        <>
          <Button variant="primary" />
          <Button variant="secondary" />
          <Button variant="tertiary" />
          <Button variant="ghost" />
          <Button variant="danger" />
        </>
      )
      const btns = screen.getAllByRole('button')

      expect(btns[0]).toHaveClass('btn--primary')
      expect(btns[1]).toHaveClass('btn--secondary')
      expect(btns[2]).toHaveClass('btn--tertiary')
      expect(btns[3]).toHaveClass('btn--ghost')
      expect(btns[4]).toHaveClass('btn--danger')
    })

    it('sets a size CSS class based on prop', () => {
      render(
        <>
          <Button size="xl" />
          <Button size="lg" />
          <Button size="md" />
          <Button size="sm" />
          <Button size="xs" />
        </>
      )
      const btns = screen.getAllByRole('button')

      expect(btns[0]).toHaveClass('btn--xl')
      expect(btns[1]).toHaveClass('btn--lg')
      expect(btns[2]).toHaveClass('btn--md')
      expect(btns[3]).toHaveClass('btn--sm')
      expect(btns[4]).toHaveClass('btn--xs')
    })
  })

  describe('event handling', () => {
    it('handles click events', () => {
      let x = 0
      const handleClick: React.MouseEventHandler = (e) => {
        x = 2
      }
      render(<Button label="Save" onClick={handleClick} />)

      fireEvent.click(screen.getByText('Save'))
      expect(x).toEqual(2)
    })

    it('handles focus/blur events', () => {
      let x = 0
      const handleFocus: React.FocusEventHandler = (e) => {
        x = 2
      }
      const handleBlur: React.FocusEventHandler = (e) => {
        x = 1
      }
      render(<Button label="Save" onFocus={handleFocus} onBlur={handleBlur} />)

      fireEvent.focus(screen.getByText('Save'))
      expect(x).toEqual(2)
      fireEvent.blur(screen.getByText('Save'))
      expect(x).toEqual(1)
    })
  })
})
