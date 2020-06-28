import React, { FC } from 'react';
import convertPrice from 'src/utils/convertPrice'
import CartRow from './CartRow'
import { CartDataType } from 'src/types/ordersDataTypes';
import { useCartActions } from '../hooks/useCartActions';

type PropTypes = {
  cart: CartDataType
  loading: boolean
}

const CartTable: FC<PropTypes> = ({ cart, loading }) => {
  const cost = cart.reduce((sum, {item, count}) => sum + item.price*count, 0)
  const { makeOrder } = useCartActions()

  const cartBody = cart.map(({item, count}) =>
    <CartRow
      loading={loading}
      item={item} count={count}
      key={item._id} />)
  
  return (
    <div className='cart-table-wrapper'>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Count</th>
            <th>Price</th>
            <th>Del</th>
          </tr>
        </thead>
        <tbody>
          { cartBody }
        </tbody>
      </table>
      <p>Total: {convertPrice(cost)}</p>
      <button
        disabled={loading}
        onClick={() => makeOrder(cost)}
        className='btn-submit btn-blue'>
        Make order
      </button>
    </div>
  );
};

export default CartTable;