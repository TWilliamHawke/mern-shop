import { authServise } from './auth'
import { itemApi } from './itemApi'
import { OrdersApi } from './ordersApi'
import { editTemplateApi } from './editTemplate'


export const api = {
  auth: authServise,
  item: itemApi,
  orders: OrdersApi,
  template: editTemplateApi
}