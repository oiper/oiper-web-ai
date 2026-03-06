import '@/styles/index.css'

import { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import Link from 'next/link'
import { PropsWithChildren } from 'react'

export const metadata: Metadata = {
  title: 'Landing Page List made by all major models',
}

const MODELS: { id: string; label: string }[] = [
  { id: 'codex2', label: 'Codex-5.2' },
  { id: 'codex', label: 'Codex-5.3' },
  { id: 'codex53', label: 'Codex-5.3' },
  { id: 'gpt54', label: 'GPT-5.4' },
  { id: 'gemini', label: 'Gemini-3.1 Pro' },
  { id: 'sonnet', label: 'Sonnet-4.6' },
  { id: 'sonnet2', label: 'Sonnet-4.6' },
  { id: 'kimi', label: 'Kimi-K2.5' },
  { id: 'glm', label: 'GLM-5' },
  { id: 'opus', label: 'Opus-4.6' },
  { id: 'qwen', label: 'Qwen-3.5' },
  { id: 'lovable', label: 'Lovable' },
  { id: 'v0', label: 'V0-Max' },
]

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" enableSystem>
          {children}

          <div className="fixed right-0! bottom-0! left-0 z-10 flex w-full justify-center gap-1 p-4!">
            {MODELS.map((model) => (
              <div key={model.id} className="flex flex-col gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Link
                    key={index}
                    href={`/landing-page-${model.id}-${index + 1}`}
                    className="bg-background! text-foreground! block! rounded-sm! px-2! py-1! font-mono text-xs! uppercase! opacity-80!"
                  >
                    {model.label} {index + 1}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
