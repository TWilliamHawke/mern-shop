import React from 'react';
import convertPrice from '../../../utils/convertPrice';
import { cancelOrder } from '../../../redux/dataFetchSaga/actions'
import { connect } from 'react-redux';
import { convertDate } from '../../../utils/convertDate';

export const OrderCard = ({data, num, cancelOrder, isAdmin}) => {

  const cost = convertPrice(data.cost)
  const date = convertDate(data.date)
  
  console.log(data)

  return (
    <div className='order-card'>
      <div className='order-card-list'>
        <p className='order-card-header'><span>Order #{num},</span> made at <i>{date}</i>
        {isAdmin && <> by user <i>{data.login}</i></>}
        </p>
        {data.items.map(({id, title, count}) => <p key={id}><b>{title}</b> x{count}</p>)}
      </div>
      <div className='order-card-cost'>
        <p>{cost}</p>
        {!isAdmin && <button className='config-btn' onClick={() => cancelOrder(data._id)}>Cancel Order</button>}
        {isAdmin && <button className='config-btn' >Do something</button>}
      </div>
    </div>
  );
};

export default connect(null, {cancelOrder})(OrderCard);