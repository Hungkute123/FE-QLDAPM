import React, { useState } from 'react';
import './ProductCategory.scss';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
export const ProductCategory = () => {
    const [left, setLeft] = useState(0);
    const [width, setWidth] = useState(1500);
    const [displayLeft, setDisplayLeft] = useState("");
    const [displayRight, setDisplayRight] = useState("");
    const handleClickRight = () => {
        setLeft(left-20);
    }
    const handleClickLeft = () => {
        setLeft(left+20);
    }
  return (
    <div className="product-category">
        <div className="product-category__btn-wrap product-category__btn-wrap__left-right">
            <button className="product-category__btn-left product-category__btn-left--show" name="button" type="button" onClick={handleClickLeft}><BsChevronLeft/></button></div>
            <div className="product-category__btn-wrap product-category__btn-wrap__left-right" style={{right:0}}>
            <button className="product-category__btn-right product-category__btn-right--show"name="button" type="button" onClick={handleClickRight}><BsChevronRight/></button></div>
      <div className="product-category__list" style={{left: `${left}%`, width: `${width}px`}}>
          <ul className="product-category__item">
              <li><p>hihihahahahahahhaha hih inguey dinh hung hohohohoho hi</p><div className="product-category__icon"><i><BsChevronRight/></i></div></li>
              <li><p>hihi</p><div className="product-category__icon"><i><BsChevronRight/></i></div></li>
              <li><p>hihi</p><div className="product-category__icon"><i><BsChevronRight/></i></div></li>
              <li><p>hihi</p><div className="product-category__icon"><i><BsChevronRight/></i></div></li>
              <li><p>hihi</p><div className="product-category__icon"><i><BsChevronRight/></i></div></li>
              <li><p>hihi</p><div className="product-category__icon"><i><BsChevronRight/></i></div></li>
              <li><p>hihi</p><div className="product-category__icon"><i><BsChevronRight/></i></div></li>
              <li><p>hihi</p><div className="product-category__icon"><i><BsChevronRight/></i></div></li>
              <li><p>hihi</p><div className="product-category__icon"><i><BsChevronRight/></i></div></li>
              <li><p>hihi</p><div className="product-category__icon"><i><BsChevronRight/></i></div></li>
              <li><p>hihi</p><div className="product-category__icon"><i><BsChevronRight/></i></div></li>
          </ul>
          <ul className="product-category__item">
              <li><p>hihi</p><div className="product-category__icon"><i><BsChevronRight/></i></div></li>
              <li><p>hihi</p><div className="product-category__icon"><i><BsChevronRight/></i></div></li>
              <li><p>hihi</p><div className="product-category__icon"><i><BsChevronRight/></i></div></li>
              <li><p>hihi</p><div className="product-category__icon"><i><BsChevronRight/></i></div></li>
              <li><p>hihi</p><div className="product-category__icon"><i><BsChevronRight/></i></div></li>
              <li><p>hihi</p><div className="product-category__icon"><i><BsChevronRight/></i></div></li>
              <li><p>hihi</p><div className="product-category__icon"><i><BsChevronRight/></i></div></li>
              <li><p>hihi</p><div className="product-category__icon"><i><BsChevronRight/></i></div></li>
              <li><p>hihi</p><div className="product-category__icon"><i><BsChevronRight/></i></div></li>
              <li><p>hihi</p><div className="product-category__icon"><i><BsChevronRight/></i></div></li>
              <li><p>hihi</p><div className="product-category__icon"><i><BsChevronRight/></i></div></li>
          </ul>
          <ul className="product-category__item">
              <li><p>hihi</p><div className="product-category__icon"><i><BsChevronRight/></i></div></li>
              <li><p>hihi</p><div className="product-category__icon"><i><BsChevronRight/></i></div></li>
              <li><p>hihi</p><div className="product-category__icon"><i><BsChevronRight/></i></div></li>
              <li><p>hihi</p><div className="product-category__icon"><i><BsChevronRight/></i></div></li>
              <li><p>hihi</p><div className="product-category__icon"><i><BsChevronRight/></i></div></li>
              <li><p>hihi</p><div className="product-category__icon"><i><BsChevronRight/></i></div></li>
              <li><p>hihi</p><div className="product-category__icon"><i><BsChevronRight/></i></div></li>
              <li><p>hihi</p><div className="product-category__icon"><i><BsChevronRight/></i></div></li>
              <li><p>hihi</p><div className="product-category__icon"><i><BsChevronRight/></i></div></li>
              <li><p>hihi</p><div className="product-category__icon"><i><BsChevronRight/></i></div></li>
              <li><p>hihi</p><div className="product-category__icon"><i><BsChevronRight/></i></div></li>
          </ul>
          <ul className="product-category__item">
              <li><p>hihi</p><div className="product-category__icon"><i><BsChevronRight/></i></div></li>
              <li><p>hihi</p><div className="product-category__icon"><i><BsChevronRight/></i></div></li>
              <li><p>hihi</p><div className="product-category__icon"><i><BsChevronRight/></i></div></li>
              <li><p>hihi</p><div className="product-category__icon"><i><BsChevronRight/></i></div></li>
              <li><p>hihi</p><div className="product-category__icon"><i><BsChevronRight/></i></div></li>
              <li><p>hihi</p><div className="product-category__icon"><i><BsChevronRight/></i></div></li>
              <li><p>hihi</p><div className="product-category__icon"><i><BsChevronRight/></i></div></li>
              <li><p>hihi</p><div className="product-category__icon"><i><BsChevronRight/></i></div></li>
              <li><p>hihi</p><div className="product-category__icon"><i><BsChevronRight/></i></div></li>
              <li><p>hihi</p><div className="product-category__icon"><i><BsChevronRight/></i></div></li>
              <li><p>hihi</p><div className="product-category__icon"><i><BsChevronRight/></i></div></li>
          </ul>
      </div>
    </div>
  );
};
