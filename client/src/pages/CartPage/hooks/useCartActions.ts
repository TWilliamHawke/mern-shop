import { useDispatch } from "react-redux"
import { makeOrder, addToCart, removeOne, removeAll } from "src/redux/dataFetchSaga/actions"
import { MakeOrderAction, AddToCartAction, RemoveAllAction, RemoveOneAction } from "src/redux/dataFetchSaga/types"

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