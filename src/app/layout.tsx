import '@/styles/index.css'

import { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { PropsWithChildren } from 'react'
import { ModelSelectors } from './model-selectors'

export const metadata: Metadata = {
  title: 'Landing Page List made by all major models',
}

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" enableSystem>
          {children}

          <ModelSelectors />
        </ThemeProvider>
      </body>
    </html>
  )
}
