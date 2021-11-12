import React, { useEffect, useState } from 'react';
import './CatalogSearch.scss';
import { useLocation, useHistory } from 'react-router';
import { Row, Col, Form } from 'react-bootstrap';
import { ListProduct, DefaultSidebar, FilterSidebar } from '../../components';
import { Pagination, Loader } from '../../components/common';
import { getQueryStringValue, objToQueryUrl } from '../../helpers';
import {
  useAppDispatch,
  useAppSelector,
  doGetSearchListProduct,
  doGetCountSearchListProduct,
} from '../../redux';
import { Elimit } from '../../constants';

export const CatalogSearch = () => {
  let { search, pathname } = useLocation();
  const history = useHistory();

  const [textSearch, setTextSearch] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const dispatch = useAppDispatch();
  const { listSearchProduct, isLoading, pathSrc, numbersProduct } = useAppSelector(
    (state) => state.productSlice,
  );

  const query = new URLSearchParams(search);
  const listQuery: any = {};
  query.forEach((value, name) => {
    listQuery[name] = value;
    if (name === 'currentpage') listQuery[name] = parseInt(value) - 1;
    if (name === 'consultantuserid') {
      listQuery[name] = parseInt(value);
    }
  });

  useEffect(() => {
    if (search) {
      setTextSearch(getQueryStringValue('text'));
    }
  }, [search]);

  useEffect(() => {
    dispatch(
      doGetSearchListProduct({
        search: textSearch,
        limit: Elimit.productSearchLimit,
        page: pageNumber - 1,
      }),
    );

    dispatch(doGetCountSearchListProduct({ search: textSearch }));
  }, [textSearch]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

    history.push({
      pathname,
      search: objToQueryUrl(listQuery, { name: 'page', value: pageNumber }),
    });

    dispatch(
      doGetSearchListProduct({
        search: textSearch,
        limit: Elimit.productSearchLimit,
        page: pageNumber - 1,
      }),
    );
  }, [pageNumber]);

  return (
    <div className="catalog-search">
      <Row className="catalog-search__container">
        <Col md={3} className="catalog-search__left">
          {listSearchProduct && listSearchProduct.length ? <FilterSidebar /> : <></>}
          <DefaultSidebar />
        </Col>
        <Col md={9}>
          <div className="catalog-search__right">
            <p className="catalog-search__title">
              KẾT QUẢ TÌM KIẾM VỚI: {textSearch.toUpperCase()}
            </p>
            {!listSearchProduct || !listSearchProduct.length ? (
              <div className="catalog-search__empty">
                <span>Không có sản phẩm phù hợp với từ khóa tìm kiếm của bạn.</span>
              </div>
            ) : (
              <>
                {isLoading && <Loader />}
                <div className="catalog-search__header">
                  <div className="catalog-search__list-tag">
                    {/* {[1, 2, 3, 4, 5, 1, 1, 1, 1, 1].map((item) => {
                      return (
                        <div className="catalog-search__list-tag__item">
                          <span>Sách Giáo Khoa Cấp 1</span>
                        </div>
                      );
                    })} */}
                  </div>

                  <div className="catalog-search__sort">
                    <span>Sắp xếp theo :</span>
                    <Form.Select className="catalog-search__select">
                      <option>Giá tăng dần</option>
                      <option>Giá giảm dần</option>
                    </Form.Select>
                    {/* <Form.Select className="catalog-search__select">
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
                    </Form.Select> */}
                  </div>
                </div>

                <div className="catalog-search__list">
                  <ListProduct numCol={4} listproducts={listSearchProduct} path={pathSrc} />
                </div>

                <Pagination
                  numberPages={Math.ceil(numbersProduct / Elimit.productSearchLimit)}
                  currentPage={pageNumber}
                  handleSelectedNumber={(number: number) => {
                    setPageNumber(number);
                  }}
                />
              </>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};
