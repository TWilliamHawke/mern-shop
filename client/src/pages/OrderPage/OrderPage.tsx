import React, { FC } from 'react';
import OrderCard from './components/OrderCard';
import { useOrdersData } from './hooks/useOrdersData';
import './order-page.scss'

type PropTypes = {
  all: boolean
}

export const OrderPage: FC<PropTypes> = ({ all }) => {
  const {cancelOrder, orders} = useOrdersData(all)

  const text = all ? 'Users' : 'You'

  return (
    <div className='full-page order-page'>
      {all ? <h2>Orders</h2> : <h2>Your Orders</h2>}
      {!orders.length && <p>{text} haven`t any orders</p> }
      {orders.map((order, idx) => 
        <OrderCard key={order._id} cancelOrder={cancelOrder} isAdmin={all} data={order} num={idx+1} />)}
    </div>
  );
};

export default OrderPage;