import React, { useState, useEffect, useRef } from 'react';
import './DropdownAddress.scss';
import { Dropdown, FormControl, Form } from 'react-bootstrap';

interface IInputFormAddress {
  title?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  error?: string;
  listOption?: Array<any>;
  handleChange?: any;
  id?: string;
}

export const DropdownAddress: React.FC<IInputFormAddress> = ({
  title,
  placeholder,
  error,
  listOption,
  handleChange,
  id,
}) => {
  return (
    // <Form onChange={handleChange}>
    <div className="dropdown-address">
      <span className="dropdown-address__title">
        <Form.Label>{title}</Form.Label>
      </span>
      <div className="dropdown-address__input">
        {/* <Form.Control type="email" placeholder={placeholder} /> */}
        <Form.Select id={id} name={id} defaultValue={placeholder}>
          <option disabled className="dropdown-address__default">
            {placeholder}
          </option>
          <option value="1">Default select 1</option>
          <option value="2">Default select 2</option>
          <option value="3">Default select 3</option>
          <option value="4">Default select 4</option>
        </Form.Select>
        <div className="dropdown-address__err">{error}</div>
      </div>
    </div>
    // </Form>
  );
};
