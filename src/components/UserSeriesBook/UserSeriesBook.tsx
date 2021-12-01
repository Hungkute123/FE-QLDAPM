import React from 'react';
import { UserMessage } from '..';
import './UserSeriesBook.scss';

export const UserSeriesBook = () => {
  return (
    <div>
      <UserMessage></UserMessage>

      <div className="series-book-header">
        <div className="series-book-header__content">
          <div className="series-book-header__title">Sách theo bộ</div>
        </div>
      </div>
      <div className="series-book-body">
        <div className="series-book-body__content">
          <div className="series-book-body__empty">
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
