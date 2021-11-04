import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { Home, User } from '../containers';

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
          titleHeader="Cộng đồng"
          isHasFooter={true}
          footer={Footer}
        />
      </Switch>

      <Switch>
        <PrivateRouter
          exact={true}
          path={'/account'}
          component={User}
          layout={HeaderFooterLayout}
          isHasHeader={true}
          header={Header}
          titleHeader="Tài khoản - Fahasa"
          isHasFooter={true}
          footer={Footer}
        />
      </Switch>

      <Switch>
        <PrivateRouter
          exact={true}
          path={'/account/edit'}
          component={User}
          layout={HeaderFooterLayout}
          isHasHeader={true}
          header={Header}
          titleHeader="Thông tin tài khoản - Fahasa"
          isHasFooter={true}
          footer={Footer}
        />
      </Switch>
    </Router>
  );
};
