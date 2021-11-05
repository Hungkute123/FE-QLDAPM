import React from 'react';
import './FilterSidebar.scss';
import { GroupOption } from './GroupOption/GroupOption';
import { FilterOption } from '../../../constants/common';
import { TiThLarge } from 'react-icons/ti';

export const FilterSidebar = () => {
  return (
    <div className="filter-sidebar">
      <h2>MUA THEO</h2>
      {FilterOption.map((item) => {
        return <GroupOption title={item.title} listOption={item.list} name={item.name} />;
      })}
    </div>
  );
};
