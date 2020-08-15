import { all } from "redux-saga/effects";
import { api } from 'src/api'
import { takeFetchForAllSaga, takeFetchSaga } from "../dataFetchSaga/sagas";
import { loadCategorySuccess, loadItemSuccess, fetchFiltersSuccess } from "../itemReducer/actions";
import { fetchPopularSuccess } from "../globalReducer/actions";
import { GET_CATEGORY, GET_ITEM, GET_FILTERS, ADD_POPULAR, REMOVE_POPULAR, GET_POPULAR } from "./types";


export default function*(): Generator {
  yield all([
    takeFetchForAllSaga(GET_CATEGORY, loadCategorySuccess, api.item.fetchCategory),
    takeFetchForAllSaga(GET_ITEM, loadItemSuccess, api.item.fetchItem),
    takeFetchForAllSaga(GET_FILTERS, fetchFiltersSuccess, api.item.fetchFilters),
    //popular
    takeFetchSaga(ADD_POPULAR, loadItemSuccess, api.item.addPopular),
    takeFetchSaga(REMOVE_POPULAR, loadItemSuccess, api.item.removePoupular),
    takeFetchForAllSaga(GET_POPULAR, fetchPopularSuccess, api.item.getPopular),
  ])
}