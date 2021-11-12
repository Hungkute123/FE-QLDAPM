import React from 'react';
import { Tab, Table, Tabs } from 'react-bootstrap';
import { BsCheckCircle, BsEye, BsPencilSquare, BsXCircle } from 'react-icons/bs';
import './OrderManagement.scss';

export const OrderManagement = () => {
  return (
    <div className="product-management">
      <div className="product-management__content">
        <div className="product-management__title">
          <h1>Quản lý sản phẩm</h1>
        </div>
        <Tabs defaultActiveKey="tab-one" id="tab-controller" className="mb-3">
          <Tab eventKey="tab-one" title="Đơn hàng chưa xử lý">
            <div className="product-management__table">
              <Table responsive="sm">
                <thead className="product-management__table__head">
                  <tr>
                    <th style={{ width: '4%' }} className="text-center">
                      STT
                    </th>
                    <th style={{ width: '35%' }} className="text-center">
                      Tên sản phẩm
                    </th>
                    <th style={{ width: '5%' }} className="text-center">
                      Số lượng
                    </th>
                    <th style={{ width: '8%' }} className="text-center">
                      Giá
                    </th>
                    <th style={{ width: '33%' }} className="text-center">
                      Địa chỉ
                    </th>
                    <th style={{ width: '5%' }} className="text-center">
                      Chi tiết
                    </th>
                    <th style={{ width: '5%' }} className="text-center">
                      Hủy
                    </th>
                    <th style={{ width: '5%' }} className="text-center">
                      Giao
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">1</td>
                    <td className="text-center">
                      My Hero Academia - Học Viện Siêu Anh Hùng - Tập 4: Cậu Bé Sinh Ra Với Tất Cả
                      (Tái Bản)
                    </td>
                    <td className="text-center">1</td>
                    <td className="text-center">99.999đ</td>
                    <td className="text-center">Ba Đình Hà Nội</td>
                    <td className="text-center">
                      <button>
                        <BsEye></BsEye>
                      </button>
                    </td>
                    <td className="text-center">
                      <button>
                        <BsXCircle color={'#DC143C'}></BsXCircle>
                      </button>
                    </td>
                    <td className="text-center">
                      <button>
                        <BsCheckCircle color={'#7FFF00'}></BsCheckCircle>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Tab>
          <Tab eventKey="tab-two" title="Đơn hàng đã hủy">
            <div className="product-management__table">
              <Table responsive="sm">
                <thead className="product-management__table__head">
                  <tr>
                    <th style={{ width: '4%' }} className="text-center">
                      STT
                    </th>
                    <th style={{ width: '35%' }} className="text-center">
                      Tên sản phẩm
                    </th>
                    <th style={{ width: '5%' }} className="text-center">
                      Số lượng
                    </th>
                    <th style={{ width: '8%' }} className="text-center">
                      Giá
                    </th>
                    <th style={{ width: '38%' }} className="text-center">
                      Địa chỉ
                    </th>
                    <th style={{ width: '5%' }} className="text-center">
                      Chi tiết
                    </th>
                    <th style={{ width: '5%' }} className="text-center">
                     Tình trạng
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">1</td>
                    <td className="text-center">
                      My Hero Academia - Học Viện Siêu Anh Hùng - Tập 4: Cậu Bé Sinh Ra Với Tất Cả
                      (Tái Bản)
                    </td>
                    <td className="text-center">1</td>
                    <td className="text-center">99.999đ</td>
                    <td className="text-center">Ba Đình Hà Nội</td>
                    <td className="text-center">
                      <button>
                        <BsEye></BsEye>
                      </button>
                    </td>
                    <td className="text-center">Đã hủy</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Tab>
          <Tab eventKey="tab-three" title="Đơn hàng đang giao">
            <div className="product-management__table">
              <Table responsive="sm">
                <thead className="product-management__table__head">
                  <tr>
                    <th style={{ width: '4%' }} className="text-center">
                      STT
                    </th>
                    <th style={{ width: '35%' }} className="text-center">
                      Tên sản phẩm
                    </th>
                    <th style={{ width: '5%' }} className="text-center">
                      Số lượng
                    </th>
                    <th style={{ width: '8%' }} className="text-center">
                      Giá
                    </th>
                    <th style={{ width: '38%' }} className="text-center">
                      Địa chỉ
                    </th>
                    <th style={{ width: '5%' }} className="text-center">
                      Chi tiết
                    </th>
                    <th style={{ width: '5%' }} className="text-center">
                      Tình trạng
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">1</td>
                    <td className="text-center">
                      My Hero Academia - Học Viện Siêu Anh Hùng - Tập 4: Cậu Bé Sinh Ra Với Tất Cả
                      (Tái Bản)
                    </td>
                    <td className="text-center">1</td>
                    <td className="text-center">99.999đ</td>
                    <td className="text-center">Ba Đình Hà Nội</td>
                    <td className="text-center">
                      <button>
                        <BsEye></BsEye>
                      </button>
                    </td>
                    <td className="text-center">
                      <button>
                        <BsCheckCircle color={'#7FFF00'}></BsCheckCircle>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Tab>
          <Tab eventKey="tab-four" title="Đơn hàng đã giao">
            <div className="product-management__table">
              <Table responsive="sm">
                <thead className="product-management__table__head">
                  <tr>
                    <th style={{ width: '4%' }} className="text-center">
                      STT
                    </th>
                    <th style={{ width: '35%' }} className="text-center">
                      Tên sản phẩm
                    </th>
                    <th style={{ width: '5%' }} className="text-center">
                      Số lượng
                    </th>
                    <th style={{ width: '8%' }} className="text-center">
                      Giá
                    </th>
                    <th style={{ width: '38%' }} className="text-center">
                      Địa chỉ
                    </th>
                    <th style={{ width: '5%' }} className="text-center">
                      Chi tiết
                    </th>
                    <th style={{ width: '5%' }} className="text-center">
                      Tình trạng
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">1</td>
                    <td className="text-center">
                      My Hero Academia - Học Viện Siêu Anh Hùng - Tập 4: Cậu Bé Sinh Ra Với Tất Cả
                      (Tái Bản)
                    </td>
                    <td className="text-center">1</td>
                    <td className="text-center">99.999đ</td>
                    <td className="text-center">Ba Đình Hà Nội</td>
                    <td className="text-center">
                      <button>
                        <BsEye></BsEye>
                      </button>
                    </td>
                    <td className="text-center">
                      Hoàn thành
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};
