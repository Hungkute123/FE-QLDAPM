import React, { useState } from 'react';
import './Home.scss';
import { Menu, ListProduct, LoginModal, ChooseLanguage, AccountHeader } from '../../components';
import { Tabs, Button } from '../../components/common';

export const Home = () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <p>Hello ReactJs</p>
      <Button onClick={() => setIsOpen(true)}>Modal đăng nhập</Button>
      <ChooseLanguage />
      <AccountHeader />
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
      <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};
