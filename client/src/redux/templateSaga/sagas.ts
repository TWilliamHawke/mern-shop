import { all } from "redux-saga/effects";
import { takeFetchSaga } from "../dataFetchSaga/sagas";
import { api } from "src/api";
import { getFieldsSuccess, clearTemplateData, loadTemplateSuccess, saveTemplateSuccess, loadImageSuccess, addItemSuccess } from "../templateReducer/actions";
import * as types from "./types";

export default function*(): Generator {
  yield all([
    takeFetchSaga(types.SAVE_TEMPLATE, saveTemplateSuccess, api.template.saveTemplate),
    takeFetchSaga(types.LOAD_TEMPLATE, loadTemplateSuccess, api.item.fetchTemplate),
    takeFetchSaga(types.EDIT_FIELD, clearTemplateData, api.template.editTemplate),
    takeFetchSaga(types.ADD_FIELD, clearTemplateData, api.template.addField),
    takeFetchSaga(types.GET_FIELDS, getFieldsSuccess, api.template.getFields),
    //editItem
    takeFetchSaga(types.LOAD_IMAGE, loadImageSuccess, api.item.fetchImg),
    takeFetchSaga(types.ADD_ITEM, addItemSuccess, api.item.addItem),
    takeFetchSaga(types.EDIT_ITEM, addItemSuccess, api.item.editItem),

  ])
}