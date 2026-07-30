/** Стрелка-каракуля — «небрежность», за которую любит @webdesignbasics */
function ScribbleArrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 60" fill="none" className={className} aria-hidden>
      <path
        d="M4 32 C 30 10, 62 8, 108 26 M 108 26 L 92 14 M 108 26 L 90 40"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Lookbook() {
  return (
    <section id="drop" className="relative overflow-hidden px-5 py-20 md:px-10 md:py-32">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <div className="reveal relative">
          <div className="-rotate-2 overflow-hidden border border-border">
            <img
              src="images/tee-print.jpg"
              alt="Футболка МАЗОК — принт на спине"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-10 -right-4 w-40 rotate-2 overflow-hidden border-4 border-background shadow-2xl md:w-56">
            <img
              src="images/tee-washed.jpg"
              alt="Футболка ВАРЁНКА"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <ScribbleArrow className="absolute -left-6 bottom-6 w-20 -rotate-12 text-[hsl(var(--accent))] md:w-28" />
        </div>

        <div className="reveal">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[hsl(var(--accent))]">
            Дроп 02 · июль 2026
          </p>
          <h2 className="font-display text-3xl font-black uppercase leading-[1.05] md:text-5xl">
            МАЗОК —
            <br />
            принт, нарисованный
            <br />
            <span className="text-outline-accent">рукой, а не промптом</span>
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            Один мазок широкой кистью, отсканированный без ретуши — со всеми
            подтёками и неровными краями. Шелкография в четыре прогона,
            поэтому принт чувствуется пальцами. Тираж 150 штук, номер проставляем от руки.
          </p>
          <a
            href="#catalog"
            className="btn-tactile mt-8 inline-flex items-center gap-3 border border-foreground px-8 py-4 text-sm font-black uppercase tracking-[0.15em] hover:bg-[hsl(var(--accent))] hover:text-black hover:border-transparent"
          >
            Успеть взять
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
