import { Send, MapPin, Package } from 'lucide-react'

const facts = [
  {
    icon: Package,
    title: 'Доставка и оплата',
    text: 'СДЭК и Почта России по всей стране, 2–7 дней. По Москве — курьер в день заказа. Оплата картой или при получении.',
  },
  {
    icon: MapPin,
    title: 'Шоурум',
    text: 'Москва, Нижняя Сыромятническая, 10, стр. 2. Пт–Вс, 12:00–20:00. Примерить можно всё, кофе — за наш счёт.',
  },
  {
    icon: Send,
    title: 'Телеграм',
    text: 'Все дропы анонсируем сначала в канале. Подписчики видят новинки за сутки до сайта.',
  },
]

export default function Contacts() {
  return (
    <section id="contacts" className="border-t border-border px-5 py-20 md:px-10 md:py-28">
      <h2 className="reveal mb-12 font-display text-4xl font-black uppercase md:mb-16 md:text-6xl">
        Контакты
      </h2>
      <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
        {facts.map((f) => (
          <div key={f.title} className="reveal bg-background p-8 transition-colors hover:bg-secondary/50">
            <f.icon size={28} strokeWidth={1.6} className="mb-5 text-[hsl(var(--accent))]" />
            <h3 className="mb-3 font-display text-sm font-extrabold uppercase tracking-widest">
              {f.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{f.text}</p>
          </div>
        ))}
      </div>
      <div className="reveal mt-10 flex flex-wrap items-center gap-4">
        <a
          href="https://t.me/"
          target="_blank"
          rel="noreferrer"
          className="btn-tactile inline-flex items-center gap-3 bg-foreground px-8 py-4 text-sm font-black uppercase tracking-[0.15em] text-background"
        >
          <Send size={16} />
          Написать в Telegram
        </a>
        <a
          href="mailto:privet@forma.wear"
          className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground underline-offset-4 transition hover:text-foreground hover:underline"
        >
          privet@forma.wear
        </a>
      </div>
    </section>
  )
}
