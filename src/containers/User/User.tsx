import React from 'react';
import './User.scss';

import {
  UserSidebar,
  UserDashboard,
  UserInfo,
  UserCreateAddress,
  UserAddress,
  UserOrder,
  Wishlist,
} from '../../components';
import { Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router';

export const User = () => {
  const location = useLocation();

  const renderLayout = (children: any, index: number) => {
    return (
      <div className="account">
        <Row>
          <Col lg={3} md={3}>
            <UserSidebar current={index}></UserSidebar>
          </Col>
          <Col lg={9} md={9}>
            {children}
          </Col>
        </Row>
      </div>
    );
  };

  switch (location.pathname) {
    case '/account':
      return (
        <div className="account">
          <Row>
            <Col lg={3} md={3}>
              <UserSidebar current={0}></UserSidebar>
            </Col>
            <Col lg={9} md={9}>
              <UserDashboard></UserDashboard>
            </Col>
          </Row>
        </div>
      );
    case '/account/edit':
      return (
        <div className="account">
          <Row>
            <Col lg={3} md={3}>
              <UserSidebar current={1}></UserSidebar>
            </Col>
            <Col lg={9} md={9}>
              <UserInfo></UserInfo>
            </Col>
          </Row>
        </div>
      );
      break;
    case '/account/address':
      return (
        <div className="account">
          <Row>
            <Col lg={3} md={3}>
              <UserSidebar current={2}></UserSidebar>
            </Col>
            <Col lg={9} md={9}>
              <UserAddress></UserAddress>
            </Col>
          </Row>
        </div>
      );
      break;
    case '/account/address/edit':
      return (
        <div className="account">
          <Row>
            <Col lg={3} md={3}>
              <UserSidebar current={2}></UserSidebar>
            </Col>
            <Col lg={9} md={9}>
              <UserCreateAddress></UserCreateAddress>
            </Col>
          </Row>
        </div>
      );
      break;
    case '/account/order':
      return (
        <div className="account">
          <Row>
            <Col lg={3} md={3}>
              <UserSidebar current={3}></UserSidebar>
            </Col>
            <Col lg={9} md={9}>
              <UserOrder></UserOrder>
            </Col>
          </Row>
        </div>
      );
      break;

    case '/wishlist':
      return renderLayout(<Wishlist></Wishlist>, 5);
    default:
      return <div></div>;
  }
};
