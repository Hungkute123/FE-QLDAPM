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
        <PublicRouter
          exact={true}
          path={'/'}
          component={Home}
          layout={HeaderFooterLayout}
          isHasHeader={true}
          header={Header}
          isHasFooter={true}
          footer={Footer}
        />

        <PublicRouter
          path={'/catalogsearch/result'}
          component={CatalogSearch}
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

        <PublicRouter
          path={'/catalogsearch/result'}
          component={CatalogSearch}
          layout={HeaderFooterLayout}
          isHasHeader={true}
          header={Header}
          isHasFooter={true}
          footer={Footer}
        />

        <PrivateRouter
          path={'/seller/account-balance'}
          component={Seller}
          layout={HeaderFooterLayout}
          isHasHeader={true}
          header={Header}
          isHasFooter={true}
          footer={Footer}
        />

        <PrivateRouter
          path={'/seller/voucher'}
          component={Seller}
          layout={HeaderFooterLayout}
          isHasHeader={true}
          header={Header}
          isHasFooter={true}
          footer={Footer}
        />

        <PrivateRouter
          path={'/seller/revenue'}
          component={Seller}
          layout={HeaderFooterLayout}
          isHasHeader={true}
          header={Header}
          isHasFooter={true}
          footer={Footer}
        />

        <PrivateRouter
          path={'/seller/edit-product/:id'}
          component={Seller}
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

        <PrivateRouter
          path={'/seller/create-promotion'}
          component={Seller}
          layout={HeaderFooterLayout}
          isHasHeader={true}
          header={Header}
          isHasFooter={true}
          footer={Footer}
        />

        <PrivateRouter
          path={'/seller/create-discount-code'}
          component={Seller}
          layout={HeaderFooterLayout}
          isHasHeader={true}
          header={Header}
          isHasFooter={true}
          footer={Footer}
        />
        <PublicRouter
          path={'/seller/edit-discount-code/:id'}
          component={Seller}
          layout={HeaderFooterLayout}
          isHasHeader={true}
          header={Header}
          isHasFooter={true}
          footer={Footer}
        />
      </Switch>
      <Switch>
        <PublicRouter
          path={'/cart'}
          component={Cart}
          layout={HeaderFooterLayout}
          isHasHeader={true}
          header={Header}
          titleHeader="Gio?? ha??ng"
          isHasFooter={true}
          footer={Footer}
        />
        <PublicRouter
          path={'/product-detail/:IDProduct'}
          component={Detail}
          layout={HeaderFooterLayout}
          isHasHeader={true}
          header={Header}
          titleHeader="Chi ti????t sa??n ph????m"
          isHasFooter={true}
          footer={Footer}
        />
      </Switch>

      <Switch>
        <PrivateRouter
          path={'/account'}
          component={User}
          layout={HeaderFooterLayout}
          isHasHeader={true}
          header={Header}
          titleHeader="T??i kho???n - Fahasa"
          isHasFooter={true}
          footer={Footer}
        />

        <PrivateRouter
          path={'/account/edit'}
          component={User}
          layout={HeaderFooterLayout}
          isHasHeader={true}
          header={Header}
          titleHeader="Th??ng tin t??i kho???n - Fahasa"
          isHasFooter={true}
          footer={Footer}
        />
        <PrivateRouter
          path={'/account/address'}
          component={User}
          layout={HeaderFooterLayout}
          isHasHeader={true}
          header={Header}
          titleHeader="S??? ?????a ch??? - Fahasa"
          isHasFooter={true}
          footer={Footer}
        />
        <PrivateRouter
          path={'/account/address/create'}
          component={User}
          layout={HeaderFooterLayout}
          isHasHeader={true}
          header={Header}
          titleHeader="S??? ?????a ch??? - Fahasa"
          isHasFooter={true}
          footer={Footer}
        />
        <PrivateRouter
          path={'/address/edit/:ID'}
          component={User}
          layout={HeaderFooterLayout}
          isHasHeader={true}
          header={Header}
          titleHeader="S??? ?????a ch??? - Fahasa"
          isHasFooter={true}
          footer={Footer}
        />
        <PrivateRouter
          path={'/account/order'}
          component={User}
          layout={HeaderFooterLayout}
          isHasHeader={true}
          header={Header}
          titleHeader="S??? ?????a ch??? - Fahasa"
          isHasFooter={true}
          footer={Footer}
        />

        <PrivateRouter
          path={'/order/detail/:ID'}
          component={User}
          layout={HeaderFooterLayout}
          isHasHeader={true}
          header={Header}
          titleHeader="Chi ti???t ????n h??ng - Fahasa"
          isHasFooter={true}
          footer={Footer}
        />

        <PrivateRouter
          path={'/account/voucher'}
          component={User}
          layout={HeaderFooterLayout}
          isHasHeader={true}
          header={Header}
          titleHeader="Voucher - Fahasa"
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
          path={'/account/seriesbook'}
          component={User}
          layout={HeaderFooterLayout}
          isHasHeader={true}
          header={Header}
          titleHeader="S??ch theo b??? - Fahasa"
          isHasFooter={true}
          footer={Footer}
        />

        <PrivateRouter
          path={'/account/history'}
          component={User}
          layout={HeaderFooterLayout}
          isHasHeader={true}
          header={Header}
          titleHeader="T??i kho???n F-point/Freeship- Fahasa"
          isHasFooter={true}
          footer={Footer}
        />

        <PrivateRouter
          path={'/account/review'}
          component={User}
          layout={HeaderFooterLayout}
          isHasHeader={true}
          header={Header}
          titleHeader="Nh???n x??t - Fahasa"
          isHasFooter={true}
          footer={Footer}
        />

        <PrivateRouter
          path={'/account/notification'}
          component={User}
          layout={HeaderFooterLayout}
          isHasHeader={true}
          header={Header}
          titleHeader="Th??ng b??o - Fahasa"
          isHasFooter={true}
          footer={Footer}
        />

        <PrivateRouter
          path={'/account/newsletter'}
          component={User}
          layout={HeaderFooterLayout}
          isHasHeader={true}
          header={Header}
          titleHeader="????ng k?? nh???n th?? ??i???n t??? - Fahasa"
          isHasFooter={true}
          footer={Footer}
        />
      </Switch>

      <Switch>
        <PublicRouter
          path={'/admin/manage-user'}
          component={AdminHome}
          layout={HeaderFooterLayout}
          isHasHeader={true}
          header={Header}
        />
        <PublicRouter
          path={'/admin/manage-categories'}
          component={AdminHome}
          layout={HeaderFooterLayout}
          isHasHeader={true}
          header={Header}
        />
        <PublicRouter
          path={'/admin/category/:IDCategory'}
          component={AdminHome}
          layout={HeaderFooterLayout}
          isHasHeader={true}
          header={Header}
        />
        <PublicRouter
          path={'/admin/manage-report'}
          component={AdminHome}
          layout={HeaderFooterLayout}
          isHasHeader={true}
          header={Header}
        />
        <PublicRouter
          path={'/admin/sales-report'}
          component={AdminHome}
          layout={HeaderFooterLayout}
          isHasHeader={true}
          header={Header}
        />
        <PrivateRouter
          exact={true}
          path={'/log-out'}
          component={Home}
          layout={HeaderFooterLayout}
          isHasHeader={true}
          header={Header}
          isHasFooter={true}
          footer={Footer}
        />
      </Switch>
    </Router>
  );
};
