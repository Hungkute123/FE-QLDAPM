import React from 'react';
import { Button, Tab, Table, Tabs } from 'react-bootstrap';
import { BsEye, BsPlus, BsTrash } from 'react-icons/bs';
import { useHistory } from 'react-router';
import './DiscountManagement.scss';

export const DiscountManagement = () => {
  const history = useHistory();
  const HandleCreatePromotion = () => {
    history.push({
      pathname: `/seller/create-promotion`,
    });
  };
  const HandleCreateDiscountCode = () => {
    history.push({
      pathname: `/seller/create-discount-code`,
    });
  };
  return (
    <div className="discount-management">
      <div className="discount-management__content">
        <div className="discount-management__title">
          <h1>Quản lý khuyến mãi</h1>
          <div className="discount-management__title__btn">
            {/* <Button variant="danger" style={{marginRight: '14px'}} onClick={HandleCreatePromotion}>
              <BsPlus />
              Tạo khuyến mãi
            </Button> */}
            <Button variant="danger" onClick={HandleCreateDiscountCode}>
              <BsPlus />
              Tạo mã giảm giá
            </Button>
          </div>
        </div>
        <Tabs defaultActiveKey="tab-one" id="tab-controller" className="mb-3">
          <Tab eventKey="tab-one" title="Tất cả">
            <div className="discount-management__table">
              <Table responsive="sm">
                <thead className="discount-management__table__head">
                  <tr>
                    <th style={{ width: '5%' }} className="text-center">
                      STT
                    </th>
                    <th style={{ width: '24%' }} className="text-center">
                      Mã voucher | Tên
                    </th>
                    <th style={{ width: '18%' }} className="text-center">
                      Loại mã
                    </th>
                    <th style={{ width: '10%' }} className="text-center">
                      Giảm giá
                    </th>
                    <th style={{ width: '8%' }} className="text-center">
                      Số lượng
                    </th>
                    <th style={{ width: '8%' }} className="text-center">
                      Đã dùng
                    </th>
                    <th style={{ width: '14%' }} className="text-center">
                      Trạng thái | Thời gian lưu mã
                    </th>
                    <th style={{ width: '5%' }} className="text-center">
                      Xóa
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">1</td>
                    <td className="text-center">chi là cái mã đơn giản thôi mà</td>
                    <td className="text-center">áp dụng cho sản phẩm X</td>
                    <td className="text-center">99.999đ</td>
                    <td className="text-center">50</td>
                    <td className="text-center">0</td>
                    <td className="text-center">7 ngày</td>
                    <td className="text-center">
                      <button>
                        <BsTrash></BsTrash>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Tab>
          {/* <Tab eventKey="tab-two" title="Đang diễn ra">
            <div className="discount-management__table">
              <Table responsive="sm">
                <thead className="discount-management__table__head">
                  <tr>
                    <th style={{ width: '5%' }} className="text-center">
                      STT
                    </th>
                    <th style={{ width: '24%' }} className="text-center">
                      Mã voucher | Tên
                    </th>
                    <th style={{ width: '18%' }} className="text-center">
                      Loại mã
                    </th>
                    <th style={{ width: '10%' }} className="text-center">
                      Giảm giá
                    </th>
                    <th style={{ width: '8%' }} className="text-center">
                      Số lượng
                    </th>
                    <th style={{ width: '8%' }} className="text-center">
                      Đã dùng
                    </th>
                    <th style={{ width: '14%' }} className="text-center">
                      Trạng thái | Thời gian lưu mã
                    </th>
                    <th style={{ width: '5%' }} className="text-center">
                      Xóa
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">1</td>
                    <td className="text-center">chi là cái mã đơn giản thôi mà</td>
                    <td className="text-center">áp dụng cho sản phẩm X</td>
                    <td className="text-center">99.999đ</td>
                    <td className="text-center">50</td>
                    <td className="text-center">0</td>
                    <td className="text-center">7 ngày</td>
                    <td className="text-center">
                      <button>
                        <BsTrash></BsTrash>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Tab>
          <Tab eventKey="tab-three" title="Sắp diễn ra">
            <div className="discount-management__table">
              <Table responsive="sm">
                <thead className="discount-management__table__head">
                  <tr>
                    <th style={{ width: '5%' }} className="text-center">
                      STT
                    </th>
                    <th style={{ width: '24%' }} className="text-center">
                      Mã voucher | Tên
                    </th>
                    <th style={{ width: '18%' }} className="text-center">
                      Loại mã
                    </th>
                    <th style={{ width: '10%' }} className="text-center">
                      Giảm giá
                    </th>
                    <th style={{ width: '8%' }} className="text-center">
                      Số lượng
                    </th>
                    <th style={{ width: '8%' }} className="text-center">
                      Đã dùng
                    </th>
                    <th style={{ width: '14%' }} className="text-center">
                      Trạng thái | Thời gian lưu mã
                    </th>
                    <th style={{ width: '5%' }} className="text-center">
                      Xóa
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">1</td>
                    <td className="text-center">chi là cái mã đơn giản thôi mà</td>
                    <td className="text-center">áp dụng cho sản phẩm X</td>
                    <td className="text-center">99.999đ</td>
                    <td className="text-center">50</td>
                    <td className="text-center">0</td>
                    <td className="text-center">7 ngày</td>
                    <td className="text-center">
                      <button>
                        <BsTrash></BsTrash>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Tab>
          <Tab eventKey="tab-four" title="Đã kết thúc">
            <div className="discount-management__table">
              <Table responsive="sm">
                <thead className="discount-management__table__head">
                  <tr>
                    <th style={{ width: '5%' }} className="text-center">
                      STT
                    </th>
                    <th style={{ width: '24%' }} className="text-center">
                      Mã voucher | Tên
                    </th>
                    <th style={{ width: '18%' }} className="text-center">
                      Loại mã
                    </th>
                    <th style={{ width: '10%' }} className="text-center">
                      Giảm giá
                    </th>
                    <th style={{ width: '8%' }} className="text-center">
                      Số lượng
                    </th>
                    <th style={{ width: '8%' }} className="text-center">
                      Đã dùng
                    </th>
                    <th style={{ width: '14%' }} className="text-center">
                      Trạng thái | Thời gian lưu mã
                    </th>
                    <th style={{ width: '5%' }} className="text-center">
                      Xóa
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">1</td>
                    <td className="text-center">chi là cái mã đơn giản thôi mà</td>
                    <td className="text-center">áp dụng cho sản phẩm X</td>
                    <td className="text-center">99.999đ</td>
                    <td className="text-center">50</td>
                    <td className="text-center">0</td>
                    <td className="text-center">7 ngày</td>
                    <td className="text-center">
                      <button>
                        <BsTrash></BsTrash>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Tab> */}
        </Tabs>
      </div>
    </div>
  );
};