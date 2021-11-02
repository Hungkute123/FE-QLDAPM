import React from 'react';
import './FormMethod.scss';
import { Form } from 'react-bootstrap';
import {
  SvgMethod1,
  SvgMethod2,
  SvgMethod3,
  SvgMethod4,
  SvgMethod5,
  SvgMethod6,
  SvgMethod7,
  SvgMethod8,
  SvgMethod9,
} from '../../../constants/images';

export const FormMethod = () => {
  const listOption = [
    { title: 'Ví ZaloPay', id: 1, name: 'form-method-1', image: SvgMethod1 },
    { title: 'Ví Moca', id: 2, name: 'form-method-2', image: SvgMethod2 },
    { title: 'VNPAY', id: 3, name: 'form-method-3', image: SvgMethod3 },
    { title: 'Ví ShopeePay', id: 4, name: 'form-method-4', image: SvgMethod4 },
    { title: 'Ví Momo', id: 5, name: 'form-method-5', image: SvgMethod5 },
    { title: 'Chuyển khoản ngân hàng', id: 6, name: 'form-method-6', image: SvgMethod6 },
    { title: 'ATM / Internet banking', id: 7, name: 'form-method-7', image: SvgMethod7 },
    { title: 'Visa / Master / JCB', id: 8, name: 'form-method-8', image: SvgMethod8 },
    {
      title: 'Thanh toán bằng tiền mặt khi giao dịch',
      id: 9,
      name: 'form-method-9',
      image: SvgMethod9,
    },
  ];
  return (
    <div className="form-method">
      <Form>
        {listOption.map((item) => {
          return (
            <Form.Check
              className="form-method__item"
              type="radio"
              id={item.name}
              name="form-method"
            >
              <Form.Check.Input type="radio" name="form-method" />
              <Form.Check.Label>
                <div className="form-method__label">
                  <img src={item.image} alt="image" />
                  <span>{item.title}</span>
                </div>
              </Form.Check.Label>
            </Form.Check>
          );
        })}
      </Form>
    </div>
  );
};
