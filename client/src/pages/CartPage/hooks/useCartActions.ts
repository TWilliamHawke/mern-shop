import { useDispatch } from "react-redux"
import { addToCart, removeOne, removeAll } from "src/redux/ordersSaga/actions"
import { MakeOrderAction, AddToCartAction, RemoveAllAction, RemoveOneAction } from "src/redux/ordersSaga/types"
import { makeOrder } from 'src/redux/ordersSaga/actions'

type UseCartActionsType = {
  makeOrder: (a: number) => MakeOrderAction
  addToCart: (id: string) => AddToCartAction
  removeAll: (id: string) => RemoveAllAction
  removeOne: (id: string) => RemoveOneAction
}

export const useCartActions = (): UseCartActionsType => {
  const dispatch = useDispatch()


  return {
    makeOrder: (cost: number) => dispatch(makeOrder(cost)),
    addToCart: (id: string) => dispatch(addToCart(id)),
    removeOne: (id: string) => dispatch(removeOne(id)),
    removeAll: (id: string) => dispatch(removeAll(id)),
  }
}