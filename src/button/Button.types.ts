/* ----------------------------- vendor imports ----------------------------- */
import * as React from 'react'

/* ----------------------------- end of imports ----------------------------- */

export type ButtonProps = React.ComponentPropsWithRef<'button'> & {
  /** Used to label component when it has no children */
  label?: string
  /** Used to apply sizing */
  size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs'
  /** Used to vary appearance of Button component */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'danger'
}
