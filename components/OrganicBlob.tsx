import React from 'react'

export const BRAND_TINTS = [
  {
    fill: 'rgba(245, 158, 11, 0.16)',
    stroke: 'rgba(245, 158, 11, 0.34)',
    text: '#F59E0B',
    solid: '#F59E0B',
  },
  {
    fill: 'rgba(251, 191, 36, 0.16)',
    stroke: 'rgba(251, 191, 36, 0.35)',
    text: '#FBBF24',
    solid: '#FBBF24',
  },
  {
    fill: 'rgba(217, 119, 6, 0.17)',
    stroke: 'rgba(217, 119, 6, 0.35)',
    text: '#D97706',
    solid: '#D97706',
  },
  {
    fill: 'rgba(249, 115, 22, 0.16)',
    stroke: 'rgba(249, 115, 22, 0.34)',
    text: '#F97316',
    solid: '#F97316',
  },
]

export const SOLUTION_TINTS = [
  {
    fill: 'rgba(16, 185, 129, 0.16)',
    stroke: 'rgba(16, 185, 129, 0.35)',
    text: '#10B981',
    solid: '#10B981',
  },
  {
    fill: 'rgba(52, 211, 153, 0.16)',
    stroke: 'rgba(52, 211, 153, 0.35)',
    text: '#34D399',
    solid: '#34D399',
  },
  {
    fill: 'rgba(5, 150, 105, 0.17)',
    stroke: 'rgba(5, 150, 105, 0.35)',
    text: '#10B981',
    solid: '#059669',
  },
  {
    fill: 'rgba(110, 231, 183, 0.16)',
    stroke: 'rgba(110, 231, 183, 0.35)',
    text: '#34D399',
    solid: '#6EE7B7',
  },
]

export const BLOB_PATHS = {
  // Reference paths from design spec:
  ref1: 'M40 8 C55 5, 72 18, 74 35 C76 52, 63 70, 46 73 C29 76, 10 65, 7 48 C4 31, 18 11, 40 8Z',
  ref2: 'M38 6 C56 2, 75 16, 76 36 C77 56, 60 74, 40 75 C20 76, 4 60, 5 40 C6 20, 20 10, 38 6Z',
  ref3: 'M42 5 C62 8, 77 24, 75 44 C73 64, 56 78, 36 76 C16 74, 3 57, 5 37 C7 17, 22 2, 42 5Z',
  ref4: 'M36 4 C58 0, 78 18, 77 40 C76 62, 58 79, 36 78 C14 77, -1 60, 3 38 C7 16, 14 8, 36 4Z',

  // Friction modules (amber/gold unique paths):
  noise1: 'M39 7 C58 3, 73 17, 75 36 C77 55, 66 72, 45 75 C24 78, 8 64, 6 44 C4 24, 20 11, 39 7Z',
  noise2: 'M44 6 C64 8, 77 25, 74 46 C71 67, 54 77, 34 75 C14 73, 4 56, 7 36 C10 16, 24 4, 44 6Z',
  noise3: 'M37 5 C55 2, 72 15, 76 34 C80 53, 67 71, 47 75 C27 79, 10 67, 6 47 C2 27, 19 8, 37 5Z',
  noise4: 'M41 8 C61 5, 76 21, 74 42 C72 63, 57 76, 37 75 C17 74, 4 59, 6 39 C8 19, 21 11, 41 8Z',

  // Framework modules (emerald green unique paths):
  framework1: 'M40 8 C55 5, 72 18, 74 35 C76 52, 63 70, 46 73 C29 76, 10 65, 7 48 C4 31, 18 11, 40 8Z',
  framework2: 'M38 6 C56 2, 75 16, 76 36 C77 56, 60 74, 40 75 C20 76, 4 60, 5 40 C6 20, 20 10, 38 6Z',
  framework3: 'M42 5 C62 8, 77 24, 75 44 C73 64, 56 78, 36 76 C16 74, 3 57, 5 37 C7 17, 22 2, 42 5Z',
  framework4: 'M36 4 C58 0, 78 18, 77 40 C76 62, 58 79, 36 78 C14 77, -1 60, 3 38 C7 16, 14 8, 36 4Z',

  // Digital assets & toolkits:
  ebook1: 'M35 7 C53 3, 73 19, 76 39 C79 59, 62 76, 41 77 C20 78, 6 63, 5 43 C4 23, 17 11, 35 7Z',
  ebook2: 'M43 6 C62 5, 75 22, 76 41 C77 60, 60 76, 40 77 C20 78, 5 62, 6 42 C7 22, 24 7, 43 6Z',

  // Training tiers:
  tier1: 'M37 6 C55 3, 72 17, 76 36 C80 55, 66 73, 45 76 C24 79, 7 65, 5 45 C3 25, 19 9, 37 6Z',
  tier2: 'M42 6 C62 7, 76 23, 74 43 C72 63, 57 77, 37 76 C17 75, 4 58, 6 38 C8 18, 22 5, 42 6Z',
  tier3: 'M38 7 C57 4, 74 20, 75 40 C76 60, 61 75, 40 76 C19 77, 6 62, 6 42 C6 22, 19 10, 38 7Z',

  // Community cards:
  tg: 'M40 5 C60 3, 76 19, 76 39 C76 59, 63 76, 42 77 C21 78, 5 63, 5 42 C5 21, 20 7, 40 5Z',
  wa: 'M41 7 C61 8, 75 24, 73 45 C71 66, 55 77, 35 75 C15 73, 4 56, 6 36 C8 16, 21 6, 41 7Z',

  // Watermarks (large background shapes):
  wmHero: 'M39 5 C58 2, 74 18, 76 38 C78 58, 63 75, 42 76 C21 77, 6 63, 6 43 C6 23, 20 8, 39 5Z',
  wmCard1: 'M36 5 C56 2, 75 17, 77 37 C79 57, 64 74, 43 76 C22 78, 7 64, 5 44 C3 24, 16 8, 36 5Z',
  wmCard2: 'M43 7 C63 8, 76 26, 73 47 C70 68, 52 77, 33 74 C14 71, 4 53, 7 33 C10 13, 23 6, 43 7Z',
  wmCard3: 'M42 8 C62 5, 77 22, 75 42 C73 62, 59 77, 38 76 C17 75, 5 58, 7 38 C9 18, 22 11, 42 8Z',
  wmCard4: 'M35 6 C54 2, 72 16, 75 35 C78 54, 65 73, 44 76 C23 79, 6 65, 4 45 C2 25, 16 10, 35 6Z',
  wmCard5: 'M44 5 C64 7, 77 24, 75 45 C73 66, 56 78, 36 76 C16 74, 4 57, 6 37 C8 17, 24 3, 44 5Z',
  wmCard6: 'M37 7 C57 4, 74 19, 76 39 C78 59, 63 76, 42 77 C21 78, 7 63, 6 43 C5 23, 17 10, 37 7Z',
  wmCard7: 'M41 5 C61 3, 76 18, 77 38 C78 58, 65 75, 44 76 C23 77, 7 64, 5 44 C3 24, 18 8, 41 5Z',
  wmCard8: 'M38 7 C58 4, 75 21, 74 42 C73 63, 58 77, 37 76 C16 75, 4 59, 6 39 C8 19, 21 10, 38 7Z',
}

interface OrganicBlobProps {
  path: string
  label?: string | number
  tintIndex?: 0 | 1 | 2 | 3
  variant?: 'brand' | 'solution'
  className?: string
  fontSize?: number
}

export function OrganicBlob({
  path,
  label,
  tintIndex = 0,
  variant = 'brand',
  className = '',
  fontSize = 22,
}: OrganicBlobProps) {
  const palette = variant === 'solution' ? SOLUTION_TINTS : BRAND_TINTS
  const activeTint = palette[tintIndex % palette.length]

  return (
    <svg
      viewBox="0 0 80 80"
      className={`size-14 shrink-0 ${className}`}
      aria-hidden="true"
    >
      {/* Layer 1: Semi-transparent filled version */}
      <path d={path} fill={activeTint.fill} />
      {/* Layer 2: Slightly brighter stroke outline at strokeWidth="1.5" */}
      <path
        d={path}
        fill="none"
        stroke={activeTint.stroke}
        strokeWidth="1.5"
      />
      {/* Centered bold number or label */}
      {label !== undefined && (
        <text
          x="40"
          y="40"
          textAnchor="middle"
          dominantBaseline="central"
          fill={activeTint.text}
          fontSize={fontSize}
          fontWeight="800"
          letterSpacing="-0.03em"
        >
          {label}
        </text>
      )}
    </svg>
  )
}

interface BlobWatermarkProps {
  path: string
  color?: string
  className?: string
}

export function BlobWatermark({
  path,
  color = '#F59E0B',
  className = '',
}: BlobWatermarkProps) {
  return (
    <svg
      viewBox="0 0 80 80"
      className={`blob-watermark pointer-events-none absolute -right-6 -top-6 size-40 opacity-10 transition-opacity duration-300 ${className}`}
      aria-hidden="true"
    >
      <path d={path} fill={color} />
    </svg>
  )
}
