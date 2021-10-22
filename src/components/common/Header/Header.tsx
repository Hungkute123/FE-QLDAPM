import React from 'react';
import './Header.scss';

import Notification from '../../Notification/Notification';
import Cart from '../../Cart/Cart';

export const Header = () => {
  return (
    <div className="header">
      <div className="advertisement">
        <img src="/advertisement.png" alt="Fahasa advertisement" />
      </div>
      <div className="container main-header">
        <div className="row">
          <div className="col-md-3 logo">
            <a href="/">
              <img alt="Fahasa" src="/logo.png" />
            </a>
          </div>
          <div className="col-md-6 header-search-box">
            <form className="form-inline">
              <div className="form-group input-search">
                <input type="text" placeholder="Keyword here..." />
              </div>
              <button type="submit" className="pull-right btn-search"></button>
            </form>
          </div>
          <div className="col-md-3 group-button-header">
            <Notification></Notification>
            <Cart></Cart>
            <div className="btn-account" id="account">
              <a title="My Account" href="/">
                Account
              </a>

              <div className="des">TÀI KHOẢN</div>
              <div className="account-block">
                <div className="account-all">
                  <a href="/">
                    <img src="./settings.png" alt="" /> Bảng điều khiển của khách hàng
                  </a>
                </div>
                <div className="account-all">
                  <a href="/">
                    <img src="./logout.png" alt="" />
                    Thoát
                  </a>
                </div>
              </div>
            </div>
            <div className="btn-language" id="language">
              <div className="language-block">
                <div className="language-item">
                  <img src="./vietnam.png" alt="" />
                  <a href="/">Vietnamese</a>
                </div>
                <div className="language-item">
                  <img src="./united.png" alt="" />
                  <a href="/">Englist</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
