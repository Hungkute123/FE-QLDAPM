import React from 'react';
import './UserNotification.scss';

import { Link } from 'react-router-dom';

export const UserNotification = () => {
  const className = 'user-notification';
  return (
    <div className={`${className}`}>
      <div className={`${className}__content`}>
        <ul className={`${className}__menu`}>
          <li className={`${className}__tab`}>
            <Link to="/">
              <div className={`${className}__unseen`}></div>
              <div className={`${className}__label`}>Tat ca</div>
            </Link>
          </li>
        </ul>
        <div className={`${className}__underline`}></div>
        <div className={`${className}__body`}></div>
      </div>
    </div>
  );
};
