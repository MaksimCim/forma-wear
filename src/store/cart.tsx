import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'
import type { Product } from '@/data/products'

export interface CartItem {
  product: Product
  size: string
  qty: number
}

interface CartState {
  items: CartItem[]
  isOpen: boolean
  promoApplied: boolean
  setOpen: (v: boolean) => void
  add: (p: Product, size: string) => void
  remove: (id: string, size: string) => void
  setQty: (id: string, size: string, qty: number) => void
  applyPromo: (code: string) => boolean
  clear: () => void
  total: number
  count: number
}

const CartContext = createContext<CartState | null>(null)

/* тихий тактильный «клик» — как на сайтах из #insprrrrr */
function playTick() {
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = 'sine'
    osc.frequency.setValueAtTime(1400, ctx.currentTime)
    osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.08)
    gain.gain.setValueAtTime(0.08, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.09)
    osc.connect(gain).connect(ctx.destination)
    osc.start()
    osc.stop(ctx.currentTime + 0.1)
    osc.onended = () => ctx.close()
  } catch {
    /* звук — приятный бонус, не обязанность */
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setOpen] = useState(false)
  const [promoApplied, setPromoApplied] = useState(false)

  const add = useCallback((p: Product, size: string) => {
    playTick()
    setItems((prev) => {
      const i = prev.findIndex((x) => x.product.id === p.id && x.size === size)
      if (i >= 0) {
        const next = [...prev]
        next[i] = { ...next[i], qty: next[i].qty + 1 }
        return next
      }
      return [...prev, { product: p, size, qty: 1 }]
    })
    setOpen(true)
  }, [])

  const remove = useCallback((id: string, size: string) => {
    setItems((prev) => prev.filter((x) => !(x.product.id === id && x.size === size)))
  }, [])

  const setQty = useCallback((id: string, size: string, qty: number) => {
    if (qty <= 0) {
      setItems((prev) => prev.filter((x) => !(x.product.id === id && x.size === size)))
      return
    }
    setItems((prev) =>
      prev.map((x) => (x.product.id === id && x.size === size ? { ...x, qty } : x)),
    )
  }, [])

  const applyPromo = useCallback((code: string) => {
    const ok = code.trim().toUpperCase() === 'ФОРМА10'
    if (ok) setPromoApplied(true)
    return ok
  }, [])

  const clear = useCallback(() => {
    setItems([])
    setPromoApplied(false)
  }, [])

  const { total, count } = useMemo(() => {
    const sum = items.reduce((s, x) => s + x.product.price * x.qty, 0)
    return {
      total: promoApplied ? Math.round(sum * 0.9) : sum,
      count: items.reduce((s, x) => s + x.qty, 0),
    }
  }, [items, promoApplied])

  const value = useMemo(
    () => ({
      items, isOpen, promoApplied, setOpen, add, remove, setQty, applyPromo, clear, total, count,
    }),
    [items, isOpen, promoApplied, add, remove, setQty, applyPromo, clear, total, count],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart outside provider')
  return ctx
}
