import { useDispatch, useSelector } from "react-redux"
import { AppState } from "src/redux/store"
import { GlobalStore } from "src/redux/globalReducer/globalReducer"
import { useEffect } from "react"
import { getPopular } from "src/redux/dataFetchSaga/actions"
import { CategoryDataType } from "src/types/itemsDataType"

type HookData = {
  popular: CategoryDataType
}

export const usePopularData = (): HookData => {
  const dispatch = useDispatch()
  const { popular } = useSelector<AppState, GlobalStore>(store => store.global)

  useEffect(() => {
    dispatch(getPopular())

    // eslint-disable-next-line
  }, [dispatch])

  return { popular }

}