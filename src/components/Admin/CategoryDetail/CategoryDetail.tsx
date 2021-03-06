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
        {isCreateCate ? 'T???o danh m???c' : 'Ch???nh s???a danh m???c'}
      </h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            T??n
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="name"
              onChange={(e: any) => {
                setName(e.target.value);
              }}
              value={name}
              placeholder="T??n danh m???c"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            Danh m???c cha
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
                Ch???n danh m???c cha
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
              H???y
            </Button>
            <Button style={{ margin: '0px 10px', width: '100px' }} type="submit">
              C???p nh???t
            </Button>
            {isCreateCate || (
              <Button
                variant="danger"
                onClick={() => setShowConfirm(true)}
                type="button"
                style={{ position: 'absolute', right: 130 }}
              >
                X??a danh m???c
              </Button>
            )}
          </Col>
        </Form.Group>
      </Form>

      <ModalConfirm
        title="X??a danh m???c"
        show={showConfirm}
        handleClose={() => setShowConfirm(false)}
        handleAction={handleDeleteCategory}
      >
        <p>B???n c?? ch???c mu???n x??a danh m???c n??y? C??c danh m???c con c???a danh m???c n??y c??ng s??? b??? x??a.</p>
      </ModalConfirm>

      <Modal show={showSuccess} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton onClick={() => setShowSuccess(false)}>
          <Modal.Title>Th??ng b??o</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>C???p nh???t th??nh c??ng danh m???c</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => setShowSuccess(false)}>
            ????ng
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
