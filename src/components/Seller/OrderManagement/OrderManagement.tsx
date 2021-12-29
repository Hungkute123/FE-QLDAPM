import React, { useEffect, useState } from 'react';
import { Tab, Table, Tabs } from 'react-bootstrap';
import { BsCheckCircle, BsEye, BsPencilSquare, BsXCircle } from 'react-icons/bs';
import {
  doGetOrderOfSeller,
  doUpdateSoldProduct,
  doUpdateStatus,
  useAppDispatch,
} from '../../../redux';
import { transformPriceFormat } from '../../../helpers';
import './OrderManagement.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux';
export const OrderManagement = () => {
  const dispatch = useAppDispatch();
  const [unpaidMoney, setUnpaidMoney] = useState(0);
  const [paidMoney, setPaidMoney] = useState(0);
  let [orderProcessing, setOrderProcessing] = useState([]);
  let [orderCanceled, setOrderCanceled] = useState([]);
  let [orderDelivering, setOrderDelivering] = useState([]);
  let [orderDelivered, setOrderDelivered] = useState([]);
  const { account } = useSelector((state: RootState) => state.userSlice);
  const fetchOrder = async () => {
    const order = (await dispatch(doGetOrderOfSeller({ IDUser: account.IDUser }))).payload;
    if (order.data != null || order.data != undefined) {
      for (let i = 0; i < order.data.length; i++) {
        if (order.data[i].StatusOrder === 'Chờ xác nhận') {
          orderProcessing.push(order.data[i]);
          setOrderProcessing([...orderProcessing]);
        } else if (order.data[i].StatusOrder === 'Bị hủy') {
          orderCanceled.push(order.data[i]);
          setOrderCanceled([...orderCanceled]);
        } else if (order.data[i].StatusOrder === 'Đang xử lý') {
          orderDelivering.push(order.data[i]);
          setOrderDelivering([...orderDelivering]);
        } else if (order.data[i].StatusOrder === 'Hoàn tất') {
          orderDelivered.push(order.data[i]);
          setOrderDelivered([...orderDelivered]);
        }
      }
    }
  };
  useEffect(() => {
    fetchOrder();
  }, []);
  const handleMoney = (order: any) => {
    let money = 0;
    if (order.length != 0) {
      for (let i = 0; i < order.length; i++) {
        money += order[i].Price * order[i].QuantityOrder;
      }
    }
    return money;
  };
  useEffect(() => {
    setUnpaidMoney(handleMoney(orderDelivering));
    setPaidMoney(handleMoney(orderDelivered));
  }, [orderDelivering.length, orderDelivered.length]);
  const handleData = () => {
    orderProcessing = [];
    orderCanceled = [];
    orderDelivering = [];
    orderDelivered = [];
    setOrderProcessing([...orderProcessing]);
    setOrderCanceled([...orderCanceled]);
    setOrderDelivering([...orderDelivering]);
    setOrderDelivered([...orderDelivered]);
    fetchOrder();
  };
  const handleCanceled = async (IDOrder: number) => {
    const check = (await dispatch(doUpdateStatus({ status: 'Bị hủy', IDOrder: IDOrder }))).payload;
    if (check.data === true) {
      handleData();
    }
  };
  const handleDelivering = async (IDOrder: number) => {
    const check = (await dispatch(doUpdateStatus({ status: 'Đang xử lý', IDOrder: IDOrder })))
      .payload;
    if (check.data === true) {
      handleData();
    }
  };
  const handleDelivered = async (
    IDOrder: number,
    IDProduct: string,
    Quantity: number,
    Sold: number,
  ) => {
    const total = Sold +Quantity;
    const check = (await dispatch(doUpdateStatus({ status: 'Hoàn tất', IDOrder: IDOrder })))
      .payload;
    doUpdateSoldProduct({ IDProduct: IDProduct, sold: total });
    if (check.data === true) {
      handleData();
    }
  };
  return (
    <>
      <div className="revenue">
        <div className="revenue__content">
          <div className="revenue__title">
            <h1>Tổng quan doanh thu</h1>
          </div>
          <div className="revenue__content__container">
            <div className="revenue__content__col-left">
              <div className="revenue__content__title">Sẽ thanh toán</div>
              <div className="revenue__content__label">Tổng cộng</div>
              <div className="revenue__content__numeric-content">
                {transformPriceFormat(unpaidMoney)}
                <span className="revenue__content__currency-symbol">đ</span>
              </div>
            </div>
            <div className="revenue__content__col-right">
              <div className="revenue__content__title">Đã thanh toán</div>
              <div className="revenue__content__label">Tổng cộng</div>
              <div className="revenue__content__numeric-content">
                {transformPriceFormat(paidMoney)}
                <span className="revenue__content__currency-symbol">đ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-management">
        <div className="product-management__content">
          <div className="product-management__title">
            <h1>Quản lý đơn hàng</h1>
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
                    {orderProcessing ? (
                      <tr>
                        <td></td>
                        <td>Không có đơn hàng</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    ) : (
                      orderProcessing.map((item: any, index: any) => {
                        return (
                          <tr key={index}>
                            <td className="text-center">{index + 1}</td>
                            <td className="text-center">{item.NameProduct}</td>
                            <td className="text-center">{item.QuantityOrder}</td>
                            <td className="text-center">{transformPriceFormat(item.Price)}đ</td>
                            <td className="text-center">Ba Đình Hà Nội</td>
                            <td className="text-center">
                              <button>
                                <BsEye></BsEye>
                              </button>
                            </td>
                            <td className="text-center">
                              <button onClick={() => handleCanceled(item.IDOrder)}>
                                <BsXCircle color={'#DC143C'}></BsXCircle>
                              </button>
                            </td>
                            <td className="text-center">
                              <button onClick={() => handleDelivering(item.IDOrder)}>
                                <BsCheckCircle color={'#7FFF00'}></BsCheckCircle>
                              </button>
                            </td>
                          </tr>
                        );
                      })
                    )}
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
                    {orderCanceled.length === 0 ? (
                      <tr>
                        <td></td>
                        <td>Không có đơn hàng</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    ) : (
                      orderCanceled.map((item: any, index: any) => {
                        return (
                          <tr key={index}>
                            <td className="text-center">{index + 1}</td>
                            <td className="text-center">{item.NameProduct}</td>
                            <td className="text-center">{item.QuantityOrder}</td>
                            <td className="text-center">{transformPriceFormat(item.Price)}đ</td>
                            <td className="text-center">Ba Đình Hà Nội</td>
                            <td className="text-center">
                              <button>
                                <BsEye></BsEye>
                              </button>
                            </td>
                            <td className="text-center">Đã hủy</td>
                          </tr>
                        );
                      })
                    )}
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
                    {orderDelivering.length === 0 ? (
                      <tr>
                        <td></td>
                        <td>Không có đơn hàng</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    ) : (
                      orderDelivering.map((item: any, index: any) => {
                        return (
                          <tr key={index}>
                            <td className="text-center">{index + 1}</td>
                            <td className="text-center">{item.NameProduct}</td>
                            <td className="text-center">{item.QuantityOrder}</td>
                            <td className="text-center">
                              {transformPriceFormat(item.Price * item.QuantityOrder)}đ
                            </td>
                            <td className="text-center">Ba Đình Hà Nội</td>
                            <td className="text-center">
                              <button>
                                <BsEye></BsEye>
                              </button>
                            </td>
                            <td className="text-center">
                              <button
                                onClick={() =>
                                  handleDelivered(
                                    item.IDOrder,
                                    item.IDProduct,
                                    item.QuantityOrder,
                                    item.Sold,
                                  )
                                }
                              >
                                <BsCheckCircle color={'#7FFF00'}></BsCheckCircle>
                              </button>
                            </td>
                          </tr>
                        );
                      })
                    )}
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
                    {orderDelivered.length === 0 ? (
                      <tr>
                        <td></td>
                        <td>Không có đơn hàng</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    ) : (
                      orderDelivered.map((item: any, index: any) => {
                        return (
                          <tr key={index}>
                            <td className="text-center">{index + 1}</td>
                            <td className="text-center">{item.NameProduct}</td>
                            <td className="text-center">{item.QuantityOrder}</td>
                            <td className="text-center">{transformPriceFormat(item.Price)}đ</td>
                            <td className="text-center">Ba Đình Hà Nội</td>
                            <td className="text-center">
                              <button>
                                <BsEye></BsEye>
                              </button>
                            </td>
                            <td className="text-center">Hoàn thành</td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </Table>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
};
