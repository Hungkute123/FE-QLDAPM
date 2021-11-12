import React from 'react';
import './FilterSidebar.scss';
import { GroupOption } from './GroupOption/GroupOption';
import { FilterOption } from '../../../constants/common';
import { TiThLarge } from 'react-icons/ti';
import { Form } from 'react-bootstrap';

export const FilterSidebar = () => {
  const handleSubmit = (e: any) => {
    // e.preventDefault();
    console.log(e.currentTarget.price);
  };

  return (
    <div className="filter-sidebar">
      <h2>MUA THEO</h2>
      <Form onChange={handleSubmit}>
        {FilterOption.map((item) => {
          return <GroupOption title={item.title} listOption={item.list} name={item.name} />;
        })}
      </Form>
    </div>
  );
};
