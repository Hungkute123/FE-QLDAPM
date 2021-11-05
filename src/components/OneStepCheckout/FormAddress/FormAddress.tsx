import React from 'react';
import './FormAddress.scss';
import { InputFormAddress } from './InputFormAddress/InputFormAddress';
import { DropdownAddress } from './DropdownAddress/DropdownAddress';
import { Form } from 'react-bootstrap';

export const FormAddress = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e.currentTarget.fullname2.value);
  };

  return (
    <div className="form-address">
      <Form onSubmit={handleSubmit}>
        <InputFormAddress
          title="Họ và tên người nhận"
          placeholder="Nhập họ và tên người nhận"
          error="Thông tin này không thể trống"
          id="fullname"
        />
        <InputFormAddress title="Số điện thoại" placeholder="Nhập số điện thoại" id="fullname1" />

        <DropdownAddress title="Quốc gia" id="fullname2" />
        <DropdownAddress title="Tỉnh/Thành Phố" placeholder="Chọn tỉnh/thành phố" id="fullname3" />
        <DropdownAddress title="Quận/Huyện" placeholder="Chọn quận/huyện" id="fullname4" />
        <DropdownAddress title="Phường/Xã" placeholder="Chọn phường/Xã" id="fullname5" />

        <InputFormAddress
          title="Địa chỉ nhận hàng"
          placeholder="Nhập địa chỉ nhập hàng"
          id="fullname6"
        />
        <button type="submit">Click</button>
      </Form>
    </div>
  );
};
