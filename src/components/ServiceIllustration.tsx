import type { CSSProperties, ReactNode } from 'react'
import type { ServiceIcon } from '../i18n/translations.ts'

const bricks = [
  { x: 12, y: 66 },
  { x: 36, y: 66 },
  { x: 60, y: 66 },
  { x: 24, y: 52 },
  { x: 48, y: 52 },
  { x: 36, y: 38 },
]

const ILLUSTRATIONS: Record<ServiceIcon, ReactNode> = {
  construction: (
    <>
      <line x1="6" y1="80" x2="90" y2="80" />
      {bricks.map((b, i) => (
        <rect
          key={i}
          className="anim-brick"
          style={{ '--i': i } as CSSProperties}
          x={b.x}
          y={b.y}
          width="24"
          height="12"
          rx="1.5"
        />
      ))}
    </>
  ),
  plumbing: (
    <>
      <path d="M10 26 H50 a8 8 0 0 1 8 8 V44" />
      <rect x="52" y="44" width="12" height="6" rx="1" />
      <path className="anim-drop" d="M58 58 c-3 5 -4 7 -4 9 a4 4 0 0 0 8 0 c0 -2 -1 -4 -4 -9 z" />
      <path className="anim-drop anim-drop-2" d="M58 58 c-3 5 -4 7 -4 9 a4 4 0 0 0 8 0 c0 -2 -1 -4 -4 -9 z" />
      <ellipse className="anim-ripple" cx="58" cy="84" rx="10" ry="3" />
    </>
  ),
  climate: (
    <g className="anim-spin-slow">
      {[0, 60, 120].map((angle) => (
        <g key={angle} transform={`rotate(${angle} 48 48)`}>
          <line x1="48" y1="12" x2="48" y2="84" />
          <path d="M41 20 L48 27 L55 20" />
          <path d="M41 76 L48 69 L55 76" />
        </g>
      ))}
    </g>
  ),
  electrical: (
    <>
      <path className="anim-bolt" d="M54 8 L24 54 H44 L38 88 L72 38 H50 Z" />
      <path className="anim-spark" d="M76 20 l6 -4 M80 34 h8 M16 30 l-6 -3" />
    </>
  ),
  vacuum: (
    <>
      <circle cx="74" cy="48" r="14" />
      <circle cx="74" cy="48" r="6" />
      <path d="M60 48 H36 c-10 0 -10 22 -22 22 H8" />
      {[38, 48, 58].map((y, i) => (
        <circle
          key={y}
          className="anim-dust"
          style={{ '--i': i } as CSSProperties}
          cx="34"
          cy={y}
          r="2.5"
        />
      ))}
    </>
  ),
  ventilation: (
    <>
      <circle cx="48" cy="48" r="38" />
      <g className="anim-spin">
        {[0, 90, 180, 270].map((angle) => (
          <path
            key={angle}
            d="M48 48 C36 40 36 20 48 14 C60 20 60 40 48 48 Z"
            transform={`rotate(${angle} 48 48)`}
          />
        ))}
        <circle cx="48" cy="48" r="4" />
      </g>
    </>
  ),
}

function ServiceIllustration({ name }: { name: ServiceIcon }) {
  return (
    <svg
      className="service-illustration"
      viewBox="0 0 96 96"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ILLUSTRATIONS[name]}
    </svg>
  )
}

export default ServiceIllustration
