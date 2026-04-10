import type { Metadata } from 'next'
import { Cormorant_Garamond, Outfit } from 'next/font/google'
import './globals.css'
import { CONTENT } from '@/data/content'

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
})

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: `${CONTENT.brand.name} | ${CONTENT.brand.description}`,
  description: CONTENT.brand.description,
  keywords: "cultivo medicinal, botánica, puerto rico, isabela, excelencia farmacéutica, agricultura controlada",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${cormorant.variable} ${outfit.variable} font-sans bg-background text-ivory antialiased selection:bg-gold selection:text-black overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
