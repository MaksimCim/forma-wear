export default function Hero() {
  return (
    <section id="home" className="relative flex h-svh min-h-[640px] flex-col justify-end overflow-hidden">
      <img
        src="images/hero.jpg"
        alt="Двое в футболках ФОРМА у бетонной стены"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/30" />

      <div className="relative z-10 px-5 pb-8 md:px-10 md:pb-12">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[hsl(var(--accent))]">
          Тяжёлый хлопок · 240 г/м² · Москва
        </p>
        <h1 className="font-display text-[17vw] font-black leading-[0.85] tracking-tight text-[hsl(var(--foreground))] md:text-[13vw]">
          ФОРМА
        </h1>
        <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-sm leading-relaxed text-white/70 md:text-base">
            Футболки, которые держат форму дольше, чем тренды живут.
            Никакой лирики — просто плотная ткань и честный крой.
          </p>
          <a
            href="#catalog"
            className="btn-tactile inline-flex w-fit items-center gap-3 bg-[hsl(var(--accent))] px-8 py-4 text-sm font-black uppercase tracking-[0.15em] text-black"
          >
            Смотреть каталог
            <span aria-hidden>↓</span>
          </a>
        </div>
      </div>
    </section>
  )
}
