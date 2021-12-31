import React from 'react';
import './OrderDetailMain.scss';

export const OrderDetailMain = () => {
  const className = 'order-detail-main';

  return (
    <div className={`${className}`}>
      <div className={`${className}__box`}>
        <div className={`${className}__view-box`}>
          <div className={`${className}__title-box`}>
            <div className={`${className}__title`}>Thông tin người nhận</div>
          </div>
          <div className={`${className}__info-box`}>
            <address>
              Nguyễn Đình Hùng <br />
              Phường Điện Biên, Quận Ba Đình, Hà Nội, Việt Nam <br />
              Tel: 0942799731
            </address>
          </div>
        </div>
        <div className={`${className}__view-box`}>
          <div className={`${className}__title-box`}>
            <div className={`${className}__title`}>Phương thức vận chuyển</div>
          </div>
          <div className={`${className}__info-box`}>
            <address>Giao hàng tiêu chuẩn</address>
          </div>
        </div>
        <div className={`${className}__view-box`}>
          <div className={`${className}__title-box`}>
            <div className={`${className}__title`}>Phương thức thanh toán</div>
          </div>
          <div className={`${className}__info-box`}>
            <address>Thanh toán bằng tiền mặt khi nhận hàng</address>
          </div>
        </div>
      </div>
      <div className={`${className}__status-order`}>
        <div className={`${className}__view-status`}>
          <div className={`${className}__icon-status`}>
            <div className={`${className}__img1-status`}></div>
            <div className={`${className}__content-status`}>
              <p><b>Đơn hàng mới</b></p>
              <p>24/10/2021 - 19:22</p>
            </div>
          </div>
          <div className={`${className}__process-status`}></div>
        </div>
        <div className={`${className}__view-status`}>
          <div className={`${className}__icon-status`}>
            <div className={`${className}__img2-status`}></div>
            <div className={`${className}__content-status`}>
              <p><b>Đang xử lý</b></p>
            </div>
          </div>
          <div className={`${className}__process-status`}></div>
        </div>
        <div className={`${className}__view-status`}>
          <div className={`${className}__icon-status`}>
            <div className={`${className}__img3-status`}></div>
            <div className={`${className}__content-status`}>
              <p>Bị hủy</p>
              <p>24/10/2021 - 19:24</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
