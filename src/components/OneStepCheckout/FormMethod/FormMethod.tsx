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
