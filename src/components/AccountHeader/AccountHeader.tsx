import React, { useState } from 'react';
import './AccountHeader.scss';
import { FiUser, FiSettings } from 'react-icons/fi';
import { MdOutlineExitToApp } from 'react-icons/md';

export const AccountHeader = () => {
  const [showOptions, setShowOptions] = useState(false);

  const handleOnEnter = () => {
    setShowOptions(true);
  };

  const handleOnLeave = () => {
    setShowOptions(false);
  };

  return (
    <div className="account-header" onMouseEnter={handleOnEnter} onMouseLeave={handleOnLeave}>
      <div className="account-header__label">
        <FiUser size={25} color={'#F7941E'} />
        <span>TÀI KHOẢN</span>
      </div>
      <div
        className={`account-header__options ${showOptions ? 'account-header__options--show' : ''}`}
      >
        <div className="account-header__list">
          <div className="account-header__option">
            <FiSettings size={20} />
            <span>Bảng điều khiển của khách hàng</span>
          </div>
          <div className="account-header__option">
            <MdOutlineExitToApp size={20} />
            <span>Thoát</span>
          </div>
        </div>
      </div>
    </div>
  );
};
