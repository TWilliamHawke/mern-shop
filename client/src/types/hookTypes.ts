import { CategoriesType } from "src/redux/globalReducer/globalReducer";


export type ParamsType = {
  name: keyof CategoriesType
  item: string
}