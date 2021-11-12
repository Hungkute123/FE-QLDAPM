import React, { Suspense } from 'react';
import './Seller.scss';
import { OrderManagement, ProductManagement, AddNewProduct, SellerSideBar } from '../../components';
import { Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router';

// const AddNewProduct = React.lazy(() =>
//   import('../../components').then(({ AddNewProduct }) => ({ default: AddNewProduct })),
// );
// const OrderManagement = React.lazy(() =>
//   import('../../components').then(({ OrderManagement }) => ({ default: OrderManagement })),
// );
// const ProductManagement = React.lazy(() =>
//   import('../../components').then(({ ProductManagement }) => ({ default: ProductManagement })),
// );
export const Seller = () => {
  const location = useLocation();

  switch (location.pathname) {
    case '/seller/product-management':
      return (
        <div className="seller">
          <Row>
            <Col lg={3} md={3}>
              <SellerSideBar current={0}></SellerSideBar>
            </Col>
            <Col lg={9} md={9}>
              <ProductManagement></ProductManagement>
            </Col>
          </Row>
        </div>
      );
      break;
    case '/seller/order-management':
      return (
        <div className="seller">
          <Row>
            <Col lg={3} md={3}>
              <SellerSideBar current={1}></SellerSideBar>
            </Col>
            <Col lg={9} md={9}>
              <OrderManagement></OrderManagement>
            </Col>
          </Row>
        </div>
      );
      break;
    case '/seller/add-new-product':
      return (
        <div className="seller">
          <Row>
            <Col lg={3} md={3}>
              <SellerSideBar current={2}></SellerSideBar>
            </Col>
            <Col lg={9} md={9}>
              <AddNewProduct></AddNewProduct>
            </Col>
          </Row>
        </div>
      );
      break;
    default:
      return <div></div>;
  }
};
