import React, { useEffect, useState } from 'react';
import './User.scss';

import {
  UserSidebar,
  UserDashboard,
  UserInfo,
  UserCreateAddress,
  UserAddress,
  UserOrder,
  Wishlist,
  UserVoucher,
  UserSeriesBook,
  UserHistory,
  UserReview,
  UserNotification,
  UserNewsLetter,
} from '../../components';
import { Row, Col } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router';

export const User = () => {
  let location = useLocation().pathname;

  const renderLayout = (children: any, index: number) => {
    return (
      <div className="account">
        <Row>
          <Col lg={3} md={3}>
            <UserSidebar current={index} key={index}></UserSidebar>
          </Col>
          <Col lg={9} md={9}>
            {children}
          </Col>
        </Row>
      </div>
    );
  };

  if (location.slice(0, location.lastIndexOf('/')) == '/address/edit') {
    location = '/address/edit';
  }

  switch (location) {
    case '/account':
      return renderLayout(<UserDashboard></UserDashboard>, 0);
    case '/account/edit':
      return renderLayout(<UserInfo></UserInfo>, 1);
    case '/account/address':
      return renderLayout(<UserAddress></UserAddress>, 2);
    case '/account/address/create':
      return renderLayout(<UserCreateAddress></UserCreateAddress>, 2);
    case '/address/edit':
      return renderLayout(<UserCreateAddress></UserCreateAddress>, 2);
    case '/account/order':
      return renderLayout(<UserOrder></UserOrder>, 3);
    case '/account/voucher':
      return renderLayout(<UserVoucher></UserVoucher>, 4);
    case '/wishlist':
      return renderLayout(<Wishlist></Wishlist>, 5);
    case '/account/seriesbook':
      return renderLayout(<UserSeriesBook></UserSeriesBook>, 6);
    case '/account/history':
      return renderLayout(<UserHistory></UserHistory>, 7);
    case '/account/review':
      return renderLayout(<UserReview></UserReview>, 8);
    case '/account/notification':
      return renderLayout(<UserNotification></UserNotification>, 9);
    case '/account/newsletter':
      return renderLayout(<UserNewsLetter></UserNewsLetter>, 10);
    default:
      return <div></div>;
  }
};
