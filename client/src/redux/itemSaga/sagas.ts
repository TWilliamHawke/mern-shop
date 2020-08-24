import { all } from "redux-saga/effects";
import { api } from 'src/api'
import { takeFetchForAllSaga, takeFetchSaga } from "../dataFetchSaga/sagas";
import { loadCategorySuccess, loadItemSuccess, fetchFiltersSuccess } from "../itemReducer/actions";
import { fetchPopularSuccess } from "../globalReducer/actions";
import * as types from "./types";


export default function*(): Generator {
  yield all([
    takeFetchForAllSaga(types.GET_CATEGORY, loadCategorySuccess, api.item.fetchCategory),
    takeFetchForAllSaga(types.GET_ITEM, loadItemSuccess, api.item.fetchItem),
    takeFetchForAllSaga(types.GET_FILTERS, fetchFiltersSuccess, api.item.fetchFilters),
    //popular
    takeFetchSaga(types.ADD_POPULAR, loadItemSuccess, api.item.addPopular),
    takeFetchSaga(types.REMOVE_POPULAR, loadItemSuccess, api.item.removePoupular),
    takeFetchForAllSaga(types.GET_POPULAR, fetchPopularSuccess, api.item.getPopular),
  ])
}