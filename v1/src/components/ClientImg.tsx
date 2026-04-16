'use client'

interface ClientImgProps {
  src: string
  alt: string
  title?: string
  className?: string
  fallbackInitial?: string
}

export function ClientImg({ src, alt, title, className, fallbackInitial }: ClientImgProps) {
  return (
    <img
      src={src}
      alt={alt}
      title={title}
      className={className}
      onError={(e) => {
        e.currentTarget.style.display = 'none'
      }}
    />
  )
}

interface BrandLogoCardProps {
  src: string
  alt: string
  fallbackInitial: string
  className?: string
}

export function BrandLogoCard({ src, alt, fallbackInitial, className }: BrandLogoCardProps) {
  return (
    <div className={`h-12 flex items-center justify-center w-full ${className ?? ''}`}>
      <img
        src={src}
        alt={alt}
        className="brand-logo-img max-h-10"
        onError={(e) => {
          e.currentTarget.style.display = 'none'
          const fallback = e.currentTarget.nextElementSibling as HTMLElement
          if (fallback) fallback.style.display = 'flex'
        }}
      />
      <div
        className="hidden w-12 h-12 rounded-xl bg-blue-500/20 items-center justify-center text-blue-400 font-bold text-lg"
        aria-hidden="true"
      >
        {fallbackInitial}
      </div>
    </div>
  )
}
