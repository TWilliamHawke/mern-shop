import { all } from "redux-saga/effects";
import { takeFetchSaga } from "../dataFetchSaga/sagas";
import { api } from "src/api";
import { getFieldsSuccess, clearTemplateData, loadTemplateSuccess, saveTemplateSuccess, loadImageSuccess, addItemSuccess } from "../templateReducer/actions";
import { SAVE_TEMPLATE, LOAD_TEMPLATE, EDIT_FIELD, ADD_FIELD, GET_FIELDS, LOAD_IMAGE, ADD_ITEM, EDIT_ITEM } from "./types";

export default function*(): Generator {
  yield all([
    takeFetchSaga(SAVE_TEMPLATE, saveTemplateSuccess, api.template.saveTemplate),
    takeFetchSaga(LOAD_TEMPLATE, loadTemplateSuccess, api.item.fetchTemplate),
    takeFetchSaga(EDIT_FIELD, clearTemplateData, api.template.editTemplate),
    takeFetchSaga(ADD_FIELD, clearTemplateData, api.template.addField),
    takeFetchSaga(GET_FIELDS, getFieldsSuccess, api.template.getFields),
    //editItem
    takeFetchSaga(LOAD_IMAGE, loadImageSuccess, api.item.fetchImg),
    takeFetchSaga(ADD_ITEM, addItemSuccess, api.item.addItem),
    takeFetchSaga(EDIT_ITEM, addItemSuccess, api.item.editItem),

  ])
}