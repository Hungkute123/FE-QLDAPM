import React from 'react';
import './UserReview.scss';

import { Col, FloatingLabel, Form, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const UserReview = () => {
  const listReview = [
    {
      day: '02/12/2021',
      name: 'Husky Và Sư Tôn Mèo Trắng Của Hắn - Tập 2 - Tặn...',
      star: 5,
      content: 'Sách rất thú vị. Rất đáng xem.Kể về Đạp Tiên Qu...',
      url: '/',
    },
  ];
  const className = 'user-review';

  return (
    <div className={`${className}`}>
      <div className={`${className}__content`}>
        <div className={`${className}__title`}>
          <h1>Nhận Xét Của Tôi</h1>
        </div>
        <div className={`${className}__order-pager`}>
          <p className={`${className}__amount`}>
            <strong>1 Đơn hàng</strong>
          </p>
          <div className={`${className}__filter`}>
            <Form>
              <Col xs={12}>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Select defaultValue="Số nhận xét">
                    <option>10</option>
                    <option>20</option>
                    <option>30</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Form>
          </div>
        </div>
        <div className={`${className}__table`}>
          <Table responsive="sm" bordered striped>
            <thead>
              <tr>
                <th>Ngày</th>
                <th>Sản phẩm</th>
                <th>Số sao</th>
                <th>Nội dung</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {listReview.map((item, index) => {
                return (
                  <tr>
                    <td>{item.day}</td>
                    <td>{item.name}</td>
                    <td>{item.star}</td>
                    <td>{item.content}</td>
                    <td>
                      <Link to={item.url}>View Details</Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        <div className={`${className}__back`}>
          <p className={`${className}__back-link`}>
            <Link to="/">« Quay lại</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
