import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { BsEye, BsPencilSquare } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { doGetProductByIDUser, RootState, useAppDispatch } from '../../../redux';
import ReactPaginate from 'react-paginate';
import './ProductManagement.scss';
interface IProducts {
  currentItems?: any;
  itemOffset?: number;
}
const Products: React.FC<IProducts> = ({ currentItems, itemOffset }) => {
  return (
    <>
      {currentItems.length === 0 ? (
        <tr>
          <td></td>
          <td>Không có dữ liệu</td>
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
              <td className="text-center">{itemOffset + i + 1}</td>
              <td>{item.NameProduct}</td>
              <td className="text-center">{item.Price}đ</td>
              <td className="text-center">{item.Quantity}</td>
              <td className="text-center">10</td>
              <td className="text-center">{item.Status === 0 ? 'Ẩn' : 'Hiện'}</td>
              <td className="text-center">
                <button>
                  <BsEye></BsEye>
                </button>
              </td>
              <td className="text-center">
                <Link to={`/seller/edit-product/${item.IDProduct}`}>
                  <button>
                    <BsPencilSquare></BsPencilSquare>
                  </button>
                </Link>
              </td>
            </tr>
          );
        })
      )}
    </>
  );
};
export const ProductManagement = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const [listProduct, setListProduct] = useState([]);
  const [tempListProduct, setTempListProduct] = useState([]);
  const { account } = useSelector((state: RootState) => state.userSlice);
  const [inputs, setInputs] = useState('');
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  const getProduct = async () => {
    const product = (await dispatch(doGetProductByIDUser({ IDUser: account.IDUser }))).payload;
    setListProduct(product.data);
    setTempListProduct(product.data);
  };
  useEffect(() => {
    getProduct();
  }, []);
  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(listProduct.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(listProduct.length / itemsPerPage));
  }, [listProduct.length, itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % listProduct.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };
  useEffect(() => {
    if (inputs === '') {
      setListProduct(tempListProduct);
    } else {
      const list = tempListProduct.filter((tempListProduct) =>
        tempListProduct.NameProduct.includes(inputs),
      );
      setListProduct(list);
      setPageCount(0);
      setItemOffset(0);
    }
  }, [inputs]);
  const handleInputs = (event: any) => {
    const target = event.target;
    setInputs(target.value);
  };
  return (
    <div className="product-management">
      <div className="product-management__content">
        <div className="product-management__title">
          <h1>Quản lý sản phẩm</h1>
          <div className="product-management__title__input">
            Tìm kiếm <input type="text" onChange={handleInputs} id="keyword" name="keyword" />
          </div>
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
              <Products currentItems={currentItems} itemOffset={itemOffset} />
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
            className="product-management__pagination"
          />
        </div>
      </div>
    </div>
  );
};
