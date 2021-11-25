import React, { useEffect, useState } from 'react';
import './AccountHeader.scss';
import { FiUser, FiSettings } from 'react-icons/fi';
import { MdOutlineExitToApp } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { BsBoxArrowInRight } from 'react-icons/bs';
import { LoginModal } from '../LoginModal/LoginModal';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
import { getInfo } from '../../redux/slice/appSlice/userSlice';
import { useAppDispatch } from '../../redux/store';

export const AccountHeader = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isAccount = useSelector((state: RootState) => state.userSlice.isAccount);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getInfo({ jwt: localStorage.getItem('jwt') }));
    return () => {
      console.log('haha');
    };
  }, [isOpen]);

  const handleOnEnter = () => {
    setShowOptions(true);
  };

  const handleOnLeave = () => {
    setShowOptions(false);
  };

  return (
    <div className="account-header" onMouseEnter={handleOnEnter} onMouseLeave={handleOnLeave}>
      {!isAccount ? (
        <div className="account-header__label">
          <BsBoxArrowInRight size={25} color={'#F7941E'} onClick={() => setIsOpen(true)} />
          <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} />
          <span>ĐĂNG NHẬP</span>
        </div>
      ) : (
        <div>
          <div className="account-header__label">
            <FiUser size={25} color={'#F7941E'} />
            <span>TÀI KHOẢN</span>
          </div>
          <div
            className={`account-header__options ${
              showOptions ? 'account-header__options--show' : ''
            }`}
          >
            <div className="account-header__list">
              <div className="account-header__option">
                <FiSettings size={20} />
                <span>
                  <Link to="/account">Bảng điều khiển của khách hàng</Link>
                </span>
              </div>
              <div className="account-header__option">
                <MdOutlineExitToApp size={20} />
                <span>Thoát</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
