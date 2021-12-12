import React from 'react';
import './InputFormProduct.scss';
import { Form } from 'react-bootstrap';

interface IInputFormProduct {
  title?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  error?: string;
  handleChange?: any;
  id?: string;
  maxLength?: number;
  required?: boolean;
  min?: string;
  max?: string;
  disabled?: boolean;
  value?: string;
  onInput?: any;
}

export const InputFormProduct: React.FC<IInputFormProduct> = ({
  title,
  type,
  placeholder,
  error,
  handleChange,
  id,
  maxLength,
  required = false,
  min,
  max,
  disabled = false,
  value,
  onInput
}) => {
  return (
    // <Form onChange={handleChange}>
    <div className="input-form-product">
      <span className="input-form-product__title">
        <Form.Label>{title}</Form.Label>
      </span>
      <div className="input-form-product__input">
        <Form.Control
          type={type}
          id={id}
          name={id}
          placeholder={placeholder}
          maxLength={maxLength}
          required={required}
          min={min}
          max={max}
          disabled={disabled}
          value={value}
          onInput={onInput}
        />
        <div className="input-form-product__err">{error}</div>
      </div>
    </div>
    // </Form>
  );
};
