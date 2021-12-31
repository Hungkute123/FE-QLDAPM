import React from 'react';
import { Button, Modal, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { transformPriceFormat } from '../../../../helpers';
import './OrderDetailModal.scss';
interface IOrderDetailModal {
  show: boolean;
  handleClose: any;
  item?: any;
  path?: string;
}
export const OrderDetailModal: React.FC<IOrderDetailModal> = ({ show, handleClose, item, path }) => {
  const handleHide = () => {
    handleClose(false);
  };
  const className = 'order-detail-modal';
  console.log(item);
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Chi tiết đơn hàng</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={`${className}`}>
          <div className={`${className}__items`}>
            <div className={`${className}__info-status`}>
              <Container>
                <Row>
                  <Col sm={4}>
                    <div className={`${className}__info`}>
                      <div className={`${className}__title-order`}>
                        <span>Đơn hàng: </span>
                        <span>{item.IDOrder}</span>
                      </div>
                      <div className={`${className}__process`}>Mã đơn hàng {item.StatusOrder}</div>
                      <div className={`${className}__title-order`}>
                        <span>Tổng tiền: </span>
                        <span>{transformPriceFormat(item.OrderPrice)}đ</span>
                      </div>
                      <div className={`${className}__title-order`}>
                        <span>Số lượng: </span>
                        <span>{item.QuantityOrder}</span>
                      </div>
                    </div>
                  </Col>
                  <Col sm={8}>
                    <div className={`${className}__info`}>
                      <div className={`${className}__title-order`}>
                        <span>Người đặt: </span>
                        <span>
                          {item.FirstName} {item.LastName}
                        </span>
                      </div>
                      <div className={`${className}__title-order`}>
                        <span>Địa chỉ: </span>
                        <span>
                          {item.Address}, {item.Ward}, {item.District}, {item.City}
                        </span>
                      </div>
                      <div className={`${className}__title-order`}>
                        <span>Số điện thoại: </span>
                        <span>{item.Phone}</span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
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
                    <img src={`${path}${item.Image}`} />
                  </div>
                  <div className={`${className}__cell ${className}__product-name`}>
                    <Link to={`/product-detail/${item.IDProduct}`}>{item.NameProduct}</Link>
                  </div>
                  <div className={`${className}__cell`}>{item.IDProduct}</div>
                  <div className={`${className}__cell`}>
                    <span>{transformPriceFormat(item.Price)}đ</span>
                    {/* <span className={`${className}__price-old`}>135.000đ</span> */}
                  </div>
                  <div className={`${className}__cell`}>{item.QuantityOrder}</div>
                  <div className={`${className}__cell`}>{transformPriceFormat(item.Price*item.QuantityOrder)}đ</div>
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
                  <span className={`${className}__price`}>{transformPriceFormat(item.Price*item.QuantityOrder)}đ</span>
                </p>
                <p className={`${className}__total-price`}>
              <span className={`${className}__price`}>30.000đ</span>
            </p>
            <p className={`${className}__total-price`}>
              <span className={`${className}__price`}>{transformPriceFormat(item.OrderPrice)}đ</span>
            </p>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleHide}>Đóng</Button>
      </Modal.Footer>
    </Modal>
  );
};
