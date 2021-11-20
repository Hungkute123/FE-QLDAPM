import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LazyLoad from 'react-lazyload';
import { useDispatch, useSelector } from 'react-redux';
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

  return (
    <div className="home">
      <MenuSlideshow />
      <HomeBanner />
      <Menu />
      <div className="home__tabs">
        <Tabs
          titleTabs={['Xu hướng theo ngày', 'Sách HOT - Giảm sốc', 'Bestseller Ngoại Văn']}
          bodyTabs={[
            <div>
              <ListProduct listproducts={trend.data} path={trend.Path} />
              <div className="home__btn">
                <Button>Xem Thêm</Button>
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
          titleTabs={['Giáo khoa - Tham khảo']}
          bodyTabs={[
            <div>
              <ListProduct listproducts={textbook.data} path={textbook.Path} />
              <div className="home__btn">
                <Button>Xem Thêm</Button>
              </div>
            </div>,
          ]}
        ></Tabs>
      </div>
      </LazyLoad>
      <LazyLoad placeholder={<Loading />}>
      <div className="home__tabs">
        <Tabs
          titleTabs={['Khẩu trang', 'Nước Rửa Tay - Xà Phòng']}
          bodyTabs={[
            <div>
              <ListProduct listproducts={mask.data} path={mask.Path} />
              <div className="home__btn">
                <Button>Xem Thêm</Button>
              </div>
            </div>,
            <div>
              <ListProduct listproducts={handwash.data} path={handwash.Path} />
              <div className="home__btn">
                <Button>Xem Thêm</Button>
              </div>
            </div>,
          ]}
        ></Tabs>
         </div>
      </LazyLoad>
      <LazyLoad placeholder={<Loading />}>
      <div className="home__tabs">
      <Tabs
        titleTabs={['TOP Đồ Chơi HOT', 'Rubik']}
        bodyTabs={[
          <div>
            <ListProduct listproducts={toptoy.data} path={toptoy.Path} />
            <div className="home__btn">
                <Button>Xem Thêm</Button>
              </div>
          </div>,
          <div>
            <ListProduct listproducts={rubik.data} path={rubik.Path} />
            <div className="home__btn">
                <Button>Xem Thêm</Button>
              </div>
          </div>,
        ]}
      ></Tabs>
      </div>
      </LazyLoad>
      <LazyLoad placeholder={<Loading />}>
      <div className="home__tabs">
      <Tabs
        titleTabs={['Tô Màu - Luyện Chữ', 'Dụng Cụ Vẽ']}
        bodyTabs={[
          <div>
            <ListProduct listproducts={paintingbook.data} path={paintingbook.Path} />
            <div className="home__btn">
                <Button>Xem Thêm</Button>
              </div>
          </div>,
          <div>
            <ListProduct listproducts={paintingbook.data} path={paintingbook.Path} />
            <div className="home__btn">
                <Button>Xem Thêm</Button>
              </div>
          </div>,
        ]}
      ></Tabs>
      </div>
      </LazyLoad>
      <LazyLoad placeholder={<Loading />}>
      <div className="home__tabs">
      <Tabs
        titleTabs={['Truyện Đọc Thiếu Nhi']}
        bodyTabs={[
          <div>
            <ListProduct
              listproducts={childrenreadingstories.data}
              path={childrenreadingstories.Path}
            />
            <div className="home__btn">
                <Button>Xem Thêm</Button>
              </div>
          </div>,
        ]}
      ></Tabs>
      </div>
      </LazyLoad>
      <LazyLoad placeholder={<Loading />}>
      <div className="home__tabs">
      <Tabs
        titleTabs={['Máy Tính Khoa Học']}
        bodyTabs={[
          <div>
            <ListProduct listproducts={calculator.data} path={calculator.Path} />
            <div className="home__btn">
                <Button>Xem Thêm</Button>
              </div>
          </div>,
        ]}
      ></Tabs>
      </div>
      </LazyLoad>
      <LazyLoad placeholder={<Loading />}>
      <div className="home__tabs">
      <Tabs
        titleTabs={['Đồ Chơi Giá Sốc']}
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
                    <Button>Xem Thêm</Button>
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
