import React from 'react';
import convertPrice from 'src/utils/convertPrice'
import CartRow from './CartRow'
import { connect } from 'react-redux';
import { makeOrder } from '../../../redux/dataFetchSaga/actions'

const CartTable = ({cart, loading, makeOrder}) => {
  const cost = cart.reduce((sum, {item, count}) => sum + item.price*count, 0)
  
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
        {cart.map(({item, count}) => <CartRow item={item} count={count} key={item._id} />)}
      </tbody>
    </table>
    <p>Total: {convertPrice(cost)}</p>
    <button disabled={loading} onClick={() => makeOrder(cost)} className='btn-submit btn-blue'>Make order</button>
    </div>
  );
};

const mapStateToProps = ({global: {loading}}) => ({
  loading
})

export default connect(mapStateToProps, {makeOrder})(CartTable);