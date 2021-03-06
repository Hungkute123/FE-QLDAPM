import React, { useEffect, useState } from 'react';
import './FormAddress.scss';
import { InputFormAddress } from './InputFormAddress/InputFormAddress';
import { DropdownAddress } from './DropdownAddress/DropdownAddress';
import { Form } from 'react-bootstrap';
import { doAddNewOrder, useAppDispatch, RootState, useAppSelector } from '../../../redux';
import { deleteUserAddress, getAllUserAddress } from '../../../redux/slice/appSlice/userSlice';
export const FormAddress = (props : any) => {
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
  const [adr, setAdr] = useState('');
  
  const handleChange = (e: any) => {
    setAdr(e.target.value);
    props.passChildData(e.target.value);
    
  };

  
  return (
    // <div className="form-address">
    //   <Form onSubmit={handleSubmit}>
    //     <InputFormAddress
    //       title="H??? v?? t??n ng?????i nh???n"
    //       placeholder="Nh???p h??? v?? t??n ng?????i nh???n"
    //       error="Th??ng tin n??y kh??ng th??? tr???ng"
    //       id="fullname"
    //     />
    //     <InputFormAddress title="S??? ??i???n tho???i" placeholder="Nh???p s??? ??i???n tho???i" id="fullname1" />

    //     <DropdownAddress title="Qu???c gia" id="fullname2" />
    //     <DropdownAddress title="T???nh/Th??nh Ph???" placeholder="Ch???n t???nh/th??nh ph???" id="fullname3" />
    //     <DropdownAddress title="Qu???n/Huy???n" placeholder="Ch???n qu???n/huy???n" id="fullname4" />
    //     <DropdownAddress title="Ph?????ng/X??" placeholder="Ch???n ph?????ng/X??" id="fullname5" />

    //     <InputFormAddress
    //       title="?????a ch??? nh???n h??ng"
    //       placeholder="Nh???p ?????a ch??? nh???p h??ng"
    //       id="fullname6"
    //     />
    //     <button type="submit">Click</button>
    //   </Form>
    // </div>
    
    <div className='form-address'>
      {deliveryAddress.length == 0 && paymentAddress.length == 0 && ortherAddress.length == 0 && 
    <>
    <h1>b???n ch??a c?? ?????a ch???, h??y th??m ?????a ch??? thanh to??n v??o s??? ?????a ch???</h1></>}
    <div id='fhs_checkout_block_address' className="fhs_checkout_block">
      <div className="fhs_checkout_block_content">
        <div className="fhs_checkout_block_address_list">
          <div>
            <ul id='fhs_checkout_address' className="fhs_checkout_block_address_list_items">
              <li className="fhs_checkout_block_address_list_item">
                <div>
                {ortherAddress.map((item, index) => {
                  const adr = `${item.FirstName} ${item.LastName} | ${item.Address}, ${item.Ward}, ${item.District}, ${item.City} | ${item.Phone}`
                    return (
                  <label className="fhs-radio-big">				
                  <input type="radio" name="fhs_checkout_block_address_list_item_option" id="fhs_checkout_block_address_list_item_713282" className='fhs_checkout_block_address_list_item_option'
                  value={item.ID} onChange={handleChange}/>
                  
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
                  const adr = `${item.FirstName} ${item.LastName} | ${item.Address}, ${item.Ward}, ${item.District}, ${item.City} | ${item.Phone}`
                    return (
                  <label className="fhs-radio-big">				
                  <input type="radio" name="fhs_checkout_block_address_list_item_option" id="fhs_checkout_block_address_list_item_713282" className='fhs_checkout_block_address_list_item_option'
                  value={item.ID} onChange={handleChange}/>
                  
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
                  const adr = `${item.FirstName} ${item.LastName} | ${item.Address}, ${item.Ward}, ${item.District}, ${item.City} | ${item.Phone}`
                    return (
                  <label className="fhs-radio-big">				
                  <input type="radio" name="fhs_checkout_block_address_list_item_option" id="fhs_checkout_block_address_list_item_713282" className='fhs_checkout_block_address_list_item_option'
                  value={item.ID} onChange={handleChange}/>
                  
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
