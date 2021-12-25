import React, { useState, useEffect } from 'react';
import './UserAddress.scss';

import { UserMessage } from '../UserMessage/UserMessage';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux';
import { RootState } from '../../redux/rootReducer';
import { deleteUserAddress, getAllUserAddress } from '../../redux/slice/appSlice/userSlice';
import Swal from 'sweetalert2';

export const UserAddress = () => {
  const deliveryAddress: Array<IUserAddress> = useAppSelector(
    (state: RootState) => state.userSlice.deliveryAddress,
  );
  const paymentAddress: Array<IUserAddress> = useAppSelector(
    (state: RootState) => state.userSlice.paymentAddress,
  );
  const ortherAddress: Array<IUserAddress> = useAppSelector(
    (state: RootState) => state.userSlice.ortherAddress,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllUserAddress({ jwt: localStorage.getItem('jwt') }));
  }, []);

  const handleDeleteAddress = async (ID: number) => {
    const status = (await dispatch(deleteUserAddress({ jwt: localStorage.getItem('jwt'), ID: ID })))
      .payload.data;

    if (status) {
      Swal.fire({
        icon: 'success',
        title: 'XÓA THÔNG TIN ĐỊA CHỈ LƯU THÀNH CÔNG',
      });

      await dispatch(getAllUserAddress({ jwt: localStorage.getItem('jwt') }));
    } else {
      Swal.fire({
        icon: 'error',
        title: 'XOÁ THÔNG TIN ĐỊA CHỈ LƯU THẤT BẠI',
      });
    }
  };

  return (
    <div>
      <UserMessage></UserMessage>

      <div className="address">
        <div className="address__content">
          <div className="address__header">
            <h1>Sổ địa chỉ</h1>
            <div className="address__header--btn">
              <Button variant="danger">
                <Link to="/account/address/create">THÊM ĐỊA CHỈ MỚI</Link>
              </Button>
            </div>
          </div>
          <div className="address__body">
            <Row>
              <Col lg={6} md={6} xs={6}>
                <h2>Địa chỉ mặc định</h2>
                {deliveryAddress.length == 0 && paymentAddress.length == 0 && (
                  <ol>
                    <li className="address__item">
                      <p>Bạn không có địa chỉ thanh toán mặc định trong Sổ địa chỉ.</p>
                    </li>
                  </ol>
                )}
                <ol>
                  {paymentAddress.map((item, index) => {
                    return (
                      <li className="address__item" key={`payment-address-${index}`}>
                        <h3>Địa chỉ thanh toán mặc định</h3>
                        <address>
                          {item.FirstName} {item.LastName}
                          <br />
                          {item.Address}
                          <br />
                          {item.Ward}, {item.District}, {item.City} <br />
                          Tel: {item.Phone}
                        </address>
                        <p>
                          <Link to={`/address/edit/${item.ID}`}>Thay đổi Địa chỉ thanh toán</Link>
                        </p>
                      </li>
                    );
                  })}
                </ol>

                <ol>
                  {deliveryAddress.map((item, index) => {
                    return (
                      <li className="address__item" key={`delivery-address-${index}`}>
                        <h3>Địa chỉ giao hàng mặc định</h3>
                        <address>
                          {item.FirstName} {item.LastName}
                          <br />
                          {item.Address}
                          <br />
                          {item.Ward}, {item.District}, {item.City} <br />
                          Tel: {item.Phone}
                        </address>
                        <p>
                          <Link to={`/address/edit/${item.ID}`}>Thay đổi Địa chỉ thanh toán</Link>
                        </p>
                      </li>
                    );
                  })}
                </ol>
              </Col>
              <Col lg={6} md={6} xs={6}>
                <h2>Địa chỉ khác</h2>
                <ol>
                  {ortherAddress.length == 0 && (
                    <li className="address__item">
                      <p>Bạn không có địa chỉ khác trong Sổ địa chỉ.</p>
                    </li>
                  )}
                  {ortherAddress.map((item, index) => {
                    return (
                      <li className="address__item" key={`orther-address-${index}`}>
                        <h3>Địa chỉ giao hàng mặc định</h3>
                        <address>
                          {item.FirstName} {item.LastName}
                          <br />
                          {item.Address}
                          <br />
                          {item.Ward}, {item.District}, {item.City} <br />
                          Tel: {item.Phone}
                        </address>
                        <p>
                          <Link to={`/address/edit/${item.ID}`}>Sửa địa chỉ</Link>
                          <span> | </span>
                          <Link
                            to={`#`}
                            onClick={() => handleDeleteAddress(item.ID)}
                            style={{ color: '#646464' }}
                          >
                            Xóa địa chỉ
                          </Link>
                        </p>
                      </li>
                    );
                  })}
                </ol>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};
