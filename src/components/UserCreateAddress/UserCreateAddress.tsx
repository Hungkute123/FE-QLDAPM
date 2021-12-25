import React, { useEffect, useState } from 'react';
import './UserCreateAddress.scss';

import { Form, Col, Row, Button } from 'react-bootstrap';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import { UserMessage } from '../UserMessage/UserMessage';
import {
  useAppSelector,
  useAppDispatch,
  addUserAddress,
  getUserAddress,
  updateUserAddress,
} from '../../redux';
import { RootState } from '../../redux/rootReducer';
import Swal from 'sweetalert2';

export const UserCreateAddress = () => {
  // useParams
  const { ID }: { ID: string } = useParams();

  // dispatch
  const dispatch = useAppDispatch();

  // useSelector
  const userInfo = useAppSelector((state: RootState) => state.userSlice.account);

  // useHistory
  const history = useHistory();

  // API Address
  const fetchApi = async (type: string, requestUrl: string, handleList: any) => {
    const response = await fetch(requestUrl, { mode: 'cors' });
    const responeseJSON = await response.json();

    switch (type) {
      case 'city':
        handleList(responeseJSON);
        break;
      case 'district':
        handleList(responeseJSON.districts);
        break;
      case 'ward':
        handleList(responeseJSON.wards);
        break;
      default:
        break;
    }
  };

  // State API
  const [listCity, setListCity] = useState([]);
  const [codeCity, setCodeCity] = useState<number>();
  const [city, setCity] = useState('');
  const [listDistrict, setListDistrict] = useState([]);
  const [codeDistrict, setCodeDistrict] = useState<number>();
  const [district, setDistrict] = useState('');
  const [listWard, setListWard] = useState([]);
  const [codeWard, setCodeWard] = useState<number>();
  const [ward, setWard] = useState('');

  // Call API City
  const handleClickCity = () => {
    fetchApi('city', 'https://provinces.open-api.vn/api/p/', setListCity);
    setListDistrict([]);
    setListWard([]);
  };

  // Call API District
  const handleClickDistrict = () => {
    if (codeCity) {
      fetchApi(
        'district',
        `https://provinces.open-api.vn/api/p/${codeCity}?depth=2`,
        setListDistrict,
      );
      setListWard([]);
    }
  };

  // Call API Ward
  const handleClickWard = () => {
    if (codeDistrict) {
      fetchApi('ward', `https://provinces.open-api.vn/api/d/${codeDistrict}?depth=2`, setListWard);
    }
  };

  // Handle Change
  const handleChange = (e: any, type: string, list: Array<any>) => {
    const code = list.find((element) => element.name === e.target.value).code;

    switch (type) {
      case 'city':
        setCity(e.target.value);
        setCodeCity(code);
        setCodeDistrict(null);
        setDistrict(null);
        setCodeWard(null);
        setWard(null);
        break;
      case 'district':
        setDistrict(e.target.value);
        setCodeDistrict(code);
        setCodeWard(null);
        setWard(null);
        break;
      case 'warn':
        setWard(e.target.value);
        setCodeWard(code);
        break;
      default:
        break;
    }
  };

  // State Data
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [paymentAddress, setPaymentAddress] = useState(false);
  const [deliveryAddress, setDeliveryAddress] = useState(false);

  if (ID) {
    const getItemAddress = async (ID: number) => {
      const addressUser: IUserAddress = (
        await dispatch(getUserAddress({ jwt: localStorage.getItem('jwt'), ID }))
      ).payload.data;

      setFirstName(addressUser.FirstName);
      setLastName(addressUser.LastName);
      setPhone(addressUser.Phone);
      setAddress(addressUser.Address);
      setPaymentAddress(addressUser.PaymentAddress);
      setDeliveryAddress(addressUser.DeliveryAddress);
      setCity(addressUser.City);
      setDistrict(addressUser.District);
      setWard(addressUser.Ward);
      setCodeCity(addressUser.CodeCity);
      setCodeDistrict(addressUser.CodeDistrict);
      setCodeWard(addressUser.CodeWard);
    };

    useEffect(() => {
      getItemAddress(Number(ID));
    }, []);
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!city || !district || !ward) {
      Swal.fire({
        icon: 'error',
        title: 'HÃY CHỌN ĐẨY ĐỦ ĐỊA CHỈ',
      });

      return;
    }

    const userAddress = {
      IDUser: userInfo.IDUser,
      FirstName: firstName,
      LastName: lastName,
      Phone: phone,
      Address: address,
      PaymentAddress: paymentAddress,
      DeliveryAddress: deliveryAddress,
      City: city,
      District: district,
      Ward: ward,
      CodeCity: codeCity,
      CodeDistrict: codeDistrict,
      CodeWard: codeWard,
    };

    let status: boolean = false;

    if (ID) {
      const key = {
        ID: Number(ID),
      };
      status = (
        await dispatch(
          updateUserAddress({ jwt: localStorage.getItem('jwt'), Address: userAddress, key: key }),
        )
      ).payload.data;
    } else {
      status = (
        await dispatch(addUserAddress({ jwt: localStorage.getItem('jwt'), Address: userAddress }))
      ).payload.data;
    }

    if (status) {
      Swal.fire({
        icon: 'success',
        title: 'THÔNG TIN ĐỊA CHỈ LƯU THÀNH CÔNG',
      });

      history.push({
        pathname: `/account/address`,
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'THÔNG TIN ĐỊA CHỈ LƯU THẤT BẠI',
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
                    key="name"
                    value={lastName}
                    onChange={(e: any) => setLastName(e.target.value)}
                    required
                  />
                  <Form.Control
                    type="text"
                    placeholder="Họ*"
                    id="last_name"
                    key="last_name"
                    value={firstName}
                    onChange={(e: any) => setFirstName(e.target.value)}
                    required
                  />
                  <Form.Control
                    type="text"
                    placeholder="Ex: 0886...."
                    id="phone"
                    key="phone"
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
                    key="address"
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
                        size="sm"
                        id="city"
                        key="city"
                        onClick={handleClickCity}
                        onChange={(e: any) => handleChange(e, 'city', listCity)}
                      >
                        <option key={`city-0`}>{city || 'Tỉnh/Thành phố...'}</option>
                        {listCity.length != 0 &&
                          listCity.map((items: any, index: any) => {
                            return (
                              <option key={`city-${index}`} value={items.name}>
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
                        size="sm"
                        id="district"
                        key="district"
                        onClick={handleClickDistrict}
                        onChange={(e: any) => handleChange(e, 'district', listDistrict)}
                      >
                        <option key={`district-0`}>{district || 'Quận/Huyện...'}</option>
                        {listDistrict.length != 0 &&
                          listDistrict.map((items: any, index: any) => {
                            return (
                              <option key={`district-${index}`} value={items.name}>
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
                        size="sm"
                        id="ward"
                        key="ward"
                        onClick={handleClickWard}
                        onChange={(e: any) => handleChange(e, 'warn', listWard)}
                      >
                        <option key={`warn-0`}>{ward || 'Xã/Phường...'}</option>
                        {listWard.length != 0 &&
                          listWard.map((items: any, index: any) => {
                            return (
                              <option key={`warn-${index}`} value={items.name}>
                                {items.name}
                              </option>
                            );
                          })}
                      </Form.Control>
                    </Col>
                  </Form.Group>

                  <Form.Check
                    type="checkbox"
                    id="payment_address"
                    key={'payment_address'}
                    label="Sử dụng như Địa chỉ thanh toán mặc định của tôi"
                    style={{ fontStyle: 'italic', paddingBottom: '20px', paddingTop: '10px' }}
                    onChange={(e: any) => setPaymentAddress(!paymentAddress)}
                    checked={paymentAddress}
                  />
                  <Form.Check
                    type="checkbox"
                    id="delivery_address"
                    key={'delivery_address'}
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
