import React, { FC } from 'react';
import convertPrice from 'src/utils/convertPrice';
import { convertDate } from 'src/utils/convertDate';
import { OrderType } from 'src/types/ordersDataTypes';
import { CancelOrderAction } from 'src/redux/dataFetchSaga/types';

type PropTypes = {
  data: OrderType
  num: number
  cancelOrder: (id: string) => CancelOrderAction
  isAdmin: boolean
}

export const OrderCard: FC<PropTypes> = ({data, num, cancelOrder, isAdmin}) => {

  const cost = convertPrice(data.cost)
  const date = convertDate(data.date)
  
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

export default OrderCard;