import React from 'react';
import { Table } from 'react-bootstrap';
import { BsEye, BsPencilSquare } from 'react-icons/bs';
import './ProductManagement.scss';

export const ProductManagement = () => {
  return (
    <div className="product-management">
      <div className="product-management__content">
        <div className="product-management__title">
          <h1>Quản lý sản phẩm</h1>
        </div>
        <div className="product-management__table">
          <Table responsive="sm">
            <thead className="product-management__table__head">
              <tr>
                <th style={{width:'4%'}} className="text-center">STT</th>
                <th style={{width:'49%'}} className="text-center">Tên sản phẩm</th>
                <th style={{width:'12%'}} className="text-center">Giá</th>
                <th style={{width:'8%'}} className="text-center">Kho hàng</th>
                <th style={{width:'7%'}} className="text-center">Đã bán</th>
                <th style={{width:'10%'}} className="text-center">Tình trạng</th>
                <th style={{width:'5%'}} className="text-center">Xem</th>
                <th style={{width:'5%'}} className="text-center">Sửa</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center">1</td>
                <td className="text-center">My Hero Academia - Học Viện Siêu Anh Hùng - Tập 4: Cậu Bé Sinh Ra Với Tất Cả (Tái Bản)</td>
                <td className="text-center">10.000.000đ</td>
                <td className="text-center">999999</td>
                <td className="text-center">10</td>
                <td className="text-center">Hiển thị</td>
                <td className="text-center"><button><BsEye></BsEye></button></td>
                <td className="text-center"><button><BsPencilSquare></BsPencilSquare></button></td>
              </tr>
              <tr>
                <td className="text-center">2</td>
                <td className="text-center" >My Hero Academia - Học Viện Siêu Anh Hùng - Tập 4: Cậu Bé Sinh Ra Với Tất Cả (Tái Bản)</td>
                <td className="text-center">10.000.000đ</td>
                <td className="text-center">999999</td>
                <td className="text-center">10</td>
                <td className="text-center">Ẩn</td>
                <td className="text-center"><button><BsEye></BsEye></button></td>
                <td className="text-center"><button><BsPencilSquare></BsPencilSquare></button></td>
              </tr>
              
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};
