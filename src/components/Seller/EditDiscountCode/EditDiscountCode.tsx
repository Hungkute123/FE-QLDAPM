import React, { useState, useEffect, useReducer } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { ClearButton, Typeahead } from 'react-bootstrap-typeahead';
import { BsSearch } from 'react-icons/bs';
import Swal from 'sweetalert2';
import {
  doaddNewDiscount,
  doGetDiscountByIDDiscount,
  doGetProductByIDUser,
  doPatchDiscount,
  RootState,
  useAppDispatch,
} from '../../../redux';
import { InputFormProduct } from '../AddNewProduct/InputFormProduct/InputFormProduct';
import './EditDiscountCode.scss';
import moment from 'moment';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
const dataFormDiscountCodeReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ID_DISCOUNT':
      return {
        ...state,
        id_discount: action.payload,
      };
    case 'INPUT_PRODUCT':
      return {
        ...state,
        product: action.payload,
      };
    case 'INPUT_DISCOUNT_NAME':
      return {
        ...state,
        discount_name: action.payload,
      };
    case 'INPUT_VOUCHER_CODE':
      return {
        ...state,
        voucher_code: action.payload,
      };
    case 'INPUT_START_TIME':
      return {
        ...state,
        start_time: action.payload,
      };
    case 'INPUT_END_TIME':
      return {
        ...state,
        end_time: action.payload,
      };
    case 'INPUT_PERCENT_DISCOUNT':
      return {
        ...state,
        percent_discount: action.payload,
      };
    case 'INPUT_QUANTITY':
      return {
        ...state,
        quantity: action.payload,
      };
    default:
      throw new Error();
  }
};

export const EditDiscountCode = () => {
  const { id }: { id: string } = useParams();
  const dispatch = useAppDispatch();
  const history = useHistory();
  const [state, dispatchDataForm] = useReducer(dataFormDiscountCodeReducer, {
    product: [],
    discount_name: '',
    voucher_code: '',
    start_time: '',
    end_time: '',
    percent_discount: '',
    quantity: '',
  });
  const [listProduct, setListProduct] = useState([]);
  const [idProduct, setIDProduct] = useState('');
  const { account } = useSelector((state: RootState) => state.userSlice);
  const getProduct = async () => {
    const product = (await dispatch(doGetProductByIDUser({ IDUser: account.IDUser }))).payload;
    setListProduct(product.data);
  };
  const getDiscountByIDDiscount = async () => {
    const discount = (await dispatch(doGetDiscountByIDDiscount({ IDDiscount: id }))).payload;
    dispatchDataForm({ type: 'ID_DISCOUNT', payload: discount.data[0].IDDiscount });
    dispatchDataForm({ type: 'INPUT_PRODUCT', payload: discount.data });
    dispatchDataForm({ type: 'INPUT_DISCOUNT_NAME', payload: discount.data[0].DiscountName });
    dispatchDataForm({ type: 'INPUT_VOUCHER_CODE', payload: discount.data[0].VoucherCode });
    dispatchDataForm({ type: 'INPUT_START_TIME', payload: discount.data[0].StartTime });
    dispatchDataForm({ type: 'INPUT_END_TIME', payload: discount.data[0].EndTime });
    dispatchDataForm({ type: 'INPUT_PERCENT_DISCOUNT', payload: discount.data[0].PercentDiscount });
    dispatchDataForm({ type: 'INPUT_QUANTITY', payload: discount.data[0].Quantity });
  };

  useEffect(() => {
    getProduct();
    getDiscountByIDDiscount();
  }, []);

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
        title: 'Th???i gian k???t th??c kh??ng th??? sau th???i gian b???t ?????u',
      });
      return;
    }
    if (endTime - local <= 0) {
      Swal.fire({
        icon: 'error',
        title: 'Th???i gian k???t th??c kh??ng th??? sau th???i gian hi???n t???i',
      });
      return;
    }
    if (state.product === '') {
      Swal.fire({
        icon: 'error',
        title: 'Vui l??ng ch???n s???n ph???m ??p d???ng m??',
      });
      return;
    }
    const discount = {
      id_discount: state.id_discount,
      id_product: state.product[0].IDProduct,
      discount_name: state.discount_name,
      voucher_code: state.voucher_code,
      start_time: state.start_time,
      end_time: state.end_time,
      percent_discount: state.percent_discount,
      quantity: state.quantity,
    };
    const isSucccess = (await dispatch(doPatchDiscount(discount))).payload;
    if (isSucccess.data === true) {
      Swal.fire({
        icon: 'success',
        title: 'Ch???nh s???a m?? gi???m gi?? th??nh c??ng',
      });
      history.push({
        pathname: `/seller/voucher`,
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Ch???nh s???a m?? gi???m gi?? th???t b???i',
      });
    }
  };
  const handleChangeSearch = (selectedOptions: any) => {
    if (selectedOptions.length != 0) {
      setIDProduct(selectedOptions[0].IDProduct);
      dispatchDataForm({ type: 'INPUT_PRODUCT', payload: selectedOptions });
    } else {
      setIDProduct('');
      dispatchDataForm({ type: 'INPUT_PRODUCT', payload: '' });
    }
  };
  const handleClickReturn = () => {
    history.push({
      pathname: `/seller/voucher`,
    });
  };
  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <div className="edit-discount-code">
            <div className="edit-discount-code__content">
              <Row>
                <Col sm={6}>
                  <div className="edit-discount-code__title">
                    <h1>Ch???nh s???a m?? gi???m gi??</h1>
                  </div>
                  <div className="edit-discount-code__item">Th??ng tin c?? b???n</div>
                  <div className="edit-discount-code__margin-15">
                    <span className="edit-discount-code__mr-40">Ch???n s???n ph???m</span>
                    <span className="edit-discount-code__search">
                      <Typeahead
                        id="list_product"
                        labelKey="NameProduct"
                        options={listProduct}
                        placeholder="Ch???n s???n ph???m"
                        onChange={handleChangeSearch}
                        required={true}
                        selected={state.product}
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
              label="Cho t???t c??? s???n ph???m"
              name="group1"
              type="radio"
              id="all_product"
              value="all_product"
            />
            <Form.Check
              inline
              label="Cho m???t s???n ph???m"
              name="group1"
              type="radio"
              id="one_product"
              value="one_product"
            /> */}
                    </span>
                  </div>
                  <InputFormProduct
                    title="T??n ch????ng tr??nh gi???m gi??"
                    type="text"
                    placeholder="Nh???p t??n s???n ph???m (T???i ??a 50 k?? t???)"
                    name="discount_name"
                    id="discount_name"
                    maxLength={50}
                    required={true}
                    value={state.discount_name}
                    onInput={(e: any) =>
                      dispatchDataForm({ type: 'INPUT_DISCOUNT_NAME', payload: e.target.value })
                    }
                  />
                  <InputFormProduct
                    title="M?? voucher"
                    type="text"
                    placeholder="Nh???p m?? voucher (T???i ??a 5 k?? t???)"
                    name="voucher_code"
                    id="voucher_code"
                    maxLength={5}
                    required={true}
                    value={state.voucher_code}
                    onInput={(e: any) =>
                      dispatchDataForm({ type: 'INPUT_VOUCHER_CODE', payload: e.target.value })
                    }
                  />
                  <div className="edit-discount-code__margin-15">
                    <div className="edit-discount-code__mr-40">Th???i gian s??? d???ng m?? </div>
                    <InputFormProduct
                      title="Th???i gian b???t ?????u"
                      type="datetime-local"
                      name="start_time"
                      id="start_time"
                      required={true}
                      value={state.start_time}
                      onInput={(e: any) =>
                        dispatchDataForm({ type: 'INPUT_START_TIME', payload: e.target.value })
                      }
                    />
                    <InputFormProduct
                      title="Th???i gian k???t th??c"
                      type="datetime-local"
                      name="end_time"
                      id="end_time"
                      required={true}
                      value={state.end_time}
                      onInput={(e: any) =>
                        dispatchDataForm({ type: 'INPUT_END_TIME', payload: e.target.value })
                      }
                    />
                  </div>
                  <div className="edit-discount-code__item">Thi???t l???p m?? gi???m gi??</div>
                  <InputFormProduct
                    title="M???c gi???m gi??"
                    type="number"
                    placeholder="Nh???p m???c gi???m gi?? theo %"
                    name="percent_discount"
                    id="percent_discount"
                    maxLength={3}
                    min="1"
                    max="100"
                    required={true}
                    value={state.percent_discount}
                    onInput={(e: any) =>
                      dispatchDataForm({ type: 'INPUT_PERCENT_DISCOUNT', payload: e.target.value })
                    }
                  />
                  <InputFormProduct
                    title="L?????t s??? d???ng t???i ??a"
                    type="number"
                    placeholder="Nh???p t???ng s??? l?????t s??? d???ng m??"
                    name="quantity"
                    id="quantity"
                    maxLength={10}
                    required={true}
                    value={state.quantity}
                    onInput={(e: any) =>
                      dispatchDataForm({ type: 'INPUT_QUANTITY', payload: e.target.value })
                    }
                  />
                  <div className="edit-discount-code__btn">
                    <Button
                      variant="secondary"
                      className="edit-discount-code__return"
                      onClick={handleClickReturn}
                    >
                      Tr??? l???i
                    </Button>
                    <Button variant="danger" type="submit">
                      Ch???nh s???a
                    </Button>
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="edit-discount-code__sample">
                    <div className="edit-discount-code__title">
                      <h1>M???u t???o m?? </h1>
                    </div>
                    <img
                      src="https://res.cloudinary.com/ndh/image/upload/v1640318408/discount_olpxbk.png"
                      alt="discount"
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Form>
      </Container>
    </>
  );
};
