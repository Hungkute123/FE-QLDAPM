import React from 'react';
import './Header.scss';

import { Container, Row, Col, Form } from 'react-bootstrap';

import Notification from '../../Notification/Notification';
import Cart from '../../Cart/Cart';
import { AccountHeader } from '../../AccountHeader/AccountHeader';
import { ChooseLanguage } from '../../ChooseLanguage/ChooseLanguage';

export const Header = () => {
  return (
    <div className="header">
      <div className="advertisement">
        <img src="/advertisement.png" alt="Fahasa advertisement" />
      </div>
      <Container className="main-header">
        <Row>
          <Col md={3} className="logo">
            <a href="/">
              <img alt="Fahasa" src="/logo.png" />
            </a>
          </Col>
          <Col md={6} className="header-search-box">
            <Form className="form-inline">
              <Form.Group className="input-search">
                <input type="text" placeholder="Keyword here..." />
              </Form.Group>
              <button type="submit" className="pull-right btn-search"></button>
            </Form>
          </Col>
          <Col md={3} className="group-button-header">
            <Notification></Notification>
            <AccountHeader></AccountHeader>
            <ChooseLanguage></ChooseLanguage>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
