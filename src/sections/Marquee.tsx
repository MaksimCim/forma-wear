const items = [
  'ТЯЖЁЛЫЙ ХЛОПОК',
  '240 Г/М²',
  'СШИТО В МОСКВЕ',
  'БЕЗ ПРИКРАС',
  'ДЕРЖИТ ФОРМУ',
  'ОБМЕН 30 ДНЕЙ',
]

export default function Marquee() {
  const row = [...items, ...items]
  return (
    <div className="overflow-hidden border-y border-border bg-[hsl(var(--accent))] py-3">
      <div className="animate-marquee flex w-max items-center gap-8">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center gap-8" aria-hidden={half === 1}>
            {row.map((t, i) => (
              <span
                key={`${half}-${i}`}
                className="flex items-center gap-8 whitespace-nowrap font-display text-sm font-extrabold uppercase tracking-widest text-black"
              >
                {t}
                <span className="text-black/50">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
