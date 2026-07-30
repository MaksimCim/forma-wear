export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-black">
      <div className="flex flex-wrap items-center justify-between gap-4 px-5 pt-8 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/50 md:px-10">
        <a href="#catalog" className="transition hover:text-white">Каталог</a>
        <a href="#contacts" className="transition hover:text-white">Доставка и оплата</a>
        <a href="https://t.me/" target="_blank" rel="noreferrer" className="transition hover:text-white">
          Telegram
        </a>
        <a href="#home" className="transition hover:text-white">Наверх ↑</a>
      </div>
      {/* «болдовый футер» — гигантский логотип, как советует канал */}
      <div className="select-none px-2 text-center font-display text-[22vw] font-black leading-[0.8] tracking-tight text-white/95 md:text-[19vw]">
        ФОРМА
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2 px-5 pb-6 text-[10px] uppercase tracking-[0.2em] text-white/40 md:px-10">
        <span>© 2026 ФОРМА</span>
        <span>Сделано на коленке, сшито как надо</span>
      </div>
    </footer>
  )
}
