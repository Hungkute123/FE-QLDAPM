import React, { useEffect, useState } from 'react';
import './UserInfo.scss';

import { Col, Row, Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

import { RootState } from '../../redux/rootReducer';
import { useAppDispatch, useAppSelector } from '../../redux';
import {
  addInformationVAT,
  getInformationVAT,
  updateInfo,
} from '../../redux/slice/appSlice/userSlice';

interface Input {
  title: string;
  placeholder: string;
  value: string | number | boolean | undefined;
  func: Object | any;
  type: string;
  required: boolean;
}

export const UserInfo = () => {
  // useAppDispatch
  const dispatch = useAppDispatch();

  // useSelector
  const userInfo = useAppSelector((state: RootState) => state.userSlice.account);

  // State Info
  const [surName, setSurName] = useState(userInfo.FirstName);
  const [name, setName] = useState(userInfo.LastName);
  const [phone, setPhone] = useState(userInfo.PhoneNumber);
  const [gender, setGender] = useState(userInfo.Gender);
  const [birthday, setBirthday] = useState(userInfo.DateOfBirth);
  const [vip, setVip] = useState(userInfo.Vip);
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

  const fetchInformation = async () => {
    const informationVAT = (await dispatch(getInformationVAT({ jwt: localStorage.getItem('jwt') }))).payload.data;
    setNameOrder(informationVAT.Name);
    setNameCompany(informationVAT.CompanyName);
    setAddressCompany(informationVAT.CompanyAddress);
    setTax(informationVAT.CompanyCode);
    setEmailOrder(informationVAT.CompanyEmail);
  }

  // useEffect
  useEffect(() => {
    fetchInformation();
  }, []);

  // Function Create Input
  const fInput = ({ title, placeholder, value, func, type, required }: Input) => {
    return (
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          {title}
        </Form.Label>
        {['text', 'date', 'number', 'password'].includes(type) ? (
          <Col sm="10">
            <Form.Control
              type={type}
              placeholder={placeholder}
              size="sm"
              isInvalid={value == '' ? true : false}
              isValid={value == '' ? false : true}
              onChange={(e) => func(e.target.value)}
              value={value as number | string[] | undefined}
              required={required}
            />
          </Col>
        ) : (
          ''
        )}

        {type == 'select' ? (
          <Col sm="10">
            <Form.Control
              as="select"
              aria-label="Gi???i t??nh"
              size="sm"
              isInvalid={value == '' ? true : false}
              isValid={value == '' ? false : true}
              onChange={(e) => func(e.target.value)}
              value={value as number | string[] | undefined}
            >
              <option value="N???">N???</option>
              <option value="Nam">Nam</option>
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

        {type == 'email' ? (
          <Col sm="10">
            <Form.Control
              type={type}
              size="sm"
              value={value as number | string[] | undefined}
              disabled
            />
          </Col>
        ) : (
          ''
        )}
      </Form.Group>
    );
  };

  // Xu Ly Luu Thong Ca Nhan
  const handleSaveInfo = async (e: any) => {
    e.preventDefault();

    const user = {
      Email: userInfo.Email,
      FirstName: surName,
      LastName: name,
      PhoneNumber: phone,
      DateOfBirth: birthday,
      Gender: gender,
      Vip: vip,
    };

    const key = {
      IDUser: userInfo.IDUser,
    };

    if (changePass) {
      if (passNew != rePass) {
        Swal.fire({
          icon: 'error',
          title: 'M???T KH???U KH??NG TR??NG KH???P',
        });

        return;
      }

      const userPass = {
        ...user,
        Password: passNew,
      };

      const keyPass = {
        ...key,
        Password: passOld,
      };

      const status = (
        await dispatch(
          updateInfo({ jwt: localStorage.getItem('jwt'), key: keyPass, user: userPass }),
        )
      ).payload.data;

      if (status) {
        Swal.fire({
          icon: 'success',
          title: 'C???P NH???T TH??NG TIN TH??NH C??NG',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'C???P NH???T TH??NG TIN TH???T B???I',
        });
      }

      return;
    }

    const status = (
      await dispatch(updateInfo({ jwt: localStorage.getItem('jwt'), key: key, user: user }))
    ).payload.data;

    if (status) {
      Swal.fire({
        icon: 'success',
        title: 'C???P NH???T TH??NG TIN TH??NH C??NG',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'C???P NH???T TH??NG TIN TH???T B???I',
      });
    }
  };

  // Xu Ly Luu Thong Tin Hoa Don GTGT
  const handleAddInformationVAT = async (e: any) => {
    e.preventDefault();

    const information = {
      IDUser: userInfo.IDUser,
      Name: nameOrder,
      CompanyName: nameCompany,
      CompanyAddress: addressCompany,
      CompanyCode: tax,
      CompanyEmail: emailOrder,
    };

    const status = (
      await dispatch(
        addInformationVAT({ jwt: localStorage.getItem('jwt'), Information: information }),
      )
    ).payload.data;

    if (status) {
      Swal.fire({
        icon: 'success',
        title: 'C???P NH???T TH??NG TIN XU???T H??A ????N GTGT TH??NH C??NG',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'C???P NH???T TH??NG TIN XU???T H??A ????N GTGT TH???T B???I',
      });
    }
  };

  return (
    <div>
      <div className="info">
        <div className="info__content">
          <div className="info__title">
            <h1>Th??ng tin t??i kho???n</h1>
          </div>
          <Form key="info_account" onSubmit={handleSaveInfo} id="form_info" name="form_info">
            {fInput({
              title: 'H???*',
              placeholder: 'Nh???p h???',
              value: surName,
              func: setSurName,
              type: 'text',
              required: true,
            })}
            {fInput({
              title: 'T??n*',
              placeholder: 'Nh???p t??n',
              value: name,
              func: setName,
              type: 'text',
              required: true,
            })}
            {fInput({
              title: 'S??? ??i???n tho???i',
              placeholder: 'Nh???p s??? ??i???n tho???i',
              value: phone,
              func: setPhone,
              type: 'number',
              required: true,
            })}
            {fInput({
              title: 'Email',
              placeholder: '',
              value: userInfo.Email,
              func: '',
              type: 'email',
              required: true,
            })}
            {fInput({
              title: 'Gi???i t??nh*',
              placeholder: '',
              value: gender,
              func: setGender,
              type: 'select',
              required: true,
            })}
            {fInput({
              title: 'Ng??y sinh*',
              placeholder: 'Nh???p ng??y sinh',
              value: birthday,
              func: setBirthday,
              type: 'date',
              required: true,
            })}
            {fInput({
              title: 'Vip',
              placeholder: 'Nh???p m?? VIP ????? nh???n ??u ????i',
              value: vip,
              func: setVip,
              type: 'text',
              required: false,
            })}

            {fInput({
              title: '',
              placeholder: '?????i m???t kh???u',
              value: changePass,
              func: setChangePass,
              type: 'checkbox',
              required: false,
            })}

            <div className={`${changePass ? 'info__show' : 'info__hide'}`}>
              {fInput({
                title: 'M???t kh???u hi???n t???i*',
                placeholder: 'M???t kh???u hi???n t???i',
                value: passOld,
                func: setPassOld,
                type: 'password',
                required: false,
              })}
              {fInput({
                title: 'M???t kh???u m???i*',
                placeholder: 'M???t kh???u m???i',
                value: passNew,
                func: setPassNew,
                type: 'password',
                required: false,
              })}
              {fInput({
                title: 'Nh???p l???i m???t kh???u m???i*',
                placeholder: 'Nh???p l???i m???t kh???u m???i',
                value: rePass,
                func: setRePass,
                type: 'password',
                required: false,
              })}
            </div>
            <div className="info__btn">
              <Button variant="danger" type="submit">
                L??u thay ?????i
              </Button>
            </div>
          </Form>
        </div>
      </div>

      <div className="info">
        <div className="info__content">
          <div className="info__title">
            <h1>Th??ng tin xu???t h??a ????n GTGT</h1>
          </div>
          <Form
            key="info_account"
            id="form_gtgt"
            name="form_gtgt"
            onSubmit={handleAddInformationVAT}
          >
            {fInput({
              title: 'H??? t??n ng?????i mua h??ng',
              placeholder: 'Nh???p h??? t??n ng?????i mua h??ng',
              value: nameOrder,
              func: setNameOrder,
              type: 'text',
              required: true,
            })}
            {fInput({
              title: 'T??n c??ng ty',
              placeholder: 'Nh???p t??n c??ng ty',
              value: nameCompany,
              func: setNameCompany,
              type: 'text',
              required: true,
            })}
            {fInput({
              title: '?????a ch??? c??ng ty',
              placeholder: 'Nh???p ?????a ch??? c??ng ty',
              value: addressCompany,
              func: setAddressCompany,
              type: 'text',
              required: true,
            })}
            {fInput({
              title: 'M?? s??? thu??? c??ng ty',
              placeholder: 'Press Tax/GTGT number company',
              value: tax,
              func: setTax,
              type: 'text',
              required: true,
            })}
            {fInput({
              title: 'Email nh???n h??a ????n',
              placeholder: 'Nh???p email nh???n h??a ????n',
              value: emailOrder,
              func: setEmailOrder,
              type: 'text',
              required: true,
            })}
            <div className="info__btn">
              <Button variant="danger" type="submit">
                L??u thay ?????i
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};
