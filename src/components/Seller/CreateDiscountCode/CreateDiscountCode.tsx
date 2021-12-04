import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { ClearButton, Typeahead } from 'react-bootstrap-typeahead';
import { BsSearch } from 'react-icons/bs';
import Swal from 'sweetalert2';
import { doaddNewDiscount, doGetProductByIDUser, useAppDispatch } from '../../../redux';
import { InputFormProduct } from '../AddNewProduct/InputFormProduct/InputFormProduct';
import './CreateDiscountCode.scss';
import moment from 'moment';
export const CreateDiscountCode = () => {
  const dispatch = useAppDispatch();
  const [listProduct, setListProduct] = useState([]);
  const [idProduct, setIDProduct] = useState('');
  const getProduct = async () => {
    const product = (await dispatch(doGetProductByIDUser())).payload;
    setListProduct(product.data);
  };
  useEffect(() => {
    getProduct();
  }, []);
  const handleInputChange = (input: any, e: any) => {
    // console.log('value', input);
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const start = new Date(e.target.elements.start_time.value);
    const startTime = start.getTime();
    const end = new Date(e.target.elements.end_time.value);
    const endTime = end.getTime();
    const local = new Date().getTime();
    if (endTime - startTime <= 0) {
      Swal.fire({
        icon: 'error',
        title: 'Thời gian kết thúc không thể sau thời gian bắt đầu',
      });
      return;
    }
    if (endTime - local <= 0) {
      Swal.fire({
        icon: 'error',
        title: 'Thời gian kết thúc không thể sau thời gian hiện tại',
      });
      return;
    }
    if (idProduct === '') {
      Swal.fire({
        icon: 'error',
        title: 'Vui lòng chọn sản phẩm áp dụng mã',
      });
      return;
    }
    const discount = {
      id_product: idProduct,
      discount_name: e.target.elements.discount_name.value,
      voucher_code: e.target.elements.voucher_code.value,
      start_time: e.target.elements.start_time.value,
      end_time: e.target.elements.end_time.value,
      percent_discount: e.target.elements.percent_discount.value,
      quantity: e.target.elements.quantity.value,
    };
    const isSucccess = (await dispatch(doaddNewDiscount(discount))).payload;
    if (isSucccess.data === true) {
      Swal.fire({
        icon: 'success',
        title: 'Tạo mã giảm giá thành công',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Tạo mã giảm giá thất bại',
      });
    }
  };
  const handleChangeSearch = (selectedOptions: any) => {
    if (selectedOptions.length != 0) {
      setIDProduct(selectedOptions[0].IDProduct);
    } else {
      setIDProduct('');
    }
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <div className="create-discount-code">
          <div className="create-discount-code__content">
            <div className="create-discount-code__title">
              <h1>Tạo mã giảm giá</h1>
            </div>
            <div className="create-discount-code__item">Thông tin cơ bản</div>
            <div className="create-discount-code__margin-15">
              <span className="create-discount-code__mr-40">Chọn sản phẩm</span>
              <span className="create-discount-code__search">
                <Typeahead
                  id="list_product"
                  labelKey="NameProduct"
                  name="list_product"
                  options={listProduct}
                  placeholder="Chọn sản phẩm"
                  onChange={handleChangeSearch}
                  required={true}
                >
                  {({ onClear, selected }) => (
                    <div className="rbt-aux">
                      {!!selected.length && <ClearButton onClick={onClear} />}
                      {!selected.length && <BsSearch></BsSearch>}
                    </div>
                  )}
                </Typeahead>
                {/* <Form.Check
              inline
              label="Cho tất cả sản phẩm"
              name="group1"
              type="radio"
              id="all_product"
              value="all_product"
            />
            <Form.Check
              inline
              label="Cho một sản phẩm"
              name="group1"
              type="radio"
              id="one_product"
              value="one_product"
            /> */}
              </span>
            </div>
            <InputFormProduct
              title="Tên chương trình giảm giá"
              type="text"
              placeholder="Nhập tên sản phẩm (Tối đa 50 ký tự)"
              name="discount_name"
              id="discount_name"
              maxLength={50}
              required={true}
            />
            <InputFormProduct
              title="Mã voucher"
              type="text"
              placeholder="Nhập mã voucher (Tối đa 5 ký tự)"
              name="voucher_code"
              id="voucher_code"
              maxLength={5}
              required={true}
            />
            <div className="create-discount-code__margin-15">
              <div className="create-discount-code__mr-40">Thời gian sử dụng mã </div>
              <InputFormProduct
                title="Thời gian bắt đầu"
                type="datetime-local"
                name="start_time"
                id="start_time"
                required={true}
              />
              <InputFormProduct
                title="Thời gian kết thúc"
                type="datetime-local"
                name="end_time"
                id="end_time"
                required={true}
              />
            </div>
            <div className="create-discount-code__item">Thiết lập mã giảm giá</div>
            <InputFormProduct
              title="Mức giảm giá"
              type="number"
              placeholder="Nhập mức giảm giá theo %"
              name="percent_discount"
              id="percent_discount"
              maxLength={3}
              min="1"
              max="100"
              required={true}
            />
            <InputFormProduct
              title="Lượt sử dụng tối đa"
              type="number"
              placeholder="Nhập tổng số lượt sử dụng mã"
              name="quantity"
              id="quantity"
              maxLength={10}
              required={true}
            />
            <div className="create-discount-code__btn">
              <Button variant="danger" type="submit">
                Tạo mã giảm giá
              </Button>
            </div>
          </div>
        </div>
      </Form>
    </>
  );
};

