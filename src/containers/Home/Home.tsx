import React from 'react';
import './Home.scss';
import { Menu } from '../../components';
import { Tabs } from '../../components/common';

export const Home = () => {
  return (
    <div>
      <p>Hello ReactJs</p>
      <Menu />
      <Tabs
        titleTabs={['Xu hướng theo ngày', 'Sách HOT - Giảm sốc', 'Bestseller Ngoại Văn']}
        bodyTabs={[
          <div>
            <span>body 1</span>
          </div>,
          <div>
            <span>body 2</span>
          </div>,
          <div>
            <span>body 3</span>
          </div>,
        ]}
      ></Tabs>
    </div>
  );
};
