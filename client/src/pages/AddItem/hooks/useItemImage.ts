import { loadImage } from "src/redux/dataFetchSaga/actions";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "src/redux/store";
import { TemplateStore } from "src/redux/templateReducer/templateReducer";
import { ChangeEvent } from "react";

type UseItemImageType = {
  imageHandler: (e: ChangeEvent<HTMLInputElement>) => void
  imageUrl: string
}

export const useItemImage = (): UseItemImageType => {
  const dispatch = useDispatch()


  const imageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    const file = e.target?.files[0]
    if(!file) return
    const formData = new FormData();
    formData.append('itemImg', file)
    dispatch(loadImage(formData))
  }

  const {imageUrl} = useSelector<AppState, TemplateStore>(state => state.template)

  return {imageHandler, imageUrl}
}