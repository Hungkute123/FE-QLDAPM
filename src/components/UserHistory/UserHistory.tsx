import React from 'react';
import './UserHistory.scss';

import { UserMessage } from '..';
import { Table } from 'react-bootstrap';
import { Button } from '../../components/common';

export const UserHistory = () => {
  const className = 'user-history';
  return (
    <div>
      <UserMessage></UserMessage>
      <div className={`${className}`}>
        <div className={`${className}__content`}>
          <div className={`${className}__title`}>TÀI KHOẢN F - POINT</div>
          <div className={`${className}__body`}>
            <div className={`${className}__fpoint`}>
              <div className={`${className}__subtitle`}>Nạp điểm F-point / Freeship</div>
              <div className={`${className}__subcontent`}>
                <div className={`${className}__subcontent--input`}>
                  <input type="text" className={`${className}__subcontent--text`} placeholder="Nhập mã của bạn..." />
                </div>
                <div className={`${className}__subcontent--btn`}>
                    <Button>Nạp điểm</Button>
                </div>
              </div>
            </div>
            <div className={`${className}__balance`}>
              <div className={`${className}__subtitle`}>Số dư tài khoản</div>
              <div className={`${className}__subcontent`}>
                <span className={`${className}__subcontent--price`}>0đ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${className}`} style={{marginTop: "15px"}}>
        <Table responsive="md" className={`${className}__table`}>
          <thead>
            <tr>
              <th>#</th>
              <th>Hành Động</th>
              <th>Thời Gian</th>
              <th>Đơn Hàng</th>
              <th>Số Dư Trước</th>
              <th>Giá Trị Giao Dịch F-Point</th>
              <th>Số Dư Sau</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};
