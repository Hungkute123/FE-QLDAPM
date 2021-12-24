import React, { Suspense, useEffect, useState } from 'react';
import './Seller.scss';
import {
  OrderManagement,
  ProductManagement,
  AddNewProduct,
  SellerSideBar,
  Revenue,
  AccountBalance,
  EditProduct,
  DiscountManagement,
  CreateDiscountCode,
  CreatePromotion,
  EditDiscountCode,
} from '../../components';
import { Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { useHistory } from 'react-router-dom';

export const Seller = () => {
  const history = useHistory();
  const [kindScreen, setKindScreen] = useState(0);
  const location = useLocation();
  const { account } = useSelector((state: RootState) => state.userSlice);
  useEffect(() => {
    if(account.TypeOfUser != 1){
      history.push({
        pathname: `/`,
      });
    }
    if (location.pathname === '/seller/account-balance') setKindScreen(0);
    if (location.pathname === '/seller/revenue') setKindScreen(1);
    if (location.pathname === '/seller/add-new-product') setKindScreen(2);
    if (location.pathname === '/seller/product-management') setKindScreen(3);
    if (location.pathname === '/seller/order-management') setKindScreen(4);
    if (location.pathname === '/seller/voucher') setKindScreen(5);
    if (location.pathname.slice(0, location.pathname.lastIndexOf('/')) === '/seller/edit-product')
      setKindScreen(6);
    if (location.pathname === '/seller/create-discount-code') setKindScreen(7);
    if (location.pathname === '/seller/create-promotion') setKindScreen(8);
    if (
      location.pathname.slice(0, location.pathname.lastIndexOf('/')) ===
      '/seller/edit-discount-code'
    )
      setKindScreen(9);
  }, [location]);
  const renderBody = (kind: number) => {
    switch (kind) {
      case 0:
        return <AccountBalance />;
      case 1:
        return <Revenue />;
      case 2:
        return <AddNewProduct />;
      case 3:
        return <ProductManagement />;
      case 4:
        return <OrderManagement />;
      case 5:
        return <DiscountManagement />;
      case 6:
        return <EditProduct />;
      case 7:
        return <CreateDiscountCode />;
      case 8:
        return <CreatePromotion />;
      case 9:
        return <EditDiscountCode />;
      default:
        return <></>;
    }
  };

  return (
    <div className="seller">
      <Row>
        <Col lg={3} md={3}>
          <SellerSideBar current={kindScreen}></SellerSideBar>
        </Col>
        <Col lg={9} md={9}>
          {renderBody(kindScreen)}
        </Col>
      </Row>
    </div>
  );
};
