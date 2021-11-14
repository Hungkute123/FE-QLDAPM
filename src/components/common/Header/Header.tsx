import React, { useEffect, useState } from 'react';
import './Header.scss';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import Notification from '../../Notification/Notification';
import Cart from '../../Cart/Cart';
import { AccountHeader } from '../../AccountHeader/AccountHeader';
import { ChooseLanguage } from '../../ChooseLanguage/ChooseLanguage';
import { getQueryStringValue } from '../../../helpers';

export const Header = () => {
  const history = useHistory();
  const location = useLocation();
  const [textSearch, setTextSearch] = useState('');
  
  
  const handleSubmit = (e: any) => {
    e.preventDefault();

    const searchInput = e.target.search;

    if (searchInput) {
      setTextSearch(searchInput.value);
      history.push({
        pathname: `/catalogsearch/result`,
        search: `?text=${searchInput.value}`,
      });
    }
  };

  useEffect(() => {
    if (location.search) {
      setTextSearch(getQueryStringValue('text'));
    }
  }, [location]);

  return (
    <div className="header">
      <div className="advertisement">
        <img src="/advertisement.png" alt="Fahasa advertisement" />
      </div>
      <Container className="main-header">
        <Row>
          <Col md={2} className="logo">
            <a href="/">
              <img alt="Fahasa" src="/logo.png" />
            </a>
          </Col>
          <Col md={7} className="header-search-box">
            <Form className="form-inline" onSubmit={handleSubmit}>
              <Form.Group className="input-search">
                <input
                  type="text"
                  defaultValue={textSearch}
                  name="search"
                  placeholder="Tìm kiếm sản phẩm mong muốn..."
                />
              </Form.Group>
              <button type="submit" className="pull-right btn-search"></button>
            </Form>
          </Col>
          <Col md={3} className="group-button-header">
            <Notification></Notification>
            <Cart></Cart>
            <AccountHeader></AccountHeader>
            <ChooseLanguage className="header__language"></ChooseLanguage>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
