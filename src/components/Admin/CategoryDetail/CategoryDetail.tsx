import React, { useEffect } from 'react';
import './CategoryDetail.scss';
import {
  useAppDispatch,
  useAppSelector,
  doGetOneCategory,
  doDeleteCategory,
  doUpdateCategory,
} from '../../../redux';
import { useParams, useHistory } from 'react-router';
import { Form, Col, Row, Button } from 'react-bootstrap';
export const CategoryDetail = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { oneCategory } = useAppSelector((state) => state.categorySlice);
  const { IDCategory } = useParams<any>();

  useEffect(() => {
    if (IDCategory) {
      dispatch(doGetOneCategory({ IDCategory: IDCategory }));
    }
  }, [IDCategory]);

  const handleReturn = () => {
    history.goBack();
  };

  const handleDeleteCategory = () => {
    dispatch(doDeleteCategory({ IDCategory: IDCategory }));
  };

  const handleUpdateCategory = () => {
    dispatch(doUpdateCategory({}));
  };

  return (
    <div className="category-detail">
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Tên
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="email"
              defaultValue={oneCategory?.Name}
              placeholder="Tên danh mục"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            Danh mục cha
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="Tên danh mục cha" />
          </Col>
        </Form.Group>
        <fieldset>
          <Form.Group as={Row} className="mb-3" defaultChecked={0}>
            <Form.Label as="legend" column sm={2}>
              Level
            </Form.Label>
            <Col sm={10}>
              <Form.Check
                type="radio"
                label="Level 1"
                value="1"
                name="formHorizontalRadios"
                id="1"
              />
              <Form.Check
                type="radio"
                label="Level 2"
                value="2"
                name="formHorizontalRadios"
                id="2"
              />
              <Form.Check
                type="radio"
                label="Level 3"
                value="3"
                name="formHorizontalRadios"
                id="3"
              />
            </Col>
          </Form.Group>
        </fieldset>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button
              style={{ width: '100px' }}
              type="button"
              variant="secondary"
              onClick={() => handleReturn()}
            >
              Hủy
            </Button>
            <Button style={{ margin: '0px 10px', width: '100px' }} type="submit">
              Cập nhật
            </Button>
            <Button variant="danger" type="button" style={{ position: 'absolute', right: 130 }}>
              Xóa danh mục
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};
