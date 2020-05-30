import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {getAllOrders, getMyOrders} from '../../redux/dataFetchSaga/actions'
import OrderCard from './components/OrderCard';
import './order-page.scss'

export const OrderPage = ({all, getAllOrders, getMyOrders, orders}) => {

  useEffect(() => {
    if(all) {
      getAllOrders()
    } else {
      getMyOrders()
    }
    // eslint-disable-next-line
  }, [])


  return (
    <div className='full-page order-page'>
      {!all && <h2>Your Orders</h2>}
      {all && <h2>Orders</h2>}
      {!orders.length && !all && <p>You haven`t any orders</p> }
      {!orders.length && all && <p>Users haven`t any orders</p> }
      {orders.map((order, idx) => <OrderCard key={order._id} isAdmin={all} data={order} num={idx+1} />)}
    </div>
  );
};

const mapStatetoProps = ({orders: {orders}}) => ({
  orders
})

export default connect(mapStatetoProps, {getAllOrders, getMyOrders})(OrderPage);