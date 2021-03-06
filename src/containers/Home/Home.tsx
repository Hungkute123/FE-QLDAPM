import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LazyLoad from 'react-lazyload';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ListProduct, Menu } from '../../components';
import { Button, Tabs } from '../../components/common';
import { HomeBanner } from '../../components/HomeBanner/HomeBanner';
import { MenuSlideshow } from '../../components/MenuSlideshow/MenuSlideshow';
import { RootState } from '../../redux/rootReducer';
import {
  getCalculator,
  getChildrenReadingStories,
  getHandWash,
  getMask,
  getPaintingBook,
  getProductTrend,
  getRubik,
  getShockingPriceToy,
  getTextbook,
  getTopToy
} from '../../redux/slice/appSlice/homeSlice';
import './Home.scss';
const Loading = () => (
  <div >
    <h5>Loading...</h5>
  </div>
)
export const Home = () => {
  const dispatch = useDispatch();
  const {
    trend,
    hot,
    bestseller,
    textbook,
    mask,
    handwash,
    toptoy,
    rubik,
    paintingbook,
    childrenreadingstories,
    calculator,
    shockingpricetoy,
  } = useSelector((state: RootState) => state.homeSlice);
  useEffect(() => {
    dispatch(getProductTrend({ limit: 10 }));
    dispatch(getTextbook({ IDCategory: 162, limit: 5 }));
    setTimeout(()=>{dispatch(getMask({ IDCategory: 75, limit: 5 }));
    dispatch(getHandWash({ IDCategory: 76, limit: 5 }));
    dispatch(getTopToy({ IDCategory: 138, limit: 5 }));},1000);
    setTimeout(()=>{ dispatch(getRubik({ IDCategory: 139, limit: 5 }));
    dispatch(getPaintingBook({ IDCategory: 122, limit: 5 }));
    dispatch(getChildrenReadingStories({ IDCategory: 54, limit: 5 }));},2000);
    setTimeout(()=>{ dispatch(getCalculator({ IDCategory: 196, limit: 5 }));
    dispatch(getShockingPriceToy({ IDCategory: 138, limit: 4 }));},3000);
  }, [dispatch]);
  const cart = useSelector((state: RootState) => state.cartSlice);
  return (
    <div className="home">
      <MenuSlideshow />
      <HomeBanner />
      <Menu />
      <div className="home__tabs">
        <Tabs
          titleTabs={['Xu h?????ng theo ng??y', ]}
          bodyTabs={[
            <div>
              <ListProduct listproducts={trend.data} path={trend.Path} />
              <div className="home__btn">
                <Link to="/catalogsearch/result?text=s??ch"><Button>Xem Th??m</Button></Link>
              </div>
            </div>,
            <div>
              <ListProduct listproducts={hot.data} path={hot.Path} />
            </div>,
            <div>
              <ListProduct listproducts={bestseller.data} path={bestseller.Path} />
            </div>,
          ]}
        ></Tabs>
      </div>
      <LazyLoad placeholder={<Loading />}>
      <div className="home__tabs">
        <Tabs
          titleTabs={['Gi??o khoa - Tham kh???o']}
          bodyTabs={[
            <div>
              <ListProduct listproducts={textbook.data} path={textbook.Path} />
              <div className="home__btn">
              <Link to="/catalogsearch/result?text=s??ch gi??o khoa"><Button>Xem Th??m</Button></Link>
              </div>
            </div>,
          ]}
        ></Tabs>
      </div>
      </LazyLoad>
      <LazyLoad placeholder={<Loading />}>
      <div className="home__tabs">
        <Tabs
          titleTabs={['Kh???u trang', 'N?????c R???a Tay - X?? Ph??ng']}
          bodyTabs={[
            <div>
              <ListProduct listproducts={mask.data} path={mask.Path} />
              <div className="home__btn">
              <Link to="/catalogsearch/result?text=kh???u trang"><Button>Xem Th??m</Button></Link>
              </div>
            </div>,
            <div>
              <ListProduct listproducts={handwash.data} path={handwash.Path} />
              <div className="home__btn">
              <Link to="/catalogsearch/result?text=r???a tay"><Button>Xem Th??m</Button></Link>
              </div>
            </div>,
          ]}
        ></Tabs>
         </div>
      </LazyLoad>
      <LazyLoad placeholder={<Loading />}>
      <div className="home__tabs">
      <Tabs
        titleTabs={['TOP ????? Ch??i HOT', 'Rubik']}
        bodyTabs={[
          <div>
            <ListProduct listproducts={toptoy.data} path={toptoy.Path} />
            <div className="home__btn">
            <Link to="/catalogsearch/result?text=????? ch??i"><Button>Xem Th??m</Button></Link>
              </div>
          </div>,
          <div>
            <ListProduct listproducts={rubik.data} path={rubik.Path} />
            <div className="home__btn">
            <Link to="/catalogsearch/result?text=rubik"><Button>Xem Th??m</Button></Link>
              </div>
          </div>,
        ]}
      ></Tabs>
      </div>
      </LazyLoad>
      <LazyLoad placeholder={<Loading />}>
      <div className="home__tabs">
      <Tabs
        titleTabs={['T?? M??u - Luy???n Ch???', 'D???ng C??? V???']}
        bodyTabs={[
          <div>
            <ListProduct listproducts={paintingbook.data} path={paintingbook.Path} />
            <div className="home__btn">
            <Link to="/catalogsearch/result?text=t???p t??"><Button>Xem Th??m</Button></Link>
              </div>
          </div>,
          <div>
            <ListProduct listproducts={paintingbook.data} path={paintingbook.Path} />
            <div className="home__btn">
            <Link to="/catalogsearch/result?text=t???p t??"><Button>Xem Th??m</Button></Link>
              </div>
          </div>,
        ]}
      ></Tabs>
      </div>
      </LazyLoad>
      <LazyLoad placeholder={<Loading />}>
      <div className="home__tabs">
      <Tabs
        titleTabs={['Truy???n ?????c Thi???u Nhi']}
        bodyTabs={[
          <div>
            <ListProduct
              listproducts={childrenreadingstories.data}
              path={childrenreadingstories.Path}
            />
            <div className="home__btn">
            <Link to="/catalogsearch/result?text=truy???n"><Button>Xem Th??m</Button></Link>
              </div>
          </div>,
        ]}
      ></Tabs>
      </div>
      </LazyLoad>
      <LazyLoad placeholder={<Loading />}>
      <div className="home__tabs">
      <Tabs
        titleTabs={['M??y T??nh Khoa H???c']}
        bodyTabs={[
          <div>
            <ListProduct listproducts={calculator.data} path={calculator.Path} />
            <div className="home__btn">
            <Link to="/catalogsearch/result?text=m??y t??nh"><Button>Xem Th??m</Button></Link>
              </div>
          </div>,
        ]}
      ></Tabs>
      </div>
      </LazyLoad>
      <LazyLoad placeholder={<Loading />}>
      <div className="home__tabs">
      <Tabs
        titleTabs={['????? Ch??i Gi?? S???c']}
        bodyTabs={[
          <div>
            <Container>
              <Row>
                <Col xs={4}>
                  <div className="home__tabs__banner">
                    <img src="./product/350X415.jpg" alt="banner" />
                  </div>
                </Col>
                <Col>
                  <ListProduct
                    listproducts={shockingpricetoy.data}
                    path={shockingpricetoy.Path}
                    numCol={2}
                  />
                  <div className="home__btn">
                  <Link to="/catalogsearch/result?text=????? ch??i"><Button>Xem Th??m</Button></Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>,
        ]}
      ></Tabs>
      </div>
      </LazyLoad>
    </div>
  );
};
