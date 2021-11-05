import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { CatalogSearch, Home, OneStepCheckout } from '../containers';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';
import { BlankLayout, HeaderFooterLayout, OnlyFooterLayout, OnlyHeaderLayout } from '../layouts';

import { Header, Footer } from '../components/common';

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
      </Switch>
    </Router>
  );
};
