import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/store/cart'

const links = [
  { href: '#catalog', label: 'Каталог' },
  { href: '#drop', label: 'Дроп' },
  { href: '#contacts', label: 'Контакты' },
]

export default function Navbar() {
  const { count, setOpen } = useCart()
  return (
    <header className="fixed inset-x-0 top-0 z-50 mix-blend-difference">
      <nav className="flex items-center justify-between px-5 py-4 text-white md:px-10">
        <a href="#home" className="font-display text-lg font-extrabold tracking-tight md:text-xl">
          ФОРМА<span className="align-super text-[0.55em]">®</span>
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70 transition hover:opacity-100"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setOpen(true)}
          className="btn-tactile relative flex items-center gap-2 border border-white/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em]"
          aria-label="Открыть корзину"
        >
          <ShoppingBag size={14} strokeWidth={2.4} />
          <span className="hidden sm:inline">Корзина</span>
          {count > 0 && (
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[hsl(var(--accent))] text-[10px] font-black text-black">
              {count}
            </span>
          )}
        </button>
      </nav>
    </header>
  )
}
