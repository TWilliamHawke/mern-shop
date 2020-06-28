import { ItemDataType } from "./itemsDataType"

export type OrderType = {
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

export type CartItemType = {
  id: string
  item: ItemDataType
  count: number
}

export type CartDataType = CartItemType[]