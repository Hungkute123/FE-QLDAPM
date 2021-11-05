import React, { useState } from 'react';
import { Col, Row, Form, Button } from 'react-bootstrap';
import './UserInfo.scss';

interface Input {
  title: string;
  placeholder: string;
  value: string | number | boolean | undefined;
  func: Object | any;
  type: string;
}

export const UserInfo = () => {
  // State Info
  const [surName, setSurName] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('Nữ');
  const [birthday, setBirthday] = useState('');
  const [vip, setVip] = useState('');
  const [changePass, setChangePass] = useState(false);
  const [passOld, setPassOld] = useState('');
  const [passNew, setPassNew] = useState('');
  const [rePass, setRePass] = useState('');

  // State Order
  const [nameOrder, setNameOrder] = useState('');
  const [nameCompany, setNameCompany] = useState('');
  const [addressCompany, setAddressCompany] = useState('');
  const [tax, setTax] = useState('');
  const [emailOrder, setEmailOrder] = useState('');

  // Function Create Input
  const fInput = ({ title, placeholder, value, func, type }: Input) => {
    return (
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          {title}
        </Form.Label>
        {['text', 'email', 'date', 'number', 'password'].includes(type) ? (
          <Col sm="10">
            <Form.Control
              type={type}
              placeholder={placeholder}
              size="sm"
              isInvalid={value == '' ? true : false}
              isValid={value == '' ? false : true}
              onChange={(e) => func(e.target.value)}
              value={value as number | string[] | undefined}
            />
          </Col>
        ) : (
          ''
        )}
        {type == 'select' ? (
          <Col sm="10">
            <Form.Control
              as="select"
              aria-label="Giới tính"
              size="sm"
              isInvalid={value == '' ? true : false}
              isValid={value == '' ? false : true}
              onChange={(e) => func(e.target.value)}
              value={value as number | string[] | undefined}
            >
              <option value="girl">Nữ</option>
              <option value="boy">Nam</option>
            </Form.Control>
          </Col>
        ) : (
          ''
        )}
        {type == 'checkbox' ? (
          <Col sm="10">
            <Form.Check
              type="checkbox"
              id={`default-checkbox`}
              label={placeholder}
              name="changePass"
              onChange={(e) => func(!value)}
            />
          </Col>
        ) : (
          ''
        )}
      </Form.Group>
    );
  };

  return (
    <div>
      <div className="info">
        <div className="info__content">
          <div className="info__title">
            <h1>Thông tin tài khoản</h1>
          </div>
          <Form key="info_account">
            {fInput({
              title: 'Họ*',
              placeholder: 'Nhập họ',
              value: surName,
              func: setSurName,
              type: 'text',
            })}
            {fInput({
              title: 'Tên*',
              placeholder: 'Nhập tên',
              value: name,
              func: setName,
              type: 'text',
            })}
            {fInput({
              title: 'Số điện thoại',
              placeholder: 'Nhập số điện thoại',
              value: phone,
              func: setPhone,
              type: 'number',
            })}
            {fInput({
              title: 'Email',
              placeholder: 'Chưa có email',
              value: email,
              func: setEmail,
              type: 'email',
            })}
            {fInput({
              title: 'Giới tính*',
              placeholder: '',
              value: gender,
              func: setGender,
              type: 'select',
            })}
            {fInput({
              title: 'Ngày sinh*',
              placeholder: 'Nhập ngày sinh',
              value: birthday,
              func: setBirthday,
              type: 'date',
            })}
            {fInput({
              title: 'Vip',
              placeholder: 'Nhập mã VIP để nhận ưu đãi',
              value: vip,
              func: setVip,
              type: 'text',
            })}

            {fInput({
              title: '',
              placeholder: 'Đổi mật khẩu',
              value: changePass,
              func: setChangePass,
              type: 'checkbox',
            })}

            <div className={`${changePass ? 'info__show' : 'info__hide'}`}>
              {fInput({
                title: 'Mật khẩu hiện tại*',
                placeholder: 'Mật khẩu hiện tại',
                value: passOld,
                func: setPassOld,
                type: 'password',
              })}
              {fInput({
                title: 'Mật khẩu mới*',
                placeholder: 'Mật khẩu mới',
                value: passNew,
                func: setPassNew,
                type: 'password',
              })}
              {fInput({
                title: 'Nhập lại mật khẩu mới*',
                placeholder: 'Nhập lại mật khẩu mới',
                value: rePass,
                func: setRePass,
                type: 'password',
              })}
            </div>
            <div className="info__btn">
              <Button variant="danger">Lưu thay đổi</Button>
            </div>
          </Form>
        </div>
      </div>

      <div className="info">
        <div className="info__content">
          <div className="info__title">
            <h1>Thông tin xuất hóa đơn GTGT</h1>
          </div>
          <Form key="info_account">
            {fInput({
              title: 'Họ tên người mua hàng',
              placeholder: 'Nhập họ tên người mua hàng',
              value: nameOrder,
              func: setNameOrder,
              type: 'text',
            })}
            {fInput({
              title: 'Tên công ty',
              placeholder: 'Nhập tên công ty',
              value: nameCompany,
              func: setNameCompany,
              type: 'text',
            })}
            {fInput({
              title: 'Địa chỉ công ty',
              placeholder: 'Nhập địa chỉ công ty',
              value: addressCompany,
              func: setAddressCompany,
              type: 'text',
            })}
            {fInput({
              title: 'Mã số thuế công ty',
              placeholder: 'Press Tax/GTGT number company',
              value: tax,
              func: setTax,
              type: 'text',
            })}
            {fInput({
              title: 'Email nhận hóa đơn',
              placeholder: 'Nhập email nhận hóa đơn',
              value: emailOrder,
              func: setEmailOrder,
              type: 'text',
            })}
            <div className="info__btn">
              <Button variant="danger">Lưu thay đổi</Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};
