import React, { useState } from 'react';
import './UserOrder.scss';

import Slider, { Settings } from 'react-slick';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const UserOrder = () => {
  const listOrder = [
    {
      title: '2',
      text: 'Tất Cả',
    },
    {
      title: '0',
      text: 'Chờ thanh toán',
    },
    {
      title: '0',
      text: 'Chờ xác nhận',
    },
    {
      title: '0',
      text: 'Đang xử lý',
    },
    {
      title: '0',
      text: 'Hoàn tất',
    },
    {
      title: '2',
      text: 'Bị hủy',
    },
  ];

  const listInfo = [
    {
      id: '102295665',
      day: '07/11/2021',
      name: 'Hùng Nguyễn Đình',
      money: '124.000 đ',
      status: 'Bị hủy',
      url: '/account/order',
    },
    {
      id: '102295665',
      day: '07/11/2021',
      name: 'Hùng Nguyễn Đình',
      money: '124.000 đ',
      status: 'Bị hủy',
      url: '/account/order',
    },
  ];

  const [isFocus, setIsFocues] = useState(0);

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
              {listOrder.map((item, moves) => {
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
                      {item.title}
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
              {listInfo.map((item, moves) => {
                return (
                  <tr key={moves}>
                    <td>{item.id}</td>
                    <td>{item.day}</td>
                    <td>{item.name}</td>
                    <td>{item.money}</td>
                    <td>{item.status}</td>
                    <td>
                      <Link to={item.url}>Xem chi tiết</Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};
