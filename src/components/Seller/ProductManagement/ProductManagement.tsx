import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { BsEye, BsPencilSquare } from 'react-icons/bs';
import { doGetProductByIDUser, useAppDispatch } from '../../../redux';
import './ProductManagement.scss';

export const ProductManagement = () => {
  const dispatch = useAppDispatch();
  const [listProduct, setListProduct] = useState([]);

  const getProduct = async () => {
    const product = (await dispatch(doGetProductByIDUser())).payload;
    setListProduct(product.data);
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className="product-management">
      <div className="product-management__content">
        <div className="product-management__title">
          <h1>Quản lý sản phẩm</h1>
        </div>
        <div className="product-management__table">
          <Table striped bordered hover responsive="sm">
            <thead className="product-management__table__head">
              <tr>
                <th style={{ width: '4%' }} className="text-center">
                  STT
                </th>
                <th style={{ width: '49%' }} className="text-center">
                  Tên sản phẩm
                </th>
                <th style={{ width: '12%' }} className="text-center">
                  Giá
                </th>
                <th style={{ width: '8%' }} className="text-center">
                  Kho hàng
                </th>
                <th style={{ width: '7%' }} className="text-center">
                  Đã bán
                </th>
                <th style={{ width: '10%' }} className="text-center">
                  Tình trạng
                </th>
                <th style={{ width: '5%' }} className="text-center">
                  Xem
                </th>
                <th style={{ width: '5%' }} className="text-center">
                  Sửa
                </th>
              </tr>
            </thead>
            <tbody>
              {listProduct.length === 0 ? (
                <tr>
                  <td></td>
                  <td>Bạn chưa thêm sản phẩm nào</td>
                </tr>
              ) : (
                listProduct.map((item: any, i: number) => {
                  return (
                    <tr>
                      <td className="text-center">{i + 1}</td>
                      <td>{item.NameProduct}</td>
                      <td className="text-center">{item.Price}đ</td>
                      <td className="text-center">{item.Quantity}</td>
                      <td className="text-center">10</td>
                      <td className="text-center">{item.status === 0 ? 'Ẩn' : 'Hiện'}</td>
                      <td className="text-center">
                        <button>
                          <BsEye></BsEye>
                        </button>
                      </td>
                      <td className="text-center">
                        <button>
                          <BsPencilSquare></BsPencilSquare>
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};
