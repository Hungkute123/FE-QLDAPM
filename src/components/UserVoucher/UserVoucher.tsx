import React, { useState } from 'react';
import { UserMessage } from '..';
import './UserVoucher.scss';

export const UserVoucher = () => {
  const [isActive, setisActive] = useState(0);
  const listVocher = [
    {
      title: 'Vocher của tôi',
    },
    {
      title: 'Vocher đối tác',
    },
  ];

  return (
    <div>
      <UserMessage></UserMessage>

      <div className="vocher-header">
        <div className="vocher-header__content">
          <div className="vocher-header__title">Ví Vocher</div>
          <ul className="vocher-header__tab">
            {listVocher.map((item, moves) => {
              return (
                <li
                  className={`vocher-header__item ${
                    isActive == moves ? 'vocher-header__active' : ''
                  }`}
                >
                  <p 
                    className={`vocher-header__item--text ${
                      isActive == moves ? 'vocher-header__active--text' : ''
                    }`}
                    onClick={() => setisActive(moves)}
                  >
                    {item.title}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="vocher-body">
        <div className="vocher-body__content">
          <div className="vocher-body__empty">
            <img
              src="https://cdn0.fahasa.com/skin//frontend/ma_vanese/fahasa/images/ico_couponemty.svg?q=10047"
              alt="Vocher Empty"
            />
            <div>Không có khuyến mãi nào</div>
          </div>
        </div>
      </div>
    </div>
  );
};
