import React, { useEffect } from 'react';
import './Wishlist.scss';
import { Button } from 'react-bootstrap';
import { useAppDispatch, useAppSelector, doGetFavoriteList } from '../../../redux';

export const Wishlist = () => {
  const dispatch = useAppDispatch();
  const { favoriteList, pathSrc } = useAppSelector((state) => state.productSlice);

  useEffect(() => {
    dispatch(doGetFavoriteList());
  }, []);

  return (
    <div className="wishlist">
      <p className="wishlist__title">YÊU THÍCH</p>

      <div className="wishlist__container">
        {favoriteList && favoriteList.length ? (
          <>
            <div className="wishlist__list">
              {favoriteList.map((item, i) => {
                return (
                  <div className="wishlist__item">
                    <img src={`${pathSrc}${item.Image}`} alt="" className="wishlist__image" />
                    <p className="wishlist__name">{item.NameProduct}</p>
                    <div className="wishlist__right">
                      <p>{item.Price}</p>
                      <Button variant="danger">THÊM VÀO GIỎ HÀNG</Button>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="wishlist__button">
              <Button variant="danger">THÊM TẤT CẢ VÀO GIỎ HÀNG</Button>
            </div>
          </>
        ) : (
          <p>Bạn chưa có sản phẩm nào.</p>
        )}
      </div>
    </div>
  );
};
