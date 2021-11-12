import React from 'react';
import './GroupOption.scss';
import { Form } from 'react-bootstrap';

export const GroupOption: React.FC<IGroupOption> = ({ title, listOption, name }) => {
  return (
    <div className="group-option">
      <div className="group-option__title">
        <p>{title}</p>
      </div>
      <div className="group-option__list">
        {/* <Form> */}
        {['checkbox'].map((type: any) => (
          <div key={`default-${type}`}>
            {listOption &&
              listOption.map((item) => {
                return (
                  <Form.Check
                    className="group-option__option"
                    type={type}
                    name={name}
                    id={`${name}-${item.id}`}
                    label={item.title}
                    value={item.title}
                  />
                );
              })}
          </div>
        ))}
        {/* </Form> */}
      </div>
    </div>
  );
};
