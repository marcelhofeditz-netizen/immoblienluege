'use client'

import { useRef, useState } from 'react'
import type { Lang } from '@/lib/content'

type Msg = { role: 'user' | 'assistant'; content: string }

// Doc läuft über die API von dr-hofeditz.de (Systemprompt liegt serverseitig, Agent „buch-de“ / „buch-en“).
const ENDPOINT = 'https://www.dr-hofeditz.de/api/doc'

export function DocChat({ lang, t }: { lang: Lang; t: { placeholder: string; send: string; hello: string; chips: string[]; error: string; note: string } }) {
  const [msgs, setMsgs] = useState<Msg[]>([])
  const [input, setInput] = useState('')
  const [busy, setBusy] = useState(false)
  const box = useRef<HTMLDivElement>(null)

  async function ask(text: string) {
    const q = text.trim()
    if (!q || busy) return
    const next: Msg[] = [...msgs, { role: 'user', content: q }]
    setMsgs(next)
    setInput('')
    setBusy(true)
    try {
      const r = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ agent: lang === 'en' ? 'buch-en' : 'buch-de', messages: next.slice(-10) }),
      })
      const d = await r.json()
      setMsgs([...next, { role: 'assistant', content: d.content || t.error }])
    } catch {
      setMsgs([...next, { role: 'assistant', content: t.error }])
    } finally {
      setBusy(false)
      setTimeout(() => box.current?.scrollTo({ top: box.current.scrollHeight, behavior: 'smooth' }), 50)
    }
  }

  return (
    <div className="border border-[#2a2a2a] bg-[#0f0f0f]">
      <div className="flex items-center gap-3 border-b border-[#2a2a2a] px-5 py-4">
        <span className="flex h-9 w-9 items-center justify-center bg-[#C9A24D] text-sm font-extrabold text-black">D</span>
        <div>
          <p className="text-sm font-bold text-text-primary">Doc</p>
          <p className="text-[0.7rem] uppercase tracking-[0.2em] text-grey-secondary">{lang === 'en' ? 'AI agent · The Property Lie' : 'KI-Agent · Die Immobilienlüge'}</p>
        </div>
        <span className="ml-auto h-2 w-2 rounded-full bg-[#C9A24D] animate-pulse" />
      </div>
      <div ref={box} className="h-[360px] space-y-4 overflow-y-auto px-5 py-5 text-[0.95rem] leading-relaxed">
        <p className="max-w-[90%] text-[#d8d8d8]">{t.hello}</p>
        {msgs.map((m, i) => (
          <p
            key={i}
            className={`whitespace-pre-wrap ${m.role === 'user' ? 'ml-auto max-w-[85%] bg-[#F6F6F6] px-4 py-3 text-black' : 'max-w-[90%] border-l-2 border-[#C9A24D] pl-4 text-[#d8d8d8]'}`}
          >
            {m.content}
          </p>
        ))}
        {busy && <p className="pl-4 text-grey-secondary">…</p>}
        {msgs.length === 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {t.chips.map((c) => (
              <button key={c} onClick={() => ask(c)} className="border border-[#333] px-3 py-2 text-[0.8rem] text-[#cfcfcf] transition hover:border-[#C9A24D] hover:text-white">
                {c}
              </button>
            ))}
          </div>
        )}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          ask(input)
        }}
        className="flex border-t border-[#2a2a2a]"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t.placeholder}
          maxLength={800}
          className="min-w-0 flex-1 bg-transparent px-5 py-4 text-[0.95rem] text-text-primary placeholder:text-[#666] focus:outline-none"
        />
        <button disabled={busy} className="bg-[#C9A24D] px-6 text-[0.75rem] font-bold uppercase tracking-[0.14em] text-black disabled:opacity-50">
          {t.send}
        </button>
      </form>
      <p className="border-t border-[#2a2a2a] px-5 py-3 text-[0.7rem] text-[#777]">{t.note}</p>
    </div>
  )
}
