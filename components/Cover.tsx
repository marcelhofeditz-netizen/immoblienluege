// Arbeitscover: Motiv (goldenes Gehirn aus Häusern in der Falle) + Typografie als HTML.
// Das finale Verlagscover legt Econ fest.

export function Cover({ className = '', tilt = true }: { className?: string; tilt?: boolean }) {
  return (
    <div
      className={`relative aspect-[2/3] w-full overflow-hidden [container-type:inline-size] bg-[#050505] shadow-[0_40px_120px_-20px_rgba(201,162,77,0.35)] ${className}`}
      style={tilt ? { transform: 'perspective(1200px) rotateY(-12deg) rotateX(3deg)' } : undefined}
    >
      <img src="/img/cover-art.webp" alt="" className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: '50% 62%' }} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg,#050505 0%,#05050500 34%,#05050500 70%,#050505 96%)' }} />
      <div className="absolute inset-x-0 top-0 flex flex-col items-center px-[8%] pt-[9%] text-center">
        <span className="text-[2.4cqw] font-bold uppercase tracking-[0.42em] text-[#C9A24D]">Die Immobilienlüge</span>
        <span className="mt-[6%] block font-extrabold uppercase leading-[0.9] tracking-[-0.02em] text-[#F6F6F6]" style={{ fontSize: '8.4cqw' }}>
          Psychologie
          <br />
          beim
          <br />
          Immobilienkauf
        </span>
        <span className="mt-[5%] block text-[2.6cqw] leading-snug text-[#cfcfcf]">Was Makler wissen, aber Käufer nicht</span>
      </div>
      <div className="absolute inset-x-0 bottom-0 flex flex-col items-center pb-[7%]">
        <span className="text-[2.7cqw] font-bold uppercase tracking-[0.32em] text-[#F6F6F6]">Dr. Marcel Hofeditz</span>
        <span className="mt-2 text-[1.8cqw] uppercase tracking-[0.3em] text-[#8a8a8a]">Econ</span>
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[4%]" style={{ background: 'linear-gradient(90deg,rgba(255,255,255,0.12),rgba(255,255,255,0))' }} />
    </div>
  )
}
