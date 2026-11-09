'use client'

import { useState } from 'react'
import type { Lang } from '@/lib/content'

const ENDPOINT = 'https://rfldzzgeikcntmhvwjwk.supabase.co/functions/v1/buch-warteliste'
const GOLD = '#C9A24D'

const T = {
  de: {
    email: 'Deine E-Mail-Adresse',
    name: 'Vorname (optional)',
    rolle: 'Ich bin …',
    rollen: [
      ['', 'Ich bin … (optional)'],
      ['kaeufer', 'auf der Suche nach einer Immobilie'],
      ['eigentuemer', 'Eigentümer:in'],
      ['investor', 'Investor:in'],
      ['makler', 'Makler:in'],
      ['sonstiges', 'einfach neugierig'],
    ],
    consent:
      'Ja, ich möchte auf die Warteliste und den Newsletter von Dr. Marcel Hofeditz (Dr. Hofeditz Real Estate GmbH) mit Infos zum Erscheinen, Leseproben und Beiträgen zur Immobilienpsychologie erhalten. Abmeldung jederzeit per Link in jeder Mail. Details in der',
    privacy: 'Datenschutzerklärung',
    cta: 'Auf die Warteliste',
    sending: 'Einen Moment …',
    done: (n: number | null) => (n ? `Du bist dabei – Platz ${n.toLocaleString('de-DE')} auf der Warteliste.` : 'Du bist dabei.'),
    doneText: 'Wir melden uns mit der ersten Ausgabe von „21 Fallen“. Kein Spam, versprochen – das wäre ja die nächste Lüge.',
    errEmail: 'Bitte prüf deine E-Mail-Adresse.',
    errConsent: 'Bitte bestätige die Einwilligung.',
    err: 'Das hat nicht geklappt. Bitte versuch es gleich noch einmal.',
  },
  en: {
    email: 'Your email address',
    name: 'First name (optional)',
    rolle: 'I am …',
    rollen: [
      ['', 'I am … (optional)'],
      ['kaeufer', 'looking for a property'],
      ['eigentuemer', 'a homeowner'],
      ['investor', 'an investor'],
      ['makler', 'an agent'],
      ['sonstiges', 'just curious'],
    ],
    consent:
      'Yes, I want to join the waitlist and receive the newsletter of Dr. Marcel Hofeditz (Dr. Hofeditz Real Estate GmbH) with release news, excerpts and articles on property psychology. Unsubscribe any time via the link in every email. See the',
    privacy: 'privacy policy',
    cta: 'Join the waitlist',
    sending: 'One moment …',
    done: (n: number | null) => (n ? `You're in – number ${n.toLocaleString('en-US')} on the waitlist.` : "You're in."),
    doneText: "We'll be in touch with the first issue of “21 Traps”. No spam – that would just be the next lie.",
    errEmail: 'Please check your email address.',
    errConsent: 'Please confirm your consent.',
    err: 'That did not work. Please try again in a moment.',
  },
}

export function Waitlist({ lang, quelle }: { lang: Lang; quelle: string }) {
  const t = T[lang]
  const [email, setEmail] = useState('')
  const [vorname, setVorname] = useState('')
  const [rolle, setRolle] = useState('')
  const [ok, setOk] = useState(false)
  const [hp, setHp] = useState('')
  const [state, setState] = useState<'idle' | 'busy' | 'done'>('idle')
  const [msg, setMsg] = useState('')
  const [pos, setPos] = useState<number | null>(null)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(email.trim())) return setMsg(t.errEmail)
    if (!ok) return setMsg(t.errConsent)
    setMsg('')
    setState('busy')
    try {
      const src = typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('utm_source') : null
      const r = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), vorname, rolle: rolle || undefined, sprache: lang, quelle: src ? `${quelle}:${src}` : quelle, einwilligung: true, website: hp }),
      })
      const d = await r.json()
      if (!d.ok) throw new Error(d.error)
      setPos(d.position ?? null)
      setState('done')
    } catch {
      setState('idle')
      setMsg(t.err)
    }
  }

  if (state === 'done')
    return (
      <div className="mx-auto max-w-[34rem] border px-8 py-10 text-left" style={{ borderColor: GOLD }}>
        <p className="text-[1.3rem] font-extrabold text-text-primary">{t.done(pos)}</p>
        <p className="mt-3 text-[1rem] leading-relaxed text-[#cfcfcf]">{t.doneText}</p>
      </div>
    )

  return (
    <form onSubmit={submit} className="mx-auto max-w-[34rem] space-y-3 text-left" noValidate>
      <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t.email} autoComplete="email" className="w-full border border-[#333] bg-[#0f0f0f] px-5 py-4 text-[1rem] text-text-primary placeholder:text-[#777] focus:border-[#C9A24D] focus:outline-none" />
      <div className="grid gap-3 sm:grid-cols-2">
        <input value={vorname} onChange={(e) => setVorname(e.target.value)} placeholder={t.name} autoComplete="given-name" maxLength={60} className="w-full border border-[#333] bg-[#0f0f0f] px-5 py-4 text-[1rem] text-text-primary placeholder:text-[#777] focus:border-[#C9A24D] focus:outline-none" />
        <select value={rolle} onChange={(e) => setRolle(e.target.value)} aria-label={t.rolle} className="w-full border border-[#333] bg-[#0f0f0f] px-4 py-4 text-[1rem] text-[#cfcfcf] focus:border-[#C9A24D] focus:outline-none">
          {t.rollen.map(([v, l]) => (
            <option key={v} value={v}>{l}</option>
          ))}
        </select>
      </div>
      <input tabIndex={-1} autoComplete="off" value={hp} onChange={(e) => setHp(e.target.value)} name="website" className="hidden" aria-hidden />
      <label className="flex cursor-pointer items-start gap-3 pt-2 text-[0.82rem] leading-relaxed text-[#9a9a9a]">
        <input type="checkbox" checked={ok} onChange={(e) => setOk(e.target.checked)} className="mt-1 h-4 w-4 shrink-0 accent-[#C9A24D]" />
        <span>
          {t.consent}{' '}
          <a href="https://www.dr-hofeditz.de/datenschutz" className="underline hover:text-white">{t.privacy}</a>.
        </span>
      </label>
      {msg && <p className="text-[0.9rem] text-[#e7b4a0]">{msg}</p>}
      <button disabled={state === 'busy'} className="btn-solid-x w-full disabled:opacity-60">
        {state === 'busy' ? t.sending : t.cta}
      </button>
    </form>
  )
}
