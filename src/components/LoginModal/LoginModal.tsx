import React, { useState, useEffect } from 'react';
import './LoginModal.scss';

import { Tabs, Input } from '../common';
import { Modal, Button } from 'react-bootstrap';
import { MdFacebook } from 'react-icons/md';
import Swal from 'sweetalert2';

import { useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
import { loginWithEmail, registerWithEmail, sendOTP } from '../../redux/slice/appSlice/userSlice';
import { useHistory } from 'react-router-dom';

export const LoginModal: React.FC<IModal> = ({ isOpen, setIsOpen }) => {
  const [emailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');
  const [emailRegister, setEmailRegister] = useState('');
  const [passwordRegister, setPasswordRegister] = useState('');
  const [codeOTP, setCodeOTP] = useState('');
  const { isUser, OTP,account } = useSelector((state: RootState) => state.userSlice);
  const history = useHistory();
  const dispatch = useAppDispatch();

  const checkEmail = (email: string): boolean => {
    let x = email;
    const atposition = x.indexOf('@');
    const dotposition = x.lastIndexOf('.');

    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
      return false;
    }

    return true;
  };

  const handleLogin = async () => {
    if (!checkEmail(emailLogin)) {
      Swal.fire({
        icon: 'error',
        title: 'EMAIL SAI CÚ PHÁP',
        text: 'Hãy nhập lại email',
      });

      return;
    }

    const login = (await dispatch(loginWithEmail({ email: emailLogin, pass: passwordLogin }))).payload;

    if (login.data) {
      Swal.fire({
        icon: 'success',
        title: 'ĐĂNG NHẬP THÀNH CÔNG',
      });

      setIsOpen(false);
      if(account.TypeOfUser === 1){
        history.push({
          pathname: `/seller/product-management`,
        });
      }
      if(account.TypeOfUser === 2){
        history.push({
          pathname: `/admin/manage-user`,
        });
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'TÊN TÀI KHOẢN HOẶC MẬT KHẨU KHÔNG CHÍNH XÁC',
      });
    }
  };

  const handleAction = () => {
    if (checkEmail(emailRegister)) {
      Swal.fire(`Hệ thống đã gửi mã OTP đến email ${emailRegister}`);
      dispatch(sendOTP({ email: emailRegister }));

      return;
    }

    Swal.fire({
      icon: 'error',
      title: 'EMAIL SAI CÚ PHÁP',
      text: 'Hãy nhập lại email',
    });
  };

  const handleRegister = async () => {
    if (codeOTP != OTP) {
      Swal.fire({
        icon: 'error',
        title: 'MÃ OTP SAI',
        text: 'Hãy chọn gửi lại mã OTP',
      });

      return;
    }

    const register = (await dispatch(registerWithEmail({ email: emailRegister, pass: passwordRegister }))).payload;

    if (register.data) {
      Swal.fire({
        icon: 'success',
        title: 'Đăng ký thành công',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'EMAIL ĐÃ TỒN TẠI',
        text: 'Hãy chọn email khác',
      });
    }
  };

  const handleSkip = () => {
    setIsOpen(false);
  };

  return (
    <Modal show={isOpen} onHide={setIsOpen} contentClassName="login-modal">
      <Tabs
        titleTabs={[
          <div className="login-modal__title">
            <span>Đăng nhập</span> <hr />
          </div>,
          <div className="login-modal__title">
            <span>Đăng ký</span> <hr />
          </div>,
          ,
        ]}
        bodyTabs={[
          <div className="login-modal__login">
            <Input
              label="Số điện thoại/Email"
              type="text"
              placeholder="Nhập số điện thoại hoặc email"
              onChange={(e) => setEmailLogin(e.target.value)}
            />
            <Input
              label="Mật khẩu"
              type="password"
              showPassword={true}
              placeholder="Nhập mật khẩu"
              onChange={(e) => setPasswordLogin(e.target.value)}
            />
            <span className="login-modal__forgot-pass">Quên mật khẩu?</span>
            <div className="login-modal__group-btn">
              <Button
                variant="secondary"
                disabled={false}
                className="login-modal__btn"
                onClick={handleLogin}
              >
                Đăng nhập
              </Button>
              <Button variant="outline-danger" className="login-modal__btn" onClick={handleSkip}>
                Bỏ qua
              </Button>
              <Button variant="primary" className="login-modal__btn">
                <MdFacebook size={25} /> <span>Đăng nhập bằng facebook</span>
              </Button>
            </div>
          </div>,
          <div className="login-modal__register">
            <Input
              label="Email"
              type="text"
              placeholder="Nhập email"
              titleAction="Gửi mã OTP"
              onChange={(e) => setEmailRegister(e.target.value)}
              handleAction={handleAction}
            />
            <Input
              label="Mã xác nhận OTP"
              type="text"
              placeholder="6 ký tự"
              isDisable={OTP == '' ? true : false}
              onChange={(e) => setCodeOTP(e.target.value)}
            />
            <Input
              label="Mật khẩu"
              type="password"
              showPassword={true}
              placeholder="Nhập mật khẩu"
              isDisable={OTP == '' ? true : false}
              onChange={(e) => setPasswordRegister(e.target.value)}
            />
            <div className="login-modal__group-btn">
              <Button
                variant="secondary"
                disabled={emailRegister != '' && passwordRegister != '' && codeOTP != '' ? false : true}
                className="login-modal__btn"
                onClick={handleRegister}
              >
                Đăng ký
              </Button>
              <Button variant="outline-danger" className="login-modal__btn" onClick={handleSkip}>
                Bỏ qua
              </Button>
              <span className="login-modal__text">
                Bằng việc đăng ký, bạn đã đồng ý với Fahasa.com về Điều khoản dịch vụ & Chính sách
                bảo mật
              </span>
            </div>
          </div>,
        ]}
        classNameHeader="login-modal__header"
      ></Tabs>
    </Modal>
  );
};
