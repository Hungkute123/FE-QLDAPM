import React, { useEffect, useState } from 'react';
import { Tab, Table, Tabs } from 'react-bootstrap';
import { BsCheckCircle, BsEye, BsPencilSquare, BsXCircle } from 'react-icons/bs';
import { doGetOrderOfSeller, doUpdateStatus, useAppDispatch } from '../../../redux';
import { transformPriceFormat } from '../../../helpers';
import './OrderManagement.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux';
export const OrderManagement = () => {
  const dispatch = useAppDispatch();
  const [order, setOrder] = useState([]);
  let [orderProcessing, setOrderProcessing] = useState([]);
  let [orderCanceled, setOrderCanceled] = useState([]);
  let [orderDelivering, setOrderDelivering] = useState([]);
  let [orderDelivered, setOrderDelivered] = useState([]);
  const { account } = useSelector((state: RootState) => state.userSlice);
  const fetchOrder = async () => {
    const order = (await dispatch(doGetOrderOfSeller({ IDUser: account.IDUser }))).payload;
    if (order.data != null || order.data != undefined) {
      for (let i = 0; i < order.data.length; i++) {
        if (order.data[i].StatusOrder === 'Đang xử lý') {
          orderProcessing.push(order.data[i]);
          setOrderProcessing([...orderProcessing]);
        } else if (order.data[i].StatusOrder === 'Đã hủy') {
          orderCanceled.push(order.data[i]);
          setOrderCanceled([...orderCanceled]);
        } else if (order.data[i].StatusOrder === 'Đang giao') {
          orderDelivering.push(order.data[i]);
          setOrderDelivering([...orderDelivering]);
        } else {
          orderDelivered.push(order.data[i]);
          setOrderDelivered([...orderDelivered]);
        }
      }
    }
  };
  useEffect(() => {
    fetchOrder();
  }, []);
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
    const check = (await dispatch(doUpdateStatus({ status: 'Đã hủy', IDOrder: IDOrder }))).payload;
    if (check.data === true) {
      handleData();
    }
  };
  const handleDelivering = async (IDOrder: number) => {
    const check = (await dispatch(doUpdateStatus({ status: 'Đang giao', IDOrder: IDOrder })))
      .payload;
    if (check.data === true) {
      handleData();
    }
  };
  const handleDelivered = async (IDOrder: number) => {
    const check = (await dispatch(doUpdateStatus({ status: 'Đã giao', IDOrder: IDOrder }))).payload;
    if (check.data === true) {
      handleData();
    }
  };
  return (
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
                  {orderProcessing &&
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
                    })}
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
                  {orderCanceled &&
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
                    })}
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
                  {orderDelivering &&
                    orderDelivering.map((item: any, index: any) => {
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
                            <button onClick={() => handleDelivered(item.IDOrder)}>
                              <BsCheckCircle color={'#7FFF00'}></BsCheckCircle>
                            </button>
                          </td>
                        </tr>
                      );
                    })}
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
                  {orderDelivered &&
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
                    })}
                </tbody>
              </Table>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};
