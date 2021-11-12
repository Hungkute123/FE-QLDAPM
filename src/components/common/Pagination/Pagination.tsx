import React, { FC } from 'react';
import './Pagination.scss';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Elimit } from '../../../constants';

interface IPagination {
  numberPages: number;
  handleSelectedNumber?: (page: number) => void;
  currentPage?: number;
}

export const Pagination: FC<IPagination> = ({
  numberPages,
  handleSelectedNumber,
  currentPage = 0,
}) => {
  const data: number[] = [];
  let startPage = 0;
  let limitShow = Elimit.pageLimitShown;
  let endPage;

  if (numberPages > limitShow) {
    if (currentPage - limitShow / 2 > 0) {
      if (currentPage + limitShow / 2 < numberPages) {
        startPage = currentPage - Math.floor(limitShow / 2);
        endPage = startPage + limitShow;
      } else {
        endPage = numberPages;
        startPage = numberPages - limitShow;
      }
    } else {
      startPage = 0;
      endPage = limitShow;
    }
  }

  if (numberPages) {
    for (let i = 0; i < numberPages; i++) {
      data.push(i + 1);
    }
  }

  return (
    <div className="pagination">
      <div
        onClick={(e) =>
          currentPage === 0 ? {} : handleSelectedNumber && handleSelectedNumber(currentPage - 1)
        }
        className={`pagination__num ${currentPage === 0 ? ' pagination__num--disabled ' : ''} `}
      >
        <FiChevronLeft size={'min(1.2vw, 20px)'} />
      </div>
      {data.slice(startPage, endPage).map((item, i) => {
        return (
          <div
            key={i}
            className={
              currentPage == item ? 'pagination__num pagination__num--current' : 'pagination__num'
            }
            onClick={() => {
              if (handleSelectedNumber) {
                return handleSelectedNumber(item);
              }
            }}
          >
            {item}
          </div>
        );
      })}
      <div
        onClick={(e) =>
          currentPage === numberPages - 1
            ? {}
            : handleSelectedNumber && handleSelectedNumber(currentPage + 1)
        }
        className={`pagination__num ${
          currentPage === numberPages - 1 ? ' pagination__num--disabled ' : ''
        } `}
      >
        <FiChevronRight size={'min(1.2vw, 20px)'} />
      </div>
    </div>
  );
};
