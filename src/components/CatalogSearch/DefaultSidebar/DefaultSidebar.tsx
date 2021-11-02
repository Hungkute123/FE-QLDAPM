import React, { useState } from 'react';
import './DefaultSidebar.scss';
import { Carousel } from 'react-bootstrap';
import { GrFormNext } from 'react-icons/gr';
export const DefaultSidebar = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: any, e: any) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="default-sidebar">
      <div className="default-sidebar__box default-sidebar__box--1">
        <div className="default-sidebar__image">
          <div className="footer__right--gird_item">
            <img src="/social/vnpost.png" alt="" />
          </div>
          <div className="footer__right--gird_item">
            <img src="/social/ahamove_logo.png" alt="" />
          </div>
          <div className="footer__right--gird_item">
            <img src="/social/icon_giao_hang_nhanh.png" alt="" />
          </div>
          <div className="footer__right--gird_item">
            <img src="/social/icon_snappy.png" alt="" />
          </div>
        </div>
        <span>#fahasaOnline</span>
      </div>
      <div className="default-sidebar__box default-sidebar__box--2">
        <h2>NHÓM CHỦ ĐỀ</h2>
        <div className="default-sidebar__list">
          <div>
            <GrFormNext size={20} />
            <span>GÓC ĐỘC GIẢ CẢM NHẬN</span>
          </div>
          <div>
            <GrFormNext size={20} />
            <span>ĐỌC CHẬM</span>
          </div>
          <div>
            <GrFormNext size={20} />
            <span>BÀI VIẾT MỚI NHẤT</span>
          </div>
          <div className="">
            <GrFormNext size={20} />
            <span>BÀI VIẾT XEM NHIỀU NHẤT</span>
          </div>
          <div>
            <GrFormNext size={20} />
            <span>CỘNG ĐỒNG</span>
          </div>
        </div>
      </div>
      <div className="default-sidebar__box default-sidebar__box--3">
        <h2>CÓ THỂ BẠN QUAN TÂM</h2>
        <div className="default-sidebar__carousel">
          <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://cdn0.fahasa.com/media/catalog/product/cache/2/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/6/0/600cau-ma-nha-xi-hanako-tap10.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://cdn0.fahasa.com/media/catalog/product/cache/2/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/6/0/600cau-ma-nha-xi-hanako-tap10.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://cdn0.fahasa.com/media/catalog/product/cache/2/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/6/0/600cau-ma-nha-xi-hanako-tap10.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
