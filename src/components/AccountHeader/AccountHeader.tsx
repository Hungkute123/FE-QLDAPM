import React, { useEffect, useState } from 'react';
import './AccountHeader.scss';
import { FiUser, FiSettings } from 'react-icons/fi';
import { MdOutlineExitToApp } from 'react-icons/md';
import { Link, useHistory } from 'react-router-dom';
import { BsBoxArrowInRight, BsShop } from 'react-icons/bs';
import { LoginModal } from '../LoginModal/LoginModal';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
import { getInfo } from '../../redux/slice/appSlice/userSlice';
import { useAppDispatch } from '../../redux/store';
import { GrUserAdmin } from 'react-icons/gr';
export const AccountHeader = () => {
  const history = useHistory();
  const [showOptions, setShowOptions] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSeller, setIsSeller] = useState(false);
  const { isAccount, account } = useSelector((state: RootState) => state.userSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getInfo({ jwt: localStorage.getItem('jwt') }));
    return () => {
    };
  }, [isOpen]);

  const handleOnEnter = () => {
    setShowOptions(true);
  };

  const handleOnLeave = () => {
    setShowOptions(false);
  };
  const handleLogout = () => {
    window.localStorage.clear();
    history.push({
      pathname: `/log-out`,
    });
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
              {account.TypeOfUser === 2 ? (
                <div className="account-header__option">
                  <GrUserAdmin size={20} />
                  <span>
                    <Link to="/admin/manage-user">Quản lý hệ thống</Link>
                  </span>
                </div>
              ) : account.TypeOfUser === 1 ? (
                <div className="account-header__option">
                  <BsShop size={20} />
                  <span>
                    <Link to="/seller/product-management">Kênh người bán</Link>
                  </span>
                </div>
              ) : (
                <></>
              )}
              <div className="account-header__option">
                <FiSettings size={20} />
                <span>
                  <Link to="/account">Bảng điều khiển của khách hàng</Link>
                </span>
              </div>

              <div className="account-header__option" onClick={handleLogout}>
                <button>
                  <MdOutlineExitToApp size={20} />
                  <span>Thoát</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
