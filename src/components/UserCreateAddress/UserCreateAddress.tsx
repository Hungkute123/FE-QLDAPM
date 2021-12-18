import React, { useEffect, useState } from 'react';
import './UserCreateAddress.scss';

import { Form, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserMessage } from '../UserMessage/UserMessage';
import { useAppSelector, useAppDispatch, addUserAddress } from '../../redux';
import { RootState } from '../../redux/rootReducer';
import Swal from 'sweetalert2';

export const UserCreateAddress = () => {
  // dispatch
  const dispatch = useAppDispatch();

  // useSelector
  const userInfo = useAppSelector((state: RootState) => state.userSlice.account);

  // State API
  const [listCity, setListCity] = useState([]);
  const [codeCity, setCodeCity] = useState(1);
  const [listDistrict, setListDistrict] = useState([]);
  const [codeDistrict, setCodeDistrict] = useState(1);
  const [listWard, setListWard] = useState([]);

  useEffect(() => {
    const fetchApi = async (requestUrl: string, handle: any) => {
      const response = await fetch(requestUrl, { mode: 'cors' });
      const responeseJSON = await response.json();

      handle(responeseJSON);
    };

    fetchApi('https://provinces.open-api.vn/api/p', setListCity);
  }, []);

  useEffect(() => {
    const fetchApi = async (
      requestUrl: string,
      handle: any,
      handleCode: any,
      handleCity: any,
      handleDistrict: any,
    ) => {
      const response = await fetch(requestUrl, { mode: 'cors' });
      const responeseJSON = await response.json();

      handle(responeseJSON.districts);
      handleCode(responeseJSON.code);
      handleCity(responeseJSON.name);
      handleDistrict(responeseJSON.districts[0].name);
    };

    fetchApi(
      `https://provinces.open-api.vn/api/p/${codeCity}?depth=2`,
      setListDistrict,
      setCodeDistrict,
      setCity,
      setDistrict,
    );
  }, [codeCity]);

  useEffect(() => {
    const fetchApi = async (requestUrl: string, handle: any, handleWard: any) => {
      const response = await fetch(requestUrl, { mode: 'cors' });
      const responeseJSON = await response.json();

      handle(responeseJSON.wards);
      handleWard(responeseJSON.wards[0].name);
    };

    fetchApi(`https://provinces.open-api.vn/api/d/${codeDistrict}?depth=2`, setListWard, setWard);
  }, [codeDistrict]);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [ward, setWard] = useState('');
  const [paymentAddress, setPaymentAddress] = useState(false);
  const [deliveryAddress, setDeliveryAddress] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const userAddress = {
      IDUser: userInfo.IDUser,
      FirstName: firstName,
      LastName: lastName,
      Phone: phone,
      Address: address,
      City: city,
      District: district,
      Warn: ward,
      PaymentAddress: paymentAddress,
      DeliveryAddress: deliveryAddress,
    };

    const status = (
      await dispatch(addUserAddress({ jwt: localStorage.getItem('jwt'), Address: userAddress }))
    ).payload.data;

    if (status) {
      Swal.fire({
        icon: 'success',
        title: 'THÊM THÔNG TIN ĐỊA CHỈ THÀNH CÔNG',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'THÊM THÔNG TIN ĐỊA CHỈ THẤT BẠI',
      });
    }
  };

  return (
    <>
      <UserMessage></UserMessage>
      <div className="create-address">
        <div className="create-address__content">
          <div className="create-address__title">
            <h1>Thêm địa chỉ mới</h1>
          </div>
          <Form id="form_user_address" onSubmit={handleSubmit}>
            <Row>
              <Col lg={6} md={6} xs={6}>
                <div className="create-address__left">
                  <h2>Thông tin liên hệ</h2>
                  <Form.Control
                    type="text"
                    placeholder="Tên*"
                    id="name"
                    value={lastName}
                    onChange={(e: any) => setLastName(e.target.value)}
                    required
                  />
                  <Form.Control
                    type="text"
                    placeholder="Họ*"
                    id="last_name"
                    value={firstName}
                    onChange={(e: any) => setFirstName(e.target.value)}
                    required
                  />
                  <Form.Control
                    type="text"
                    placeholder="Ex: 0886...."
                    id="phone"
                    value={phone}
                    onChange={(e: any) => setPhone(e.target.value)}
                  />
                </div>
              </Col>
              <Col lg={6} md={6} xs={6}>
                <div className="create-address__right">
                  <h2>Địa chỉ</h2>
                  <Form.Control
                    type="text"
                    placeholder="Địa chỉ"
                    id="address"
                    value={address}
                    onChange={(e: any) => setAddress(e.target.value)}
                  />

                  <Form.Group
                    as={Row}
                    className="mb-3 mt-10"
                    controlId="formHorizontalEmail"
                    key="0"
                  >
                    <Form.Label column sm={4} style={{ fontStyle: 'italic' }}>
                      Tỉnh/Thành phố *
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        as="select"
                        placeholder="City"
                        size="sm"
                        id="city"
                        value={city}
                        onChange={(e: any) => setCodeCity(e.target.value)}
                      >
                        {listCity.map((items: any, index: any) => {
                          return (
                            <option key={index} value={items.code}>
                              {items.name}
                            </option>
                          );
                        })}
                      </Form.Control>
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    className="mb-3 mt-10"
                    controlId="formHorizontalEmail"
                    key="1"
                  >
                    <Form.Label column sm={4} style={{ fontStyle: 'italic' }}>
                      Quận/Huyện *
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        as="select"
                        placeholder="Email"
                        size="sm"
                        id="district"
                        value={district}
                        onChange={(e: any) => setDistrict(e.target.value)}
                      >
                        {listDistrict.map((items: any, index: any) => {
                          return (
                            <option key={index} value={items.name}>
                              {items.name}
                            </option>
                          );
                        })}
                      </Form.Control>
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    className="mb-3 mt-10"
                    controlId="formHorizontalEmail"
                    key="2"
                  >
                    <Form.Label column sm={4} style={{ fontStyle: 'italic' }}>
                      Xã/Phường *
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        as="select"
                        placeholder="Email"
                        size="sm"
                        id="ward"
                        value={ward}
                        onChange={(e: any) => setWard(e.target.value)}
                      >
                        {listWard.map((items: any, index: any) => {
                          return (
                            <option key={index} value={items.name}>
                              {items.name}
                            </option>
                          );
                        })}
                      </Form.Control>
                    </Col>
                  </Form.Group>

                  <Form.Check
                    type="checkbox"
                    id={'payment_address'}
                    label="Sử dụng như Địa chỉ thanh toán mặc định của tôi"
                    style={{ fontStyle: 'italic', paddingBottom: '20px', paddingTop: '10px' }}
                    onChange={(e: any) => setPaymentAddress(!paymentAddress)}
                    checked={paymentAddress}
                  />
                  <Form.Check
                    type="checkbox"
                    id={'delivery_address'}
                    label="Sử dụng như Địa chỉ giao hàng mặc định của tôi"
                    style={{ fontStyle: 'italic' }}
                    onChange={(e: any) => setDeliveryAddress(!deliveryAddress)}
                    checked={deliveryAddress}
                  />
                </div>
              </Col>
            </Row>
            <div className="create-address__button-set">
              <p className="create-address__button-set--required">(*) Bắt buộc</p>
              <p className="create-address__button-set--back">
                <Link to="/account">
                  <small>« </small>Quay lại
                </Link>
              </p>
              <div className="create-address__button-set--btn">
                <Button variant="danger" type="submit">
                  LƯU ĐỊA CHỈ
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};
