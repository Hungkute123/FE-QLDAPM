import React from 'react';
import './UserMessage.scss';

import { BsExclamationSquareFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export const UserMessage = () => {
  return (
    <div className="message">
      <div className="message__content">
        <BsExclamationSquareFill size={16} color="#dc3545" />
        <span>
          <span>Bạn vui lòng cập nhật thông tin tài khoản:</span>
          <Link to="/account/edit">Cập nhật thông tin ngay</Link>
        </span>
      </div>
    </div>
  );
};
