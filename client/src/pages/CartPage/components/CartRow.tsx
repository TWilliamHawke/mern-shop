import React, { FC } from 'react';
import convertPrice from 'src/utils/convertPrice';
import { useCartActions } from '../hooks/useCartActions';
import { ItemDataType } from 'src/types/itemsDataType';

type PropTypes = {
  item: ItemDataType,
  count: number
  loading: boolean
}

const CartRow: FC<PropTypes> = ({ item, count, loading }) => {
  const price = convertPrice(item.price * count)
  const { addToCart, removeAll, removeOne } = useCartActions()

  return (
    <tr >
      <td>{item.title}</td>
      <td>
        <button disabled={count < 2 || loading} onClick={() => removeOne(item._id)}>-</button>
        {count}
        <button disabled={loading} onClick={() => addToCart(item._id)}>+</button>
      </td>
      <td>{price}</td>
      <td>
        <button  onClick={() => removeAll(item._id)}>Del</button>
      </td>
    </tr>
  )
}

export default CartRow;