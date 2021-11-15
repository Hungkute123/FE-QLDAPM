import React from 'react';
import './FilterSidebar.scss';
import { GroupOption } from './GroupOption/GroupOption';
import { FilterOption } from '../../../constants/common';
import { TiThLarge } from 'react-icons/ti';
import { Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { objToQueryUrl, getQueryStringValue } from '../../../helpers';

export const FilterSidebar: React.FC<any> = ({ listQuery }) => {
  const history = useHistory();
  let { search, pathname } = useLocation();

  const handleChange = (name: string, value: string) => {
    history.push({
      pathname,
      search: objToQueryUrl(listQuery, { name: name, value: value }),
    });
  };

  return (
    <div className="filter-sidebar">
      <h2>MUA THEO</h2>
      <Form>
        {FilterOption.map((item) => {
          return (
            <GroupOption
              handleChange={handleChange}
              title={item.title}
              listOption={item.list}
              name={item.name}
              defaultValue={getQueryStringValue(item.name)}
            />
          );
        })}
      </Form>
    </div>
  );
};
