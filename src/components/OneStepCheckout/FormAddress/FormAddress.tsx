import React, { useEffect, useState } from 'react';
import './FormAddress.scss';
import { InputFormAddress } from './InputFormAddress/InputFormAddress';
import { DropdownAddress } from './DropdownAddress/DropdownAddress';
import { Form } from 'react-bootstrap';
import { doAddNewOrder, useAppDispatch, RootState, useAppSelector } from '../../../redux';
import { deleteUserAddress, getAllUserAddress } from '../../../redux/slice/appSlice/userSlice';

export const FormAddress = () => {
  // const dispatch = useAppDispatch();
  // const [address, setAddress] = useState('');
  // const [city, setCity] = useState('');
  // const [district, setDistrict] = useState('');
  // const [firstname, setFirstname] = useState('');
  // const [lastname, setLastname] = useState('');
  // const [phone, setPhone] = useState('');
  // const [warn, setWarn] = useState('');
  // const fetchInformation = async () => {
  //   const Address = (await dispatch(doGetUserAddress({ jwt: localStorage.getItem('jwt') }))).payload.data;
  //   setAddress(Address[0].Address);
  //   setCity(Address[0].City);
  //   setDistrict(Address[0].District);
  //   setFirstname(Address[0].FirstName);
  //   setLastname(Address[0].LastName);
  //   setPhone(Address[0].Phone);
  //   setWarn(Address[0].Warn)
  // }
  // var Adr = {
  //   address,
  //   city,
  //   district,
  //   firstname,
  //   lastname,
  //   phone,
  //   warn
  // };
  
  
  // // useEffect
  // useEffect(() => {
  //   fetchInformation();
  // }, []);
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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e.currentTarget.fullname2.value);
  };

  return (
    // <div className="form-address">
    //   <Form onSubmit={handleSubmit}>
    //     <InputFormAddress
    //       title="Họ và tên người nhận"
    //       placeholder="Nhập họ và tên người nhận"
    //       error="Thông tin này không thể trống"
    //       id="fullname"
    //     />
    //     <InputFormAddress title="Số điện thoại" placeholder="Nhập số điện thoại" id="fullname1" />

    //     <DropdownAddress title="Quốc gia" id="fullname2" />
    //     <DropdownAddress title="Tỉnh/Thành Phố" placeholder="Chọn tỉnh/thành phố" id="fullname3" />
    //     <DropdownAddress title="Quận/Huyện" placeholder="Chọn quận/huyện" id="fullname4" />
    //     <DropdownAddress title="Phường/Xã" placeholder="Chọn phường/Xã" id="fullname5" />

    //     <InputFormAddress
    //       title="Địa chỉ nhận hàng"
    //       placeholder="Nhập địa chỉ nhập hàng"
    //       id="fullname6"
    //     />
    //     <button type="submit">Click</button>
    //   </Form>
    // </div>
    <div className='form-address'>
    <div id='fhs_checkout_block_address' className="fhs_checkout_block">
      <div className="fhs_checkout_block_content">
        <div className="fhs_checkout_block_address_list">
          <div>
            <ul id='fhs_checkout_address' className="fhs_checkout_block_address_list_items">
              <li className="fhs_checkout_block_address_list_item">
                <div>
                {ortherAddress.map((item, index) => {
                    return (
                  <label className="fhs-radio-big">				
                  <input type="radio" name="fhs_checkout_block_address_list_item_option" id="fhs_checkout_block_address_list_item_713282" className='fhs_checkout_block_address_list_item_option'
                  value="713282" checked/>
                  
                  <span className="radiomark-big">
                  </span>
                  
                  {item.FirstName} {item.LastName} | {item.Address}, {item.Ward}, {item.District}, {item.City} | {item.Phone}
                  </label>
                  );
                  })}
                </div>
              </li>
              <br/>
              <li className="fhs_checkout_block_address_list_item">
                <div>
                {paymentAddress.map((item, index) => {
                    return (
                  <label className="fhs-radio-big">				
                  <input type="radio" name="fhs_checkout_block_address_list_item_option" id="fhs_checkout_block_address_list_item_713282" className='fhs_checkout_block_address_list_item_option'
                  value="713282" checked/>
                  
                  <span className="radiomark-big">
                  </span>
                  
                  {item.FirstName} {item.LastName} | {item.Address}, {item.Ward}, {item.District}, {item.City} | {item.Phone}
                  
                  </label>);
                  })}
                </div>
              </li>
              <br />
              <li className="fhs_checkout_block_address_list_item">
                <div>
                {deliveryAddress.map((item, index) => {
                    return (
                  <label className="fhs-radio-big">				
                  <input type="radio" name="fhs_checkout_block_address_list_item_option" id="fhs_checkout_block_address_list_item_713282" className='fhs_checkout_block_address_list_item_option'
                  value="713282" checked/>
                  
                  <span className="radiomark-big">
                  </span>
                  
                  {item.FirstName} {item.LastName} | {item.Address}, {item.Ward}, {item.District}, {item.City} | {item.Phone}
                  
                  </label>);
                  })}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
