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
  UserVoucher,
  UserSeriesBook,
  UserHistory,
  UserReview,
} from '../../components';
import { Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router';
import { UserNewsLetter } from '../../components/UserNewsLetter/UserNewsLetter';

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
    case '/account/voucher':
      return (
        <div className="account">
          <Row>
            <Col lg={3} md={3}>
              <UserSidebar current={4}></UserSidebar>
            </Col>
            <Col lg={9} md={9}>
              <UserVoucher></UserVoucher>
            </Col>
          </Row>
        </div>
      );
      break;
    case '/account/seriesbook':
      return (
        <div className="account">
          <Row>
            <Col lg={3} md={3}>
              <UserSidebar current={6}></UserSidebar>
            </Col>
            <Col lg={9} md={9}>
              <UserSeriesBook></UserSeriesBook>
            </Col>
          </Row>
        </div>
      );
      break;
    case '/account/history':
      return (
        <div className="account">
          <Row>
            <Col lg={3} md={3}>
              <UserSidebar current={7}></UserSidebar>
            </Col>
            <Col lg={9} md={9}>
              <UserHistory></UserHistory>
            </Col>
          </Row>
        </div>
      );
      break;
    case '/account/review':
      return (
        <div className="account">
          <Row>
            <Col lg={3} md={3}>
              <UserSidebar current={8}></UserSidebar>
            </Col>
            <Col lg={9} md={9}>
              <UserReview></UserReview>
            </Col>
          </Row>
        </div>
      );
      break;
    case '/account/notification':
      return (
        <div className="account">
          <Row>
            <Col lg={3} md={3}>
              <UserSidebar current={9}></UserSidebar>
            </Col>
            <Col lg={9} md={9}>
              <UserSeriesBook></UserSeriesBook>
            </Col>
          </Row>
        </div>
      );
      break;
    case '/account/newsletter':
      return (
        <div className="account">
          <Row>
            <Col lg={3} md={3}>
              <UserSidebar current={10}></UserSidebar>
            </Col>
            <Col lg={9} md={9}>
              <UserNewsLetter></UserNewsLetter>
            </Col>
          </Row>
        </div>
      );
      break;
    case '/wishlist':
      return renderLayout(<Wishlist></Wishlist>, 5);
      break;
    default:
      return <div></div>;
  }
};
