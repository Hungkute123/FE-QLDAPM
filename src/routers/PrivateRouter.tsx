import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Redirect, Route, useLocation } from 'react-router-dom';
import { RootState } from '../redux/rootReducer';
import { getInfo } from '../redux/slice/appSlice/userSlice';
// import { doGetCurrentUser } from '../redux/slice';
// import { EToken } from '../constants/login';
// import { logout } from '../helpers/app';
// import { readCookie } from '../helpers/login';
// import { RootState } from '../redux/reducers/rootReducers';
import { useAppDispatch } from '../redux/store';

export const PrivateRouter: React.FC<IPrivateRouter> = ({
  component: Component,
  layout: Layout,
  exact,
  path,
  header: Header,
  footer: Footer,
  isHasFooter,
  isHasHeader,
  titleHeader,
  typeHeader,
  isHasGradiant,
  backPath,
  withoutAvatar,
}) => {
  const dispatch = useAppDispatch();
  const location = useLocation().pathname;
  const [isFetch, setIsFectch] = useState(false);
  const isAccount = useSelector((state: RootState) => state.userSlice.isAccount);
  const fecthInfo = async () => {
    const check = (await dispatch(getInfo({ jwt: localStorage.getItem('jwt') }))).payload;
    if (check === true || check === false || String(typeof check) === 'object') {
      setIsFectch(true);
    }
  };
  useEffect(() => {
    fecthInfo();
    return;
  }, [location]);

  const render = (props: any) => {
    console.log(location)
    if (isAccount == false && location === '/log-out') {
      return <Redirect to="/" />;
    }
    return isFetch == false ? (
      <div style={{ marginTop: '20px' }}>
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="secondary" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="info" />
        <Spinner animation="grow" variant="light" />
        <Spinner animation="grow" variant="dark" />
      </div>
    ) : isAccount ? (
      <Layout
        header={
          isHasHeader ? (
            <Header
              title={titleHeader}
              type={typeHeader}
              onClick={props.history.goBack}
              path={backPath}
              withoutAvatar={withoutAvatar}
            />
          ) : (
            <></>
          )
        }
        footer={isHasFooter ? <Footer /> : <></>}
      >
        <Component {...props} />
      </Layout>
    ) : (
      <Redirect to="/" />
    );
  };

  return <Route exact={exact} path={path} render={render} />;
};
