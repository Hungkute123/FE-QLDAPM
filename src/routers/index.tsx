import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { CatalogSearch, Home, OneStepCheckout, User, Cart, Detail, AdminHome } from '../containers';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';
import { BlankLayout, HeaderFooterLayout, OnlyFooterLayout, OnlyHeaderLayout } from '../layouts';
import { Header, Footer } from '../components/common';
import { Seller } from '../containers/Seller/Seller';

export const Routers = () => {
  const buildysURL = process.env.REACT_APP_LINK_BUILDYS;

  return (
    <Router>
      <Switch>
        <PrivateRouter
          exact={true}
          path={'/'}
          component={Home}
          layout={HeaderFooterLayout}
          isHasHeader={true}
          header={Header}
          isHasFooter={true}
          footer={Footer}
        />

        <PrivateRouter
          path={'/wishlist'}
          component={User}
          layout={HeaderFooterLayout}
          isHasHeader={true}
          header={Header}
          isHasFooter={true}
          footer={Footer}
        />

        <PrivateRouter
          path={'/onestepcheckout/index'}
          component={OneStepCheckout}
          layout={OnlyHeaderLayout}
          isHasHeader={true}
          header={Header}
        />

        <PrivateRouter
          path={'/catalogsearch/result'}
          component={CatalogSearch}
          layout={HeaderFooterLayout}
          isHasHeader={true}
          header={Header}
          isHasFooter={true}
          footer={Footer}
        />

        <PrivateRouter
          path={'/seller/add-new-product'}
          component={Seller}
          layout={HeaderFooterLayout}
          isHasHeader={true}
          header={Header}
          isHasFooter={true}
          footer={Footer}
        />
        <PrivateRouter
          path={'/seller/order-management'}
          component={Seller}
          layout={HeaderFooterLayout}
          isHasHeader={true}
          header={Header}
          isHasFooter={true}
          footer={Footer}
        />
        <PrivateRouter
          path={'/seller/product-management'}
          component={Seller}
          layout={HeaderFooterLayout}
          isHasHeader={true}
          header={Header}
          isHasFooter={true}
          footer={Footer}
        />
      </Switch>
      <Switch>
        <PrivateRouter
          path={'/cart'}
          component={Cart}
          layout={HeaderFooterLayout}
          isHasHeader={true}
          header={Header}
          titleHeader="Giỏ hàng"
          isHasFooter={true}
          footer={Footer}
        />
        <PrivateRouter
          path={'/detail-product'}
          component={Detail}
          layout={HeaderFooterLayout}
          isHasHeader={true}
          header={Header}
          titleHeader="Chi tiết sản phẩm"
          isHasFooter={true}
          footer={Footer}
        />
        <PrivateRouter
          path={'/account'}
          component={User}
          layout={HeaderFooterLayout}
          isHasHeader={true}
          header={Header}
          titleHeader="Tài khoản - Fahasa"
          isHasFooter={true}
          footer={Footer}
        />

        <PrivateRouter
          path={'/account/edit'}
          component={User}
          layout={HeaderFooterLayout}
          isHasHeader={true}
          header={Header}
          titleHeader="Thông tin tài khoản - Fahasa"
          isHasFooter={true}
          footer={Footer}
        />
        <PrivateRouter
          path={'/account/address'}
          component={User}
          layout={HeaderFooterLayout}
          isHasHeader={true}
          header={Header}
          titleHeader="Sổ địa chỉ - Fahasa"
          isHasFooter={true}
          footer={Footer}
        />
        <PrivateRouter
          path={'/account/address/edit'}
          component={User}
          layout={HeaderFooterLayout}
          isHasHeader={true}
          header={Header}
          titleHeader="Sổ địa chỉ - Fahasa"
          isHasFooter={true}
          footer={Footer}
        />
        <PrivateRouter
          path={'/account/order'}
          component={User}
          layout={HeaderFooterLayout}
          isHasHeader={true}
          header={Header}
          titleHeader="Sổ địa chỉ - Fahasa"
          isHasFooter={true}
          footer={Footer}
        />

        <PrivateRouter
          path={'/admin/manage-user'}
          component={AdminHome}
          layout={HeaderFooterLayout}
          isHasHeader={true}
          header={Header}
        />
        <PrivateRouter
          path={'/admin/manage-categories'}
          component={AdminHome}
          layout={HeaderFooterLayout}
          isHasHeader={true}
          header={Header}
        />
        <PrivateRouter
          path={'/admin/manage-report'}
          component={AdminHome}
          layout={HeaderFooterLayout}
          isHasHeader={true}
          header={Header}
        />
        <PrivateRouter
          path={'/admin/sales-report'}
          component={AdminHome}
          layout={HeaderFooterLayout}
          isHasHeader={true}
          header={Header}
        />
      </Switch>
    </Router>
  );
};
