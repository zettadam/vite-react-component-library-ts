/* ----------------------------- vendor imports ----------------------------- */
import * as React from 'react'

/* ------------------------------ local imports ----------------------------- */
import { clsx } from '../common/helpers/object'
import type { ButtonProps } from './Button.types'
import './button.css'

/* ----------------------------- end of imports ----------------------------- */

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, className, label, size = 'md', variant = 'secondary', ...rest },
    ref
  ): JSX.Element => {
    const buttonProps: { [k: string]: any } = {
      ...rest,
      className: clsx({
        btn: true,
        [`btn--${size}`]: size,
        [`btn--${variant}`]: variant,
        className,
      }),
      ref,
      type: rest.type || 'button',
    }
    if (!children && label) buttonProps['aria-label'] = label

    return <button {...buttonProps}>{children || label}</button>
  }
)

Button.displayName = 'Button'

export default Button
