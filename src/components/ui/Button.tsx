import React from 'react'

export interface ButtonProps {
  variant?: 'primary' | 'gold' | 'outline' | 'outline-wine' | 'outline-gold'
  children: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
  target?: string
  rel?: string
  type?: 'button' | 'submit' | 'reset'
  ariaLabel?: string
  disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  href,
  onClick,
  className = '',
  target,
  rel,
  type = 'button',
  ariaLabel,
  disabled = false,
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-sans font-semibold text-[15px] min-h-[48px] px-7 rounded-full transition-all duration-200 cursor-pointer select-none gold-focus text-center'

  let variantStyles = ''

  switch (variant) {
    case 'primary':
      variantStyles = 'bg-wine text-ivory hover:bg-wine-dark active:scale-[0.98]'
      break
    case 'gold':
      variantStyles = 'bg-gold text-ink hover:brightness-105 active:scale-[0.98]'
      break
    case 'outline':
    case 'outline-gold':
      variantStyles =
        'bg-transparent border border-gold text-gold-light hover:bg-gold/15 active:scale-[0.98]'
      break
    case 'outline-wine':
      variantStyles =
        'bg-transparent border border-wine text-wine hover:bg-wine/10 active:scale-[0.98]'
      break
  }

  const combinedStyles = `${baseStyles} ${variantStyles} ${
    disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''
  } ${className}`

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer ' + (rel || '') : rel}
        className={combinedStyles}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}
