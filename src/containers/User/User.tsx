import React from 'react';

import { UserSidebar, UserDashboard, UserInfo } from '../../components';
import { Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router';

export const User = () => {
  const location = useLocation();

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
      break;
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
    default:
      return <div></div>;
  }
};
