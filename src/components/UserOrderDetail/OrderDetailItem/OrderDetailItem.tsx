import React from 'react';
import { Link } from 'react-router-dom';
import './OrderDetailItem.scss';

export const OrderDetailItem = () => {
  const className = 'order-detail-item';

  return (
    <div className={`${className}`}>
      <div className={`${className}__items`}>
        <div className={`${className}__info-status`}>
          <div className={`${className}__info`}>
            <div className={`${className}__title-order`}>
              <span>Đơn hàng: </span>
              <span>102274255</span>
            </div>
            <div className={`${className}__process`}>Đơn hàng Bị hủy</div>
            <div className={`${className}__title-order`}>
              <span>Tổng tiền: </span>
              <span>682.700đ</span>
            </div>
            <div className={`${className}__title-order`}>
              <span>Số lượng: </span>
              <span>7</span>
            </div>
          </div>
        </div>
      </div>
      <div className={`${className}__products`}>
        <div className={`${className}__table`}>
          <div className={`${className}__table-header`}>
            <div className={`${className}__cell`}>Hình ảnh</div>
            <div className={`${className}__cell`}>Tên sản phẩm</div>
            <div className={`${className}__cell`}>Sku</div>
            <div className={`${className}__cell`}>Giá bán</div>
            <div className={`${className}__cell`}>SL</div>
            <div className={`${className}__cell`}>Thành tiền</div>
          </div>
          <div className={`${className}__table-body`}>
            <div className={`${className}__table-row`}>
              <div className={`${className}__table-img ${className}__cell`}>
                <img src="https://cdn0.fahasa.com/media/catalog/product/cache/1/image/265x/9df78eab33525d08d6e5fb8d27136e95/t/_/t_i-l_i-kh_ng-ch_ng-c_.jpg" />
              </div>
              <div className={`${className}__cell ${className}__product-name`}>
                <Link to="/">Tội Lỗi Không Chứng Cứ (Tái Bản) </Link>
              </div>
              <div className={`${className}__cell`}>9786043231649</div>
              <div className={`${className}__cell`}>
                <span>110.700đ</span>
                <span className={`${className}__price-old`}>135.000đ</span>
              </div>
              <div className={`${className}__cell`}>1</div>
              <div className={`${className}__cell`}>110.700đ</div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${className}__total`}>
        <div className={`${className}__total-content`}>
          <div className={`${className}__total-right`}>
            <p className={`${className}__total-price`}>
              <span className={`${className}__price`}>Thành tiền:</span>
            </p>
            <p className={`${className}__total-price`}>
              <span className={`${className}__price`}>Phí vận chuyển: </span>
            </p>
            <p className={`${className}__total-price`}>
              <span className={`${className}__price`}>Tổng Số Tiền (gồm VAT): </span>
            </p>
          </div>
          <div className={`${className}__total-left`}>
            <p className={`${className}__total-price`}>
              <span className={`${className}__price`}>109.000đ</span>
            </p>
            <p className={`${className}__total-price`}>
              <span className={`${className}__price`}>15.000đ</span>
            </p>
            <p className={`${className}__total-price`}>
              <span className={`${className}__price`}>124.000đ</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
