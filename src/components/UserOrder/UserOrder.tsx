import React, { useEffect, useState } from 'react';
import './UserOrder.scss';

import Slider, { Settings } from 'react-slick';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import orderApi from '../../services/aixos/orderApi';
import { useAppSelector } from '../../redux';
import { RootState } from '../../redux/rootReducer';

export const UserOrder = () => {
  const titleOrder = [
    {
      quantity: 0,
      text: 'Tất Cả',
    },
    {
      quantity: 0,
      text: 'Chờ thanh toán',
    },
    {
      quantity: 0,
      text: 'Chờ xác nhận',
    },
    {
      quantity: 0,
      text: 'Đang xử lý',
    },
    {
      quantity: 0,
      text: 'Hoàn tất',
    },
    {
      quantity: 0,
      text: 'Bị hủy',
    },
  ];

  // useSelector
  const userInfo = useAppSelector((state: RootState) => state.userSlice.account);

  const [listOrder, setListOrder] = useState<Array<IOrder>>();

  const fetchOrder = async () => {
    const listOrder: any = await orderApi.getOrder({
      jwt: localStorage.getItem('jwt'),
      IDUser: userInfo.IDUser,
    });
    setListOrder(listOrder.data);
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  listOrder &&
    listOrder.map((item: any) => {
      switch (item.Status) {
        case 'Chờ thanh toán':
          titleOrder[1].quantity++;
          titleOrder[0].quantity++;
          break;
        case 'Chờ xác nhận':
          titleOrder[2].quantity++;
          titleOrder[0].quantity++;
          break;
        case 'Đang xử lý':
          titleOrder[3].quantity++;
          titleOrder[0].quantity++;
          break;
        case 'Hoàn tất':
          titleOrder[4].quantity++;
          titleOrder[0].quantity++;
          break;
        case 'Bị hủy':
          titleOrder[5].quantity++;
          titleOrder[0].quantity++;
          break;
        default:
          break;
      }
    });

  const [isFocus, setIsFocues] = useState(0);
  let statusOrder: string;

  switch (isFocus) {
    case 0:
      statusOrder = 'Tất cả';
      break;
    case 1:
      statusOrder = 'Chờ thanh toán';
      break;
    case 2:
      statusOrder = 'Chờ xác nhận';
      break;
    case 3:
      statusOrder = 'Đang xử lý';
      break;
    case 4:
      statusOrder = 'Hoàn tất';
      break;
    case 5:
      statusOrder = 'Bị hủy';
      break;
    default:
      break;
  }

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="order">
        <div className="order__header">
          <div className="order__title">
            <h1>Đơn hàng của tôi</h1>
          </div>
          <div className="order__tab-content">
            <Slider {...settings}>
              {titleOrder.map((item, moves) => {
                return (
                  <div
                    className={`order__item ${isFocus == moves ? 'order__item--focus' : ''}`}
                    onClick={() => setIsFocues(moves)}
                  >
                    <div className="order__item--left"></div>
                    <div
                      className={`order__item--number ${
                        isFocus == moves ? 'order__item--focus-color' : ''
                      }`}
                    >
                      {item.quantity}
                    </div>
                    <div
                      className={`order__item--text ${
                        isFocus == moves ? 'order__item--focus-color' : ''
                      }`}
                    >
                      {item.text}
                    </div>
                    <div className="order__item--right"></div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
      <div className="order-info">
        <div className="order-info__content">
          <Table responsive="sm">
            <thead>
              <tr>
                <th>Mã đơn hàng</th>
                <th>Ngày mua</th>
                <th>Người nhận</th>
                <th>Tổng Tiền</th>
                <th>Trạng thái</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {listOrder &&
                listOrder.map((item, index) => {
                  if (item.Status == statusOrder || statusOrder == 'Tất cả') {
                    return (
                      <tr key={`order-${index}`}>
                        <td>{item.IDOrder}</td>
                        <td>{item.OrderDate}</td>
                        <td>{item.FirstName} {item.LastName}</td>
                        <td>{item.Price}đ</td>
                        <td>{item.Status}</td>
                        <td>
                          <Link to={`/order/detail/${item.IDOrder}`}>Xem chi tiết</Link>
                        </td>
                      </tr>
                    );
                  }
                })}
              {titleOrder[isFocus].quantity == 0 && <p>Bạn chưa có đơn hàng nào.</p>}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};
