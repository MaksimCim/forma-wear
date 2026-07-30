export interface Product {
  id: string
  name: string
  price: number
  image: string
  tag?: string
  desc: string
}

export const SIZES = ['S', 'M', 'L', 'XL'] as const

export const products: Product[] = [
  {
    id: 'black',
    name: 'ЧЁРНАЯ БАЗА',
    price: 3900,
    image: 'images/tee-black.jpg',
    tag: 'NEW',
    desc: 'Оверсайз, плотность 240 г/м²',
  },
  {
    id: 'white',
    name: 'БЕЛАЯ БАЗА',
    price: 3900,
    image: 'images/tee-white.jpg',
    desc: 'Крой бокси, вышивка на груди',
  },
  {
    id: 'gray',
    name: 'МЕЛАНЖ',
    price: 4200,
    image: 'images/tee-gray.jpg',
    desc: 'Спущенное плечо, стоячий ворот',
  },
  {
    id: 'print',
    name: 'МАЗОК',
    price: 4900,
    image: 'images/tee-print.jpg',
    tag: 'NEW',
    desc: 'Принт на спине, шелкография',
  },
  {
    id: 'washed',
    name: 'ВАРЁНКА',
    price: 4400,
    image: 'images/tee-washed.jpg',
    desc: 'Кислотная стирка, эффект винтажа',
  },
  {
    id: 'cream',
    name: 'ЭКРЮ',
    price: 4200,
    image: 'images/tee-cream.jpg',
    desc: 'Небелёный хлопок, плотная вязка',
  },
]

export const formatPrice = (n: number) =>
  n.toLocaleString('ru-RU') + ' ₽'
