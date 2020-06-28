import React, { FC } from 'react';
import Spinner from '../../components/Spinner'
import CartTable from './components/CartTable';
import { useCartData } from './hooks/useCartData';
import './cart-page.scss'

export const CartPage: FC = () => {
  const { cart, loading } = useCartData()

  if(!cart) return <Spinner />

  const cartData = cart.length 
    ? <CartTable cart={cart} loading={loading} />
    : <p>Cart is Empty</p>

  return (
    <div className='full-page cart-page'>
      <h2>Your Cart</h2>
      {cartData}
    </div>
  );
};

export default CartPage;