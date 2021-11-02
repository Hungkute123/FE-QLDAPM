import React from 'react';
import './Footer.scss';

import { Row, Col } from 'react-bootstrap';
import { GrLocation } from 'react-icons/gr';
import { AiFillPhone } from 'react-icons/ai';

import LinkFollow from '../../LinkFollow/LinkFollow';

export const Footer = () => {
  return (
    <div className="footer">
      <LinkFollow></LinkFollow>
      <div className="footer__body">
        <Row>
          <div className="footer__content">
            <div className="footer__left">
              <img src="/logo.png" alt="Logo Fahasa" className="footer__left--logo" />
              <p>
                Lầu 5, 387-389 Hai Bà Trưng Quận 3 TP HCMCông Ty Cổ Phần Phát Hành Sách TP HCM -
                FAHASA60 - 62 Lê Lợi, Quận 1, TP. HCM, Việt Nam
              </p>
              <p>
                Fahasa.com nhận đặt hàng trực tuyến và giao hàng tận nơi. KHÔNG hỗ trợ đặt mua và
                nhận hàng trực tiếp tại văn phòng cũng như tất cả Hệ Thống Fahasa trên toàn quốc.
              </p>
              <img src="/bocongthuong.png" alt="Chứng nhận" className="footer__left--bct" />
              <div className="footer__left--social">
                <img src="/social/fb.png" alt="" />
                <img src="/social/in.png" alt="" />
                <img src="/social/youtube.png" alt="" />
                <img src="/social/tumblr.png" alt="" />
                <img src="/social/twitter.png" alt="" />
                <img src="/social/pinterest.png" alt="" />
              </div>
              <div className="footer__left--stores">
                <img src="/social/android.png" alt="" />
                <img src="/social/appstore.png" alt="" />
              </div>
            </div>
            <div className="footer__right">
              <Row>
                <Col md={4}>
                  <div className="footer__right--title">
                    <h3>Dịch Vụ</h3>
                  </div>
                  <div className="footer__right--content">
                    <ul>
                      <li>
                        <a href="">Điều khoản sử dụng</a>
                      </li>
                      <li>
                        <a href="">Chính sách bảo mật</a>
                      </li>
                      <li>
                        <a href="">Giới thiệu Fahasa</a>
                      </li>
                      <li>
                        <a href="">Hệ thống trung tâm - nhà sách</a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="footer__right--title">
                    <h3>HỖ TRỢ</h3>
                  </div>
                  <div className="footer__right--content">
                    <ul>
                      <li>
                        <a href="">Chính sách đổi - trả - hoàn tiền</a>
                      </li>
                      <li>
                        <a href="">Chính sách khách sỉ</a>
                      </li>
                      <li>
                        <a href="">Phương thức vận chuyển</a>
                      </li>
                      <li>
                        <a href="">Phương thức thanh toán và xuất HĐ</a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="footer__right--title">
                    <h3>TÀI KHOẢN CỦA TÔI</h3>
                  </div>
                  <div className="footer__right--content">
                    <ul>
                      <li>
                        <a href="">Thay đổi địa chỉ khách hàng</a>
                      </li>
                      <li>
                        <a href="">Chi tiết tài khoản</a>
                      </li>
                      <li>
                        <a href="">Lịch sử mua hàng</a>
                      </li>
                      <li>
                        <a href="">Sách theo bộ</a>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
              <div className="footer__right--title mt-15">
                <h3>LIÊN HỆ</h3>
              </div>
              <Row>
                <Col md={4}>
                  <div className="footer__right--content">
                    <ul>
                      <li>
                        <a href="">
                          <GrLocation size={18} />
                          60-62 Lê Lợi, Q.1, TP. HCM
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="footer__right--content">
                    <ul>
                      <li>
                        <a href="">
                          <AiFillPhone size={18} />
                          1900636467
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
              <div className="footer__right--gird">
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
                <div className="footer__right--gird_item">
                  <img src="/social/vnpay_logo.png" alt="" />
                </div>
                <div className="footer__right--gird_item">
                  <img src="/social/ZaloPay-logo-130x83.png" alt="" />
                </div>
                <div className="footer__right--gird_item">
                  <img src="/social/momopay.png" alt="" />
                </div>
                <div className="footer__right--gird_item">
                  <img src="/social/shopeepay_logo.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </Row>
        <div className="footer__end">
          Giấy chứng nhận Đăng ký Kinh doanh số **0304132047** do Sở Kế hoạch và Đầu tư Thành phố Hồ
          Chí Minh cấp ngày 28/11/2012.
        </div>
      </div>
    </div>
  );
};
