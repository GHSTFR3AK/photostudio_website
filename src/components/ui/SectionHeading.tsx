import React from 'react'

interface SectionHeadingProps {
  eyebrow: string
  titleLead?: string
  titleEmphasized?: string
  titleTail?: string
  fullTitle?: string
  align?: 'center' | 'left'
  dark?: boolean
  className?: string
  id?: string
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  titleLead,
  titleEmphasized,
  titleTail,
  fullTitle,
  align = 'center',
  dark = false,
  className = '',
  id,
}) => {
  const isCenter = align === 'center'

  return (
    <div
      className={`flex flex-col ${isCenter ? 'items-center text-center' : 'items-start text-left'} ${className}`}
    >
      {/* Eyebrow */}
      <span
        className={`text-xs uppercase font-medium tracking-[0.24em] mb-2 ${
          dark ? 'text-gold-light' : 'text-gold-text'
        }`}
      >
        {eyebrow}
      </span>

      {/* H2 Title */}
      <h2
        id={id}
        className={`font-cormorant text-3xl sm:text-4xl md:text-[52px] leading-[1.15] font-semibold tracking-tight ${
          dark ? 'text-ivory' : 'text-wine'
        }`}
      >
        {fullTitle ? (
          fullTitle
        ) : (
          <>
            {titleLead && `${titleLead} `}
            {titleEmphasized && (
              <span className={`italic font-normal ${dark ? 'text-gold-light' : 'text-wine'}`}>
                {titleEmphasized}
              </span>
            )}
            {titleTail && ` ${titleTail}`}
          </>
        )}
      </h2>

      {/* 64px x 1px Gold Rule */}
      <div
        className={`w-16 h-[1px] bg-gold mt-4 mb-2 ${
          isCenter ? 'mx-auto' : ''
        }`}
        aria-hidden="true"
      />
    </div>
  )
}
