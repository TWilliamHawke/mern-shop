import { loadImage } from "src/redux/dataFetchSaga/actions";
import { useDispatch, useSelector } from "react-redux";

export const useItemImage = () => {
  const dispatch = useDispatch()


  const imageHandler = e => {
    const file = e.target.files[0]
    if(!file) return
    const formData = new FormData();
    formData.append('itemImg', file)
    dispatch(loadImage(formData))
  }

  const {imageUrl} = useSelector(state => state.template)

  return {imageHandler, imageUrl}
}