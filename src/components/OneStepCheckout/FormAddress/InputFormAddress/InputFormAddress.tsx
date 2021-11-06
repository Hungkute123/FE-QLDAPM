import React from 'react';
import './InputFormAddress.scss';
import { Form } from 'react-bootstrap';

interface IInputFormAddress {
  title?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  error?: string;
  handleChange?: any;
  id?: string;
}

export const InputFormAddress: React.FC<IInputFormAddress> = ({
  title,
  placeholder,
  error,
  handleChange,
  id,
}) => {
  return (
    // <Form onChange={handleChange}>
    <div className="input-form-address">
      <span className="input-form-address__title">
        <Form.Label>{title}</Form.Label>
      </span>
      <div className="input-form-address__input">
        <Form.Control type="text" id={id} name={id} placeholder={placeholder} />
        <div className="input-form-address__err">{error}</div>
      </div>
    </div>
    // </Form>
  );
};
