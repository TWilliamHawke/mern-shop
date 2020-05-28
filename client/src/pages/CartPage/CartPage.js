import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCart } from '../../redux/dataFetchSaga/actions'
import Spinner from '../../components/Spinner'
import CartTable from './components/CartTable';

import './cart-page.scss'

export const CartPage = ({getCart, cart}) => {

  useEffect(() => {
    getCart()
    // eslint-disable-next-line
  }, [])

  if(!cart) return <Spinner />

  return (
    <div className='full-page'>
      <h2>CartPage</h2>
      {cart.length ? <CartTable cart={cart} /> : <p>Cart is Empty</p>}
    </div>
  );
};

const mapStateToProps = ({orders: {cart}}) => ({
  cart
})

export default connect(mapStateToProps, {getCart})(CartPage);