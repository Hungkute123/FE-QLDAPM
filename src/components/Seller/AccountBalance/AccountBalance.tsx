import React from 'react';
import { Table } from 'react-bootstrap';
import './AccountBalance.scss';

export const AccountBalance = () => {
  return (
    <div className="account-balance">
      <div className="account-balance__content">
        <div className="account-balance__title">
          <h1>Tổng quan</h1>
        </div>
        <div className="account-balance__content__container">
          <div className="account-balance__content__col-left">
            <div className="account-balance__content__title">Số dư</div>
            <div className="account-balance__content__label">Tổng cộng</div>
            <div className="account-balance__content__numeric-content">
              0 <span className="account-balance__content__currency-symbol">đ</span>
            </div>
          </div>
          <div className="account-balance__content__col-right">
            <div className="account-balance__content__title">Liên kết ngân hàng</div>
            <div className="account-balance__content__label">Tổng cộng</div>
            <div className="account-balance__content__numeric-content">
              0 <span className="account-balance__content__currency-symbol">đ</span>
            </div>
          </div>
        </div>
        <div className="account-balance__title">
          <h1>Lịch sử giao dịch</h1>
        </div>
        <div className="account-balance__table">
          <Table  responsive="sm">
            <thead className="account-balance__table__head">
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
                  My Hero Academia - Học Viện Siêu Anh Hùng - Tập 4: Cậu Bé Sinh Ra Với Tất Cả (Tái
                  Bản)
                </td>
                <td className="text-center">Nguyễn Đình Hùng</td>
                <td className="text-center">???????</td>
                <td className="text-center">99.999đ</td>
              </tr>
              <tr>
                <td className="text-center">1</td>
                <td className="text-center">
                  My Hero Academia - Học Viện Siêu Anh Hùng - Tập 4: Cậu Bé Sinh Ra Với Tất Cả (Tái
                  Bản)
                </td>
                <td className="text-center">Nguyễn Đình Hùng</td>
                <td className="text-center">???????</td>
                <td className="text-center">99.999đ</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};
