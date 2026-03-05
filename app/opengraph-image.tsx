import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const runtime = 'nodejs'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  const logoData = readFileSync(join(process.cwd(), 'public/images/logo-empirica.png'))
  const logoSrc = `data:image/png;base64,${logoData.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0c1f3a',
          gap: '32px',
        }}
      >
        {/* Logo */}
        <img
          src={logoSrc}
          style={{ maxWidth: '320px', maxHeight: '130px', objectFit: 'contain' }}
        />

        {/* Separador */}
        <div style={{ width: '60px', height: '3px', backgroundColor: '#3b7dd8', borderRadius: '2px' }} />

        {/* Títulos */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
          <div
            style={{
              color: '#ffffff',
              fontSize: '52px',
              fontWeight: '700',
              textAlign: 'center',
              letterSpacing: '-1px',
              lineHeight: 1.1,
            }}
          >
            Introducción a la Economía
          </div>
          <div
            style={{
              color: '#94b8d8',
              fontSize: '26px',
              textAlign: 'center',
            }}
          >
            Una visión desde la República Dominicana
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
