import React, { useState, useEffect } from 'react';
import { Tabs, Input } from '../common';
import { Modal, Button } from 'react-bootstrap';
import { MdFacebook } from 'react-icons/md';
import './LoginModal.scss';

export const LoginModal: React.FC<IModal> = ({ isOpen, setIsOpen }) => {
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
            />
            <Input
              label="Mật khẩu"
              type="password"
              showPassword={true}
              placeholder="Nhập mật khẩu"
            />
            <span className="login-modal__forgot-pass">Quên mật khẩu?</span>
            <div className="login-modal__group-btn">
              <Button variant="secondary" disabled className="login-modal__btn">
                Đăng nhập
              </Button>
              <Button variant="outline-danger" className="login-modal__btn">
                Bỏ qua
              </Button>
              <Button variant="primary" className="login-modal__btn">
                <MdFacebook size={25} /> <span>Đăng nhập bằng facebook</span>
              </Button>
            </div>
          </div>,
          <div className="login-modal__register">
            <Input
              label="Số điện thoại"
              type="text"
              placeholder="Nhập số điện thoại"
              titleAction="Gửi mã OTP"
              handleAction={() => {
                console.log('haha');
              }}
            />
            <Input label="Mã xác nhận OTP" type="text" placeholder="6 ký tự" isDisable />
            <Input
              label="Mật khẩu"
              type="password"
              showPassword={true}
              placeholder="Nhập mật khẩu"
              isDisable
            />
            <div className="login-modal__group-btn">
              <Button variant="secondary" disabled className="login-modal__btn">
                Đăng ký
              </Button>
              <Button variant="outline-danger" className="login-modal__btn">
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
