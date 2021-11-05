import React from 'react';
import './OneStepBox.scss';

interface IOneStepBox {
  title?: string;
}

export const OneStepBox: React.FC<IOneStepBox> = ({ title, children }) => {
  return (
    <div className="one-step-box">
      <div className="one-step-box__title">
        <span>{title}</span>
      </div>
      <div className="one-step-box__body">
        <span>{children}</span>
      </div>
    </div>
  );
};
