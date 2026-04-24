import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  title: 'Turkish Ahora | Aprende Turco de Forma Práctica',
  description: 'Aprende turco de manera fácil y práctica. Clases personalizadas para hispanohablantes que quieren viajar, vivir o trabajar en Turquía.',
  keywords: ['aprender turco', 'clases de turco', 'turco para hispanohablantes', 'Turkish Ahora'],
  icons: {
    icon: '/logo-turkish-ahora.png',
    apple: '/logo-turkish-ahora.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#dc2626',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
