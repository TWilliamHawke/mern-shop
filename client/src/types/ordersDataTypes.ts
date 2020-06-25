type OrderType = {
  _id: string
  userId: string
  login: string
  cost: number
  items: {
    _id: string
    title: string
    id: string
    count: number
  }[]
  date: Date
}

export type OrdersDataType = OrderType[]

type CartItem = {
  id: string
  item: {
    title: string
    price: number
  }
  count: number
}

export type CartDataType = CartItem[]