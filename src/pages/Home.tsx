import Navbar from '@/sections/Navbar'
import Hero from '@/sections/Hero'
import Marquee from '@/sections/Marquee'
import Catalog from '@/sections/Catalog'
import Manifesto from '@/sections/Manifesto'
import Lookbook from '@/sections/Lookbook'
import Contacts from '@/sections/Contacts'
import Footer from '@/sections/Footer'
import CartDrawer from '@/components/CartDrawer'
import { CartProvider } from '@/store/cart'
import { useReveal } from '@/hooks/useReveal'

export default function Home() {
  useReveal()
  return (
    <CartProvider>
      <div className="grain min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <Catalog />
          <Manifesto />
          <Lookbook />
          <Contacts />
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
