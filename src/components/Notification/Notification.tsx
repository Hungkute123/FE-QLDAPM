import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Notification.scss';

import { IoIosNotificationsOutline } from 'react-icons/io';

Notification.propTypes = {};

function Notification() {
  const [showOptions, setShowOptions] = useState(false);

  const handleOnEnter = () => {
    setShowOptions(true);
  };

  const handleOnLeave = () => {
    setShowOptions(false);
  };

  return (
    <div className="notification" onMouseEnter={handleOnEnter} onMouseLeave={handleOnLeave}>
      <div className="notification__label">
        <IoIosNotificationsOutline size={25} color={'#F7941E'} />
        <span>THÔNG BÁO</span>
      </div>
      <span className="notify notify-right">7</span>
      <div className={`notification__block ${showOptions ? 'notification__block--show' : ''}`}>
        <div className="notification__list">
          <a href="/">
            <div className="notification__total">
              <span className="notification__title">
                Cập nhật email ngay để nhận quà từ Fahasa.com !
              </span>
              <span className="notification__calendar">07-01-2000</span>
              <p className="notification__content">
                Bạn vừa đăng kí tài khoản tại Fahasa? Hãy cập nhật email ngay để nhận được các thông
                báo quà tặng dành cho khách hàng mới!
              </p>
            </div>
          </a>
          <div className="notification__all">
            <a href="/">Xem Tất Cả Thông Báo</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
