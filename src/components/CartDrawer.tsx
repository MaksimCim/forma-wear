import { useState } from 'react'
import { Minus, Plus, Trash2, CheckCircle2 } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet'
import { useCart } from '@/store/cart'
import { formatPrice } from '@/data/products'

export default function CartDrawer() {
  const { items, isOpen, setOpen, setQty, remove, total, promoApplied, applyPromo, clear } = useCart()
  const [promo, setPromo] = useState('')
  const [promoError, setPromoError] = useState(false)
  const [ordered, setOrdered] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', comment: '' })

  const submitOrder = (e: React.FormEvent) => {
    e.preventDefault()
    setOrdered(true)
    clear()
  }

  const tryPromo = () => {
    const ok = applyPromo(promo)
    setPromoError(!ok)
    if (ok) setPromo('')
  }

  const close = (v: boolean) => {
    setOpen(v)
    if (!v) {
      setOrdered(false)
      setPromoError(false)
    }
  }

  return (
    <Sheet open={isOpen} onOpenChange={close}>
      <SheetContent
        side="right"
        className="flex w-full flex-col border-l border-border bg-background p-0 sm:max-w-md"
      >
        <SheetHeader className="border-b border-border px-6 py-5 text-left">
          <SheetTitle className="font-display text-lg font-extrabold uppercase tracking-wide">
            {ordered ? 'Заказ принят' : 'Ваш заказ'}
          </SheetTitle>
          <SheetDescription className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {ordered ? 'Спасибо!' : `${items.length} позиций`}
          </SheetDescription>
        </SheetHeader>

        {ordered ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
            <CheckCircle2 size={56} strokeWidth={1.4} className="text-[hsl(var(--accent))]" />
            <p className="font-display text-base font-bold uppercase">Форма уже греется</p>
            <p className="text-sm text-muted-foreground">
              Напишем в Telegram или на телефон в течение часа,
              чтобы подтвердить заказ и доставку.
            </p>
            <button
              onClick={() => close(false)}
              className="btn-tactile mt-4 border border-foreground px-8 py-3 text-xs font-black uppercase tracking-[0.2em]"
            >
              Продолжить смотреть
            </button>
          </div>
        ) : items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-8 text-center">
            <p className="font-display text-base font-bold uppercase text-muted-foreground">
              Пока пусто
            </p>
            <p className="text-sm text-muted-foreground">
              Наведи на футболку в каталоге и выбери размер — она появится здесь.
            </p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <ul className="divide-y divide-border">
                {items.map((x) => (
                  <li key={`${x.product.id}-${x.size}`} className="flex gap-4 py-4">
                    <img
                      src={x.product.image}
                      alt={x.product.name}
                      className="h-24 w-16 shrink-0 object-cover"
                    />
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-display text-xs font-extrabold uppercase">
                            {x.product.name}
                          </p>
                          <p className="mt-1 text-xs text-muted-foreground">
                            Размер {x.size} · {formatPrice(x.product.price)}
                          </p>
                        </div>
                        <button
                          onClick={() => remove(x.product.id, x.size)}
                          className="text-muted-foreground transition hover:text-destructive"
                          aria-label="Убрать"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                      <div className="mt-auto flex items-center gap-3 pt-2">
                        <button
                          onClick={() => setQty(x.product.id, x.size, x.qty - 1)}
                          className="btn-tactile border border-border p-1.5"
                          aria-label="Меньше"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-4 text-center text-sm font-bold">{x.qty}</span>
                        <button
                          onClick={() => setQty(x.product.id, x.size, x.qty + 1)}
                          className="btn-tactile border border-border p-1.5"
                          aria-label="Больше"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {/* промокод — как на референсе */}
              <div className="mt-4">
                <div className="flex gap-2">
                  <input
                    value={promo}
                    onChange={(e) => { setPromo(e.target.value); setPromoError(false) }}
                    placeholder="Промокод"
                    className="flex-1 border border-input bg-transparent px-3 py-2.5 text-sm uppercase placeholder:normal-case placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                  <button
                    onClick={tryPromo}
                    className="btn-tactile border border-foreground px-4 text-xs font-bold uppercase tracking-widest"
                  >
                    Активировать
                  </button>
                </div>
                {promoApplied && (
                  <p className="mt-2 text-xs font-bold text-[hsl(var(--accent))]">
                    ФОРМА10 применён — скидка 10%
                  </p>
                )}
                {promoError && (
                  <p className="mt-2 text-xs text-destructive">Такого кода нет. Подсказка: ФОРМА10</p>
                )}
              </div>
            </div>

            <form onSubmit={submitOrder} className="border-t border-border px-6 py-5">
              <div className="space-y-3">
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Ваше имя"
                  className="w-full border border-input bg-transparent px-3 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                />
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="Ваш телефон"
                  className="w-full border border-input bg-transparent px-3 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                />
                <textarea
                  value={form.comment}
                  onChange={(e) => setForm({ ...form, comment: e.target.value })}
                  placeholder="Комментарий (необязательно)"
                  rows={2}
                  className="w-full resize-none border border-input bg-transparent px-3 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                />
              </div>
              <button
                type="submit"
                className="btn-tactile mt-4 w-full bg-[hsl(var(--accent))] py-4 font-display text-sm font-extrabold uppercase tracking-[0.2em] text-black"
              >
                Купить · {formatPrice(total)}
              </button>
              {promoApplied && (
                <p className="mt-2 text-center text-[10px] uppercase tracking-widest text-muted-foreground">
                  цена со скидкой 10%
                </p>
              )}
            </form>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
