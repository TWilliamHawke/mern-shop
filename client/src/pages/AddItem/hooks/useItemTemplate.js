import { useSelector, useDispatch } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { loadTemplate } from 'src/redux/dataFetchSaga/actions'
import { clearTemplateData } from 'src/redux/templateReducer/actions';


export const useItemTemplate = () => {
  const {
    category, saveItemSuccess, itemData: oldItemData
  } = useSelector(state => state.template)
  const dispatch = useDispatch()
  const history = useHistory()
  const params = useParams()

  const [itemData, setItemData] = useState({
    itemTitle: '',
    itemPrice: '',
    itemDiscount: '',
  })

  useEffect(() => {
    if(!category) return
    if(!oldItemData) return setItemData({
      ...itemData,
      brand: category.brands[0]
    })
    const {title, price, discountPrice, brand} = oldItemData

    setItemData({
      itemTitle: title,
      itemPrice: price,
      itemDiscount: discountPrice,
      brand,
    })

    // eslint-disable-next-line
  }, [category, oldItemData])

  useEffect(() => {
    const payload = {cat: params.name, item: params.item}
    dispatch(loadTemplate(payload))
    return () => dispatch(clearTemplateData())
    // eslint-disable-next-line
  }, [params.name, dispatch])

  useEffect(() => {
    if(!saveItemSuccess) return
    history.push(`/catalog/${params.name}/`)
    // eslint-disable-next-line
  }, [saveItemSuccess])

  const inputHandler = e => {
    const {id, value} = e.target
    setItemData(oldData => ({
      ...oldData,
      [id]: value
    }))
  }


  return {itemData, oldItemData, inputHandler, category}


}