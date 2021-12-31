import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './UserOrderDetail.scss';

import { OrderDetailInfo } from './OrderDetailInfo/OrderDetailInfo';
import { OrderDetailContact } from './OrderDetailContact/OrderDetailContact';
import { OrderDetailMain } from './OrderDetailMain/OrderDetailMain';
import { OrderDetailItem } from './OrderDetailItem/OrderDetailItem';

import orderApi from '../../services/aixos/orderApi';
import { Spinner } from 'react-bootstrap';

export const UserOrderDetail = () => {
  const { ID }: { ID: string } = useParams();
  const className = 'order-detail';
  const [order, setOrder] = useState<IOrder>();

  console.log('ID: ', ID);

  const fetchOrder = async () => {
    const dataOrder = (await orderApi.getOrderByIDOrder({ IDOrder: ID })).data;
    setOrder(dataOrder);
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  console.log(order);

  return order ? (
    <div className={`${className}`}>
      <OrderDetailInfo
        IDOrder={order.IDOrder}
        OrderDate={order.OrderDate}
        Price={order.Price}
      ></OrderDetailInfo>
      <div className={`${className}__border-block`}></div>
      <OrderDetailContact IDOrder={order.IDOrder} Status={order.Status}></OrderDetailContact>
      <div className={`${className}__border-block`}></div>
      <OrderDetailMain></OrderDetailMain>
      <div className={`${className}__border-block`}></div>
      <OrderDetailItem></OrderDetailItem>
    </div>
  ) : (
    <div className="order-null">
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="info" />
      <Spinner animation="grow" variant="light" />
      <Spinner animation="grow" variant="dark" />
    </div>
  );
};
