import React, { useEffect, useState } from 'react';
import './CatalogSearch.scss';
import { useLocation } from 'react-router';
import { Row, Col, Form } from 'react-bootstrap';
import { ListProduct, DefaultSidebar, FilterSidebar } from '../../components';
import { Pagination } from '../../components/common';
import { getQueryStringValue } from '../../helpers';

export const CatalogSearch = () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 1, 2, 3, 1, 1, 1, 1, 1, 1, 1, 1];
  const location = useLocation();
  const [textSearch, setTextSearch] = useState('');

  useEffect(() => {
    if (location.search) {
      setTextSearch(getQueryStringValue('text'));
    }
  }, [location]);

  return (
    <div className="catalog-search">
      <Row className="catalog-search__container">
        <Col md={3} className="catalog-search__left">
          {list && list.length ? <FilterSidebar /> : <></>}
          <DefaultSidebar />
        </Col>
        <Col md={9}>
          <div className="catalog-search__right">
            <p className="catalog-search__title">
              KẾT QUẢ TÌM KIẾM VỚI: {textSearch.toUpperCase()}
            </p>
            {!list || !list.length ? (
              <div className="catalog-search__empty">
                <span>Không có sản phẩm phù hợp với từ khóa tìm kiếm của bạn.</span>
              </div>
            ) : (
              <>
                <div className="catalog-search__header">
                  <div className="catalog-search__list-tag">
                    {[1, 2, 3, 4, 5, 1, 1, 1, 1, 1].map((item) => {
                      return (
                        <div className="catalog-search__list-tag__item">
                          <span>Sách Giáo Khoa Cấp 1</span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="catalog-search__sort">
                    <span>Sắp xếp theo :</span>
                    <Form.Select className="catalog-search__select">
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                      <option>Option 4</option>
                    </Form.Select>
                    <Form.Select className="catalog-search__select">
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                      <option>Option 4</option>
                    </Form.Select>
                    <Form.Select className="catalog-search__select">
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                      <option>Option 4</option>
                    </Form.Select>
                  </div>
                </div>

                <div className="catalog-search__list">
                  <ListProduct numCol={4} listproducts={list} />
                </div>

                <Pagination numberPages={5} currentPage={2} handleSelectedNumber={() => {}} />
              </>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};
