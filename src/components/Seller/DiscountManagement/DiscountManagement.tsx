import React, { useEffect, useState } from 'react';
import { Button, Tab, Table, Tabs } from 'react-bootstrap';
import { BsEye, BsPencilSquare, BsPlus, BsTrash } from 'react-icons/bs';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { runtime } from 'webpack';
import { doGetDiscountByIDUser, RootState, useAppDispatch } from '../../../redux';
import './DiscountManagement.scss';
interface IDiscounts {
  currentItems?: any;
  itemOffset?: number;
}
const Discounts: React.FC<IDiscounts> = ({ currentItems, itemOffset }) => {
  const handleStatus = (start_time: string, end_time: string) => {
    const start = new Date(start_time);
    const startTime = start.getTime();
    const end = new Date(end_time);
    const endTime = end.getTime();
    const localTime = new Date().getTime();
    if (localTime - endTime >= 0) {
      return 'Kết thúc';
    } else if (localTime - endTime < 0 && localTime - startTime >= 0) {
      return 'Đang diễn ra';
    } else {
      return 'Sắp diễn ra';
    }
  };
  const handleEdit= (start_time: string, end_time: string, id: number) => {
    const start = new Date(start_time);
    const startTime = start.getTime();
    const end = new Date(end_time);
    const endTime = end.getTime();
    const localTime = new Date().getTime();
    if (localTime - endTime >= 0) {
      return <button onClick={handleClick}>
      <BsPencilSquare></BsPencilSquare>
    </button>
    } else {
     return <Link to={`/seller/edit-discount-code/${id}`}>
     <button>
       <BsPencilSquare></BsPencilSquare>
     </button>
   </Link>
    }
  };
  const handleClick = () =>{
    Swal.fire({
      icon: 'warning',
      title: 'Voucher đã kết thúc. Chức năng chỉnh sửa đã bị khóa',
    });
    return;
  }
  return (
    <>
      {currentItems.length === 0 ? (
        <tr key={0}>
          <td></td>
          <td>Bạn chưa tạo mã giảm giá nào</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      ) : (
        currentItems.map((item: any, i: number) => {
          return (
            <tr key={i}>
              <td className="text-center">{i + 1 + itemOffset}</td>
              <td className="text-center">{item.NameProduct}</td>
              <td className="text-center">{item.VoucherCode}</td>
              <td className="text-center">{item.PercentDiscount}%</td>
              <td className="text-center">{item.Quantity}</td>
              <td className="text-center">{item.Used}</td>
              <td className="text-center">{handleStatus(item.StartTime, item.EndTime)}</td>
              <td className="text-center">
              {handleEdit(item.StartTime, item.EndTime, item.IDDiscount)}
              </td>
            </tr>
          );
        })
      )}
    </>
  );
};
export const DiscountManagement = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const [listDiscount, setListDiscount] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const { account } = useSelector((state: RootState) => state.userSlice);
  const getDiscount = async () => {
    const discount = (await dispatch(doGetDiscountByIDUser({ IDUser: account.IDUser }))).payload;
    setListDiscount(discount.data);
  };
  useEffect(() => {
    getDiscount();
  }, []);
  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(listDiscount.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(listDiscount.length / itemsPerPage));
  }, [listDiscount.length, itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % listDiscount.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };
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
              <Table striped bordered hover responsive="sm">
                <thead className="discount-management__table__head">
                  <tr>
                    <th style={{ width: '5%' }} className="text-center">
                      STT
                    </th>
                    <th style={{ width: '24%' }} className="text-center">
                      Sản phẩm áp dụng
                    </th>
                    <th style={{ width: '18%' }} className="text-center">
                      Mã voucher
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
                      Trạng thái
                    </th>
                    <th style={{ width: '5%' }} className="text-center">
                      Sửa
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <Discounts currentItems={currentItems} itemOffset={itemOffset} />
                </tbody>
              </Table>
              <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                className="discount-management__pagination"
              />
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
