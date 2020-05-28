import React from 'react';
import convertPrice from 'src/utils/convertPrice';
import {addToCart, removeOne, removeAll} from '../../../redux/dataFetchSaga/actions'
import { connect } from 'react-redux';

const CartRow = ({item, count, addToCart, loading, removeOne, removeAll}) => {
  const price = convertPrice(item.price * count)

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

const mapDispatchToProps = ({global: {loading}}) => ({
  loading
})

export default connect(mapDispatchToProps, {addToCart, removeOne, removeAll})(CartRow);