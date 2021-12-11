import React from 'react';
import { Col, Container, Row, Tab, Table, Tabs } from 'react-bootstrap';
import { BsDownload } from 'react-icons/bs';
import './Revenue.scss';

export const Revenue = () => {
  return (
    <div>
      <Container className="revenue__container">
        <Row>
          <Col sm={9}>
            <div className="revenue">
              <div className="revenue__content">
                <div className="revenue__title">
                  <h1>Tổng quan</h1>
                </div>
                <div className="revenue__content__container">
                  <div className="revenue__content__col-left">
                    <div className="revenue__content__title">Sẽ thanh toán</div>
                    <div className="revenue__content__label">Tổng cộng</div>
                    <div className="revenue__content__numeric-content">
                      0 <span className="revenue__content__currency-symbol">đ</span>
                    </div>
                  </div>
                  <div className="revenue__content__col-right">
                    <div className="revenue__content__title">Đã thanh toán</div>
                    <div className="revenue__content__label">Tổng cộng</div>
                    <div className="revenue__content__numeric-content">
                      0 <span className="revenue__content__currency-symbol">đ</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="revenue">
              <div className="revenue__content">
                <div className="revenue__title">
                  <h1>Chi tiết</h1>
                </div>
                <Tabs defaultActiveKey="tab-one" id="tab-controller" className="mb-3">
                  <Tab eventKey="tab-one" title="Đơn hàng chưa xử lý">
                    <div className="product-management__table">
                      <Table striped bordered hover responsive="sm">
                        <thead className="product-management__table__head">
                          <tr>
                            <th style={{ width: '4%' }} className="text-center">
                              STT
                            </th>
                            <th style={{ width: '60%' }} className="text-center">
                              Đơn hàng
                            </th>
                            <th style={{ width: '18%' }} className="text-center">
                              Người mua
                            </th>
                            <th style={{ width: '8%' }} className="text-center">
                              Trạng thái
                            </th>
                            <th style={{ width: '10%' }} className="text-center">
                              Số tiền
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-center">1</td>
                            <td className="text-center">
                              My Hero Academia - Học Viện Siêu Anh Hùng - Tập 4: Cậu Bé Sinh Ra Với
                              Tất Cả (Tái Bản)
                            </td>
                            <td className="text-center">Nguyễn Đình Hùng</td>
                            <td className="text-center">???????</td>
                            <td className="text-center">99.999đ</td>
                          </tr>
                          <tr>
                            <td className="text-center">1</td>
                            <td className="text-center">
                              My Hero Academia - Học Viện Siêu Anh Hùng - Tập 4: Cậu Bé Sinh Ra Với
                              Tất Cả (Tái Bản)
                            </td>
                            <td className="text-center">Nguyễn Đình Hùng</td>
                            <td className="text-center">???????</td>
                            <td className="text-center">99.999đ</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Tab>
                  <Tab eventKey="tab-two" title="Đơn hàng đã hủy">
                    <div className="product-management__table">
                      <Table striped bordered hover responsive="sm">
                        <thead className="product-management__table__head">
                          <tr>
                            <th style={{ width: '4%' }} className="text-center">
                              STT
                            </th>
                            <th style={{ width: '60%' }} className="text-center">
                              Đơn hàng
                            </th>
                            <th style={{ width: '18%' }} className="text-center">
                              Người mua
                            </th>
                            <th style={{ width: '8%' }} className="text-center">
                              Trạng thái
                            </th>
                            <th style={{ width: '10%' }} className="text-center">
                              Số tiền
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-center">1</td>
                            <td className="text-center">
                              My Hero Academia - Học Viện Siêu Anh Hùng - Tập 4: Cậu Bé Sinh Ra Với
                              Tất Cả (Tái Bản)
                            </td>
                            <td className="text-center">Nguyễn Đình Hùng</td>
                            <td className="text-center">???????</td>
                            <td className="text-center">99.999đ</td>
                          </tr>
                          <tr>
                            <td className="text-center">1</td>
                            <td className="text-center">
                              My Hero Academia - Học Viện Siêu Anh Hùng - Tập 4: Cậu Bé Sinh Ra Với
                              Tất Cả (Tái Bản)
                            </td>
                            <td className="text-center">Nguyễn Đình Hùng</td>
                            <td className="text-center">???????</td>
                            <td className="text-center">99.999đ</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </Col>
          <Col sm={3}>
            <div className="revenue">
              <div className="revenue__content">
                <div className="revenue__title">
                  <h1>Báo cáo thu nhập</h1>
                </div>
                <div className="revenue__content__dowload-list">
                  <ul>
                    <li>
                      <div className="revenue__content__dowload-list__body">
                        1 Th11 - 30 Th11 2021
                      </div>
                      <span>
                        <button>
                          <BsDownload color={'#2673dd'} />
                        </button>
                      </span>
                    </li>
                    <li><div className="revenue__content__dowload-list__body">
                        1 Th11 - 30 Th11 2021
                      </div>
                      <span>
                        <button>
                          <BsDownload color={'#2673dd'} />
                        </button>
                      </span></li>
                    <li><div className="revenue__content__dowload-list__body">
                        1 Th11 - 30 Th11 2021
                      </div>
                      <span>
                        <button>
                          <BsDownload color={'#2673dd'} />
                        </button>
                      </span></li>
                    <li><div className="revenue__content__dowload-list__body">
                        1 Th11 - 30 Th11 2021
                      </div>
                      <span>
                        <button>
                          <BsDownload color={'#2673dd'} />
                        </button>
                      </span></li>
                    <li><div className="revenue__content__dowload-list__body">
                        1 Th11 - 30 Th11 2021
                      </div>
                      <span>
                        <button>
                          <BsDownload color={'#2673dd'} />
                        </button>
                      </span></li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={9}>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
};
