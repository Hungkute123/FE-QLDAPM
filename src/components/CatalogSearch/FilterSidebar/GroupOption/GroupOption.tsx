import React, { useState, useEffect } from 'react';
import './GroupOption.scss';
import { Form } from 'react-bootstrap';

export const GroupOption: React.FC<IGroupOption> = ({
  title,
  listOption,
  name,
  handleChange,
  defaultValue = '',
  value,
}) => {
  const [peopleInfo, setPeopleInfo] = useState<any>(defaultValue);

  useEffect(() => {
    handleChange(name, peopleInfo);
  }, [peopleInfo]);

  const handleOnChange = (e: any) => {
    const value = e.target.value;
    const checked = e.target.checked;

    if (checked) {
      if (peopleInfo === value) setPeopleInfo('');
      else setPeopleInfo(value);
    }
  };

  return (
    <div className="group-option">
      <div className="group-option__title">
        <p>{title}</p>
      </div>
      <div className="group-option__list">
        <Form>
          {['radio'].map((type: any) => (
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
                      value={item.value}
                      checked={item.value === peopleInfo}
                      onClick={handleOnChange}
                    />
                  );
                })}
            </div>
          ))}
        </Form>
      </div>
    </div>
  );
};
