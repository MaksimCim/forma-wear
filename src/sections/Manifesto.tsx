export default function Manifesto() {
  return (
    <section className="border-y border-border px-5 py-20 md:px-10 md:py-32">
      <div className="reveal mx-auto max-w-5xl">
        <p className="mb-6 text-xs font-bold uppercase tracking-[0.35em] text-[hsl(var(--accent))]">
          Манифест
        </p>
        <h2 className="font-display text-3xl font-black uppercase leading-[1.05] md:text-6xl">
          Мы шьём футболки,
          <br />
          <span className="text-outline">которые не нужно</span>
          <br />
          гладить<span className="text-[hsl(var(--accent))]">.</span>
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            Плотный хлопок 240 г/м² — такой стоит сам. Крой мы пересматривали четыре раза,
            пока футболка не начала сидеть одинаково хорошо на всех, кто её примерил.
            Ворот не растягивается, потому что мы за этого ворот отвечаем лично.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            Никаких коллабораций ради коллабораций и принтов ради принтов.
            Шесть моделей, один силуэт, честная цена. Если находите дырку раньше,
            чем через год — пишите, заменим без вопросов.
          </p>
        </div>
      </div>
    </section>
  )
}
