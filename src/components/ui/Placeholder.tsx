import React, { useState } from 'react'

export interface PlaceholderProps {
  label: string
  sublabel?: string
  aspectRatio?: string // e.g. 'aspect-[3/4]', 'aspect-[4/5]', 'aspect-video'
  className?: string
  tint?: 'wine-soft' | 'sand' | 'wine' | 'gallery'
  height?: string
  src?: string
  alt?: string
  eager?: boolean
  onClick?: () => void
}

export const Placeholder: React.FC<PlaceholderProps> = ({
  label,
  sublabel,
  aspectRatio,
  className = '',
  tint = 'sand',
  height,
  src,
  alt = '',
  eager = false,
  onClick,
}) => {
  const [imageFailed, setImageFailed] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const tintStyles = {
    'wine-soft': 'bg-wine-soft/30 text-wine border-wine-soft/40',
    sand: 'bg-sand text-muted border-line',
    wine: 'bg-wine/90 text-gold-light border-gold/30',
    gallery: 'bg-gallery text-line border-white/10',
  }[tint]

  // If a src is provided and has not failed, try loading it
  if (src && !imageFailed) {
    return (
      <div
        className={`relative overflow-hidden ${aspectRatio || ''} ${height || ''} ${className}`}
        onClick={onClick}
      >
        <img
          src={src}
          alt={alt || label}
          loading={eager ? 'eager' : 'lazy'}
          onError={() => setImageFailed(true)}
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {/* If image hasn't loaded yet or while loading, show placeholder underneath */}
        {!imageLoaded && (
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center p-4 border border-dashed rounded-[inherit] text-center ${tintStyles}`}
          >
            <div className="w-8 h-8 mb-2 opacity-50 rounded-full border border-current flex items-center justify-center text-xs">
              ✦
            </div>
            <span className="font-serif italic text-sm tracking-wide">
              {label.startsWith('[') ? label : `[${label}]`}
            </span>
            {sublabel && (
              <span className="text-xs uppercase tracking-widest mt-1 opacity-70">
                {sublabel}
              </span>
            )}
          </div>
        )}
      </div>
    )
  }

  // Pure placeholder fallback block
  return (
    <div
      onClick={onClick}
      className={`relative flex flex-col items-center justify-center p-4 border border-dashed text-center select-none ${
        aspectRatio || ''
      } ${height || ''} ${tintStyles} ${className}`}
    >
      <div className="w-8 h-8 mb-2 opacity-40 rounded-full border border-current flex items-center justify-center text-xs font-serif">
        ✦
      </div>
      <span className="font-serif italic text-sm tracking-wide">
        {label.startsWith('[') ? label : `[${label}]`}
      </span>
      {sublabel && (
        <span className="text-[11px] uppercase tracking-widest mt-1 opacity-70 font-sans">
          {sublabel}
        </span>
      )}
    </div>
  )
}
