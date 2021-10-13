import React from 'react';
import './Home.scss';
import { Menu, ListProduct } from '../../components';
import { Tabs } from '../../components/common';

export const Home = () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div>
      <p>Hello ReactJs</p>
      <Menu />
      <Tabs
        titleTabs={['Xu hướng theo ngày', 'Sách HOT - Giảm sốc', 'Bestseller Ngoại Văn']}
        bodyTabs={[
          <div>
            <span>body 1</span>
            <ListProduct listproducts={list} />
          </div>,
          <div>
            <span>body 2</span>
            <ListProduct listproducts={list} />
          </div>,
          <div>
            <span>body 3</span>
            <ListProduct listproducts={list} />
          </div>,
        ]}
      ></Tabs>
    </div>
  );
};
