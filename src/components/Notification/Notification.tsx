import React from 'react';
import PropTypes from 'prop-types';
import './Notification.scss';

Notification.propTypes = {};

function Notification() {
  return (
    <div className="btn-notification" id="cart-notification">
      <a title="My notification" href="/">
        Notification
      </a>
      <span className="notify notify-right">7</span>
      <div className="notification-des">THÔNG BÁO</div>
      <div className="notification-block">
        <a href="/">
          <div className="total-notification">
            <span className="notification-title">
              Cập nhật email ngay để nhận quà từ Fahasa.com !
            </span>
            <span className="notification-calendar">07-01-2000</span>
            <p className="notification-body">
              Bạn vừa đăng kí tài khoản tại Fahasa? Hãy cập nhật email ngay để nhận được các thông
              báo quà tặng dành cho khách hàng mới!
            </p>
          </div>
        </a>
        <div className="notification-all">
          <a href="/">Xem Tất Cả Thông Báo</a>
        </div>
      </div>
    </div>
  );
}

export default Notification;
