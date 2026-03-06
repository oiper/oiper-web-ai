'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MODELS: { id: string; label: string }[] = [
  { id: 'codex2', label: 'Codex-5.2' },
  { id: 'codex', label: 'Codex-5.3' },
  { id: 'codex53', label: 'Codex-5.3' },
  { id: 'gpt54', label: 'GPT-5.4' },
  { id: 'gemini', label: 'Gemini-3.1 Pro' },
  { id: 'sonnet', label: 'Sonnet-4.6' },
  { id: 'sonnet2', label: 'Sonnet-4.6' },
  { id: 'opus', label: 'Opus-4.6' },
  { id: 'glm', label: 'GLM-5' },
  { id: 'kimi', label: 'Kimi-K2.5' },
  { id: 'qwen', label: 'Qwen-3.5' },
  { id: 'lovable', label: 'Lovable' },
  { id: 'v0', label: 'V0-Max' },
]

export function ModelSelectors() {
  const pathname = usePathname()

  return (
    <div className="fixed right-0! bottom-0! left-0 z-10 flex w-full justify-center gap-1 p-4!">
      {MODELS.map((model) => (
        <div key={model.id} className="flex flex-col gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <Link
              key={index}
              href={`/landing-page-${model.id}-${index + 1}`}
              className={cn(
                'bg-background! text-foreground! block! rounded-sm! px-2! py-1! font-[system-ui]! text-xs! leading-[1]! font-normal! tracking-[0]! uppercase! opacity-80!',
                `/landing-page-${model.id}-${index + 1}` === pathname &&
                  'bg-foreground! text-background! ring-background! opacity-100! ring-1!'
              )}
            >
              {model.label} {index + 1}
            </Link>
          ))}
        </div>
      ))}
    </div>
  )
}
