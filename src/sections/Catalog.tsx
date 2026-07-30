import { products, SIZES, formatPrice, type Product } from '@/data/products'
import { useCart } from '@/store/cart'

function ProductCard({ p, index }: { p: Product; index: number }) {
  const { add } = useCart()
  return (
    <article className="group reveal relative" style={{ transitionDelay: `${(index % 3) * 90}ms` }}>
      <div className="relative aspect-[2/3] overflow-hidden bg-secondary">
        <img
          src={p.image}
          alt={`Футболка ${p.name}`}
          loading="lazy"
          className="card-img h-full w-full object-cover"
        />
        {p.tag && (
          <span className="absolute left-3 top-3 bg-[hsl(var(--accent))] px-2.5 py-1 font-display text-[10px] font-extrabold uppercase tracking-widest text-black">
            {p.tag}
          </span>
        )}
        {/* размеры появляются при наведении */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-black/85 p-3 backdrop-blur-sm transition-transform duration-300 ease-out group-hover:translate-y-0">
          <p className="mb-2 text-center text-[10px] font-bold uppercase tracking-[0.25em] text-white/60">
            Выбери размер
          </p>
          <div className="flex justify-center gap-2">
            {SIZES.map((s) => (
              <button
                key={s}
                onClick={() => add(p, s)}
                className="btn-tactile w-10 border border-white/40 py-2 text-xs font-bold text-white hover:bg-[hsl(var(--accent))] hover:text-black hover:border-transparent"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-start justify-between pt-3">
        <div>
          <h3 className="font-display text-sm font-extrabold uppercase tracking-wide">{p.name}</h3>
          <p className="mt-1 text-xs text-muted-foreground">{p.desc}</p>
        </div>
        <p className="whitespace-nowrap text-sm font-bold">{formatPrice(p.price)}</p>
      </div>
    </article>
  )
}

export default function Catalog() {
  return (
    <section id="catalog" className="px-5 py-20 md:px-10 md:py-28">
      <div className="reveal mb-10 flex items-end justify-between md:mb-14">
        <h2 className="font-display text-4xl font-black uppercase leading-none md:text-6xl">
          Каталог
        </h2>
        <p className="hidden text-right text-xs uppercase tracking-[0.25em] text-muted-foreground md:block">
          6 моделей · один крой
          <br />
          дроп 02 — лето 2026
        </p>
      </div>
      <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p, i) => (
          <ProductCard key={p.id} p={p} index={i} />
        ))}
      </div>
    </section>
  )
}
