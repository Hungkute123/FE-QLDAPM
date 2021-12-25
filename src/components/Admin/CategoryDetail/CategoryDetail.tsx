import React, { useEffect, useState } from 'react';
import './CategoryDetail.scss';
import {
  useAppDispatch,
  useAppSelector,
  doGetOneCategory,
  doDeleteCategory,
  doUpdateCategory,
  doAddCategory,
  getCategoryProductByLevelZero,
  doGetAllCategory,
} from '../../../redux';
import { useParams, useHistory } from 'react-router';
import { Form, Col, Row, Button, Modal } from 'react-bootstrap';
import { ModalConfirm } from '../../../components';

export const CategoryDetail = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { oneCategory, listCategory } = useAppSelector((state) => state.categorySlice);
  const { IDCategory } = useParams<any>();
  const [valueLevel, setValueLevel] = useState<any>(oneCategory?.Level);
  const [data, setData] = useState<any>(listCategory?.data || []);
  const [idParent, setIdParent] = useState<any>(oneCategory?.IDParent || []);
  const [name, setName] = useState<any>(oneCategory?.Name || []);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const isCreateCate = IDCategory === '0' ? true : false;

  useEffect(() => {
    dispatch(doGetOneCategory({ IDCategory: IDCategory }));
  }, [IDCategory]);

  useEffect(() => {
    dispatch(doGetAllCategory());
  }, []);

  useEffect(() => {
    setValueLevel(oneCategory?.Level);

    if (oneCategory) {
      setIdParent(oneCategory.IDParent);
      setName(oneCategory.Name);
    }
  }, [oneCategory]);

  useEffect(() => {
    setData(listCategory?.data || []);
  }, [listCategory]);

  const handleReturn = () => {
    history.goBack();
  };

  const handleDeleteCategory = () => {
    dispatch(doDeleteCategory({ IDCategory: IDCategory }));
    history.push('/admin/manage-categories');
  };

  const handleChange = (e: any) => {};

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (isCreateCate) {
      dispatch(
        doAddCategory({
          Name: name,
          Level: valueLevel,
          IDParent: idParent || 0,
        }),
      );
      history.push('/admin/manage-categories');
    } else {
      dispatch(
        doUpdateCategory({
          IDCategory: IDCategory,
          Name: name,
          Level: valueLevel,
          IDParent: idParent,
        }),
      );
    }

    setShowSuccess(true);
  };

  const handleOnChangeRadio = (number: number) => {
    setValueLevel(number);
    dispatch(getCategoryProductByLevelZero({ level: number - 1 }));
  };

  return (
    <div className="category-detail">
      <h3 style={{ fontSize: 25, fontWeight: 500, marginBottom: '20px' }}>
        {isCreateCate ? 'Tạo danh mục' : 'Chỉnh sửa danh mục'}
      </h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Tên
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="name"
              onChange={(e: any) => {
                setName(e.target.value);
              }}
              value={name}
              placeholder="Tên danh mục"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            Danh mục cha
          </Form.Label>
          <Col sm={10}>
            <Form.Select
              onChange={(e: any) => {
                setIdParent(e.target.value);
              }}
              value={idParent}
              aria-label="Default select example"
            >
              <option style={{ display: 'none', fontStyle: 'italic' }} value={0}>
                Chọn danh mục cha
              </option>
              ;
              {data &&
                data.map((item: any) => {
                  return <option value={item.IDCategory}>{item.Name}</option>;
                })}
            </Form.Select>
          </Col>
        </Form.Group>

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
            {isCreateCate || (
              <Button
                variant="danger"
                onClick={() => setShowConfirm(true)}
                type="button"
                style={{ position: 'absolute', right: 130 }}
              >
                Xóa danh mục
              </Button>
            )}
          </Col>
        </Form.Group>
      </Form>

      <ModalConfirm
        title="Xóa danh mục"
        show={showConfirm}
        handleClose={() => setShowConfirm(false)}
        handleAction={handleDeleteCategory}
      >
        <p>Bạn có chắc muốn xóa danh mục này? Các danh mục con của danh mục này cũng sẽ bị xóa.</p>
      </ModalConfirm>

      <Modal show={showSuccess} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton onClick={() => setShowSuccess(false)}>
          <Modal.Title>Thông báo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Cập nhật thành công danh mục</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => setShowSuccess(false)}>
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
