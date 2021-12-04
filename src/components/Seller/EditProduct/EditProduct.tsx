import React, { useEffect, useState, useRef } from 'react';
import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import './EditProduct.scss';
import { Editor } from '@tinymce/tinymce-react';
import { ClearButton, Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { BsSearch } from 'react-icons/bs';
import {
  doAddNewProduct,
  getCategoryProductByIDParentLevelOne,
  getCategoryProductByIDParentLevelTwo,
  getCategoryProductByLevelZero,
  RootState,
  useAppDispatch,
} from '../../../redux';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { InputFormProduct } from '../AddNewProduct/InputFormProduct/InputFormProduct';
import { FormBook } from '../AddNewProduct/FormBook/FormBook';
import { FormItem } from '../AddNewProduct/FormItem/FormItem';

export const EditProduct = () => {
  const dispatch = useAppDispatch();
  const [categoryLevelOne, SetCategoryLeveOne] = useState([]);
  const [categoryLevelTwo, SetCategoryLeveTwo] = useState([]);
  const [categoryLevelThree, SetCategoryLeveThree] = useState([]);
  const [idCategory, SetIdCategory] = useState(0);
  const [status, SetStatus] = useState(0);
  const [isCategoryLevelTwo, SetIsCategoryLeveTwo] = useState(false);
  const [isCategoryLevelThree, SetIsCategoryLeveThree] = useState(false);
  const [isBook, SetBook] = useState(false);
  const [isItem, SetItem] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [previewOne, setPreviewOne] = useState('');
  const [selectedFileOne, setSelectedFileOne] = useState();
  const [previewTwo, setPreviewTwo] = useState('');
  const [selectedFileTwo, setSelectedFileTwo] = useState();
  const [previewThree, setPreviewThree] = useState('');
  const [selectedFileThree, setSelectedFileThree] = useState();
  const [preview, setPreview] = useState('');
  const [contentEditor, setContentEditor] = useState();
  const editorRef = useRef(null);
  useEffect(() => {
    const getCategoryLevelZero = async () => {
      const zero = (await dispatch(getCategoryProductByLevelZero({ level: 0 }))).payload;
      zero.data.map((item: any, i: number) => {
        categoryLevelOne.push(item);
        SetCategoryLeveOne(categoryLevelOne);
      });
    };
    getCategoryLevelZero();
  }, []);
  const handleRadio = (e: any) => {
    if (e.currentTarget.value === 'book') {
      SetBook(true);
      SetItem(false);
    } else {
      SetBook(false);
      SetItem(true);
    }
  };
  const handleEditorChange = (content: any, editor: any) => {
    setContentEditor(content);
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('id_category', String(idCategory));
    formData.append('product_name', e.target.elements.product_name.value);
    formData.append('cover_image', selectedFile);
    formData.append('image_one', selectedFileOne);
    formData.append('image_two', selectedFileTwo);
    formData.append('image_three', selectedFileThree);
    formData.append('product_price', e.target.elements.product_price.value);
    formData.append('product_weight', e.target.elements.product_weight.value);
    formData.append(
      'product_package_size',
      String(e.target.elements.product_width.value) +
        'x' +
        String(e.target.elements.product_length.value) +
        'x' +
        String(e.target.elements.product_height.value),
    );
    formData.append('product_quantity', e.target.elements.product_quantity.value);
    formData.append('description', contentEditor);
    if (isBook === true) {
      formData.append('type_product', 'Book');
      formData.append('product_author', e.target.elements.product_author.value);
      formData.append('product_supplier', e.target.elements.product_supplier.value);
      formData.append(
        'product_publishing_company',
        e.target.elements.product_publishing_company.value,
      );
      formData.append('product_cover_form', e.target.elements.product_cover_form.value);
      formData.append('product_translator', e.target.elements.product_translator.value);
      formData.append('product_publishing_year', e.target.elements.product_publishing_year.value);
      formData.append('product_number_of_page', e.target.elements.product_number_of_page.value);
    } else {
      formData.append('type_product', 'Item');
      formData.append('product_origin', e.target.elements.product_origin.value);
      formData.append('product_trademark', e.target.elements.product_trademark.value);
      formData.append('product_processing_place', e.target.elements.product_processing_place.value);
      formData.append('product_color', e.target.elements.product_color.value);
      formData.append('product_material', e.target.elements.product_material.value);
    }
    formData.append('status', String(status));
    const isSucccess = (await dispatch(doAddNewProduct(formData))).payload;
    console.log(isSucccess);
    if (isSucccess.data === true) {
      Swal.fire({
        icon: 'success',
        title: 'Thêm sản phẩm thành công',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Thêm sản phẩm thất bại',
      });
    }
  };
  // const handleInputChange = (input: any, e: any) => {
  //   // console.log('value', input);
  // };
  const getCategoryLevelOne = async (idparent: number) => {
    const one = (await dispatch(getCategoryProductByIDParentLevelOne({ idparent: idparent })))
      .payload;
    one.data.map((item: any, i: number) => {
      categoryLevelTwo.push(item);
      SetCategoryLeveTwo(categoryLevelTwo);
    });
  };
  const handleChangeCategoryOne = (selectedOptions: any) => {
    if (selectedOptions.length != 0) {
      getCategoryLevelOne(selectedOptions[0].IDCategory);
      SetIsCategoryLeveTwo(true);
    } else {
      SetCategoryLeveTwo([]);
      SetCategoryLeveThree([]);
      SetIsCategoryLeveTwo(false);
      SetIsCategoryLeveThree(false);
    }
  };
  const getCategoryLevelTwo = async (idparent: number) => {
    const three = (await dispatch(getCategoryProductByIDParentLevelTwo({ idparent: idparent })))
      .payload;
    three.data.map((item: any, i: number) => {
      categoryLevelThree.push(item);
      SetCategoryLeveThree(categoryLevelThree);
    });
  };
  const handleChangeCategoryTwo = (selectedOptions: any) => {
    if (selectedOptions.length != 0) {
      getCategoryLevelTwo(selectedOptions[0].IDCategory);
      SetIsCategoryLeveThree(true);
      SetIdCategory(selectedOptions[0].IDCategory);
    } else {
      SetCategoryLeveThree([]);
      SetIsCategoryLeveThree(false);
    }
  };
  const handleChangeCategoryThree = (selectedOptions: any) => {
    if (selectedOptions.length != 0) {
      SetIdCategory(selectedOptions[0].IDCategory);
    } else {
      SetIdCategory(0);
    }
  };
  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e: any) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };
  useEffect(() => {
    if (!selectedFileOne) {
      setPreviewOne(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFileOne);
    setPreviewOne(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFileOne]);

  const onSelectFileOne = (e: any) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFileOne(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFileOne(e.target.files[0]);
  };
  useEffect(() => {
    if (!selectedFileTwo) {
      setPreviewTwo(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFileTwo);
    setPreviewTwo(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFileTwo]);

  const onSelectFileTwo = (e: any) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFileTwo(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFileTwo(e.target.files[0]);
  };
  useEffect(() => {
    if (!selectedFileThree) {
      setPreviewThree(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFileThree);
    setPreviewThree(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFileThree]);

  const onSelectFileThree = (e: any) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFileThree(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFileThree(e.target.files[0]);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <div className="edit-product">
          <div className="edit-product__content">
            <div className="edit-product__title">
              <h1>Thông tin cơ bản</h1>
            </div>
            <InputFormProduct
              title="Tên sản phẩm"
              type="text"
              placeholder="Nhập tên sản phẩm (Tối đa 100 ký tự)"
              name="product_name"
              id="product_name"
              maxLength={100}
              required={true}
            />
            <div className="edit-product__item">Ảnh đại diện sản phẩm</div>
            <div className="edit-product__input">
              <div className="edit-product__input__image">
                {selectedFile && <img src={preview} />}
              </div>
              <div className="edit-product__input__upload">
                <label htmlFor="image">
                  <input
                    type="file"
                    onChange={onSelectFile}
                    id="cover_image"
                    name="cover_image"
                    accept=".jpg,.png"
                    required
                  />
                  <span>
                    <Button variant="outline-secondary" style={{ fontSize: '12px' }}>
                      Upload ảnh bìa
                    </Button>
                  </span>
                </label>
              </div>
            </div>
            <Container>
              <Row>
                <Col lg={4} md={4}>
                  {' '}
                  <div className="edit-product__input">
                    <div className="edit-product__input__image edit-product__input__image--100">
                      {selectedFileOne && <img src={previewOne} />}
                    </div>
                    <div className="edit-product__input__upload">
                      <label className="edit-product__input__upload__label" htmlFor="image">
                        <input
                          type="file"
                          onChange={onSelectFileOne}
                          id="image_one"
                          name="image_one"
                          accept=".jpg,.png"
                        />
                        <span>
                          <Button variant="outline-secondary" style={{ fontSize: '12px' }}>
                            Upload ảnh 1
                          </Button>
                        </span>
                      </label>
                    </div>
                  </div>
                </Col>
                <Col lg={4} md={4}>
                  {' '}
                  <div className="edit-product__input">
                    <div className="edit-product__input__image edit-product__input__image--100">
                      {selectedFileTwo && <img src={previewTwo} />}
                    </div>
                    <div className="edit-product__input__upload">
                      <label className="edit-product__input__upload__label" htmlFor="image">
                        <input
                          type="file"
                          onChange={onSelectFileTwo}
                          id="image_two"
                          name="image_two"
                          accept=".jpg,.png"
                        />
                        <span>
                          <Button variant="outline-secondary" style={{ fontSize: '12px' }}>
                            Upload ảnh 2
                          </Button>
                        </span>
                      </label>
                    </div>
                  </div>
                </Col>
                <Col lg={4} md={4}>
                  {' '}
                  <div className="edit-product__input">
                    <div className="edit-product__input__image edit-product__input__image--100">
                      {selectedFileThree && <img src={previewThree} />}
                    </div>
                    <div className="edit-product__input__upload">
                      <label className="edit-product__input__upload__label" htmlFor="image">
                        <input
                          type="file"
                          onChange={onSelectFileThree}
                          id="image_three"
                          name="image_three"
                          accept=".jpg,.png"
                        />
                        <span>
                          <Button variant="outline-secondary" style={{ fontSize: '12px' }}>
                            Upload ảnh 3
                          </Button>
                        </span>
                      </label>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
            <div className="edit-product__item">Danh mục sản phẩm</div>
            <div className="edit-product__category">
              <Container>
                <Row>
                  <Col
                    lg={4}
                    md={4}
                    style={{
                      paddingRight: '20px',
                      borderRight: '1px solid #ccc ',
                      height: '370px',
                    }}
                  >
                    <div className="edit-product__level">Danh mục sản phẩm cấp một</div>
                    <Typeahead
                      id="category_level_one"
                      labelKey="Name"
                      name="category_level_one"
                      options={categoryLevelOne}
                      placeholder="Chọn danh mục"
                      onChange={handleChangeCategoryOne}
                    >
                      {({ onClear, selected }) => (
                        <div className="rbt-aux">
                          {!!selected.length && <ClearButton onClick={onClear} />}
                          {!selected.length && <BsSearch></BsSearch>}
                        </div>
                      )}
                    </Typeahead>
                  </Col>
                  <Col
                    lg={4}
                    md={4}
                    style={{
                      paddingRight: '20px',
                      borderRight: '1px solid #ccc ',
                      height: '370px',
                    }}
                  >
                    <div className={`edit-product__level`}>Danh mục sản phẩm cấp hai</div>
                    <Typeahead
                      id="category_level_two"
                      name="category_level_two"
                      labelKey="Name"
                      options={categoryLevelTwo}
                      placeholder="Chọn danh mục"
                      onChange={handleChangeCategoryTwo}
                      className={`${
                        isCategoryLevelTwo ? 'edit-product__show' : 'edit-product__hide'
                      }`}
                    >
                      {({ onClear, selected }) => (
                        <div className="rbt-aux">
                          {!!selected.length && <ClearButton onClick={onClear} />}
                          {!selected.length && <BsSearch></BsSearch>}
                        </div>
                      )}
                    </Typeahead>
                  </Col>
                  <Col lg={4} md={4} className="col-sm-6">
                    <div className="edit-product__level">Danh mục sản phẩm cấp ba</div>
                    <Typeahead
                      id="category_level_three"
                      name="category_level_three"
                      labelKey="Name"
                      options={categoryLevelThree}
                      placeholder="Chọn danh mục"
                      onChange={handleChangeCategoryThree}
                      className={`${
                        isCategoryLevelThree ? 'edit-product__show' : 'edit-product__hide'
                      }`}
                    >
                      {({ onClear, selected }) => (
                        <div className="rbt-aux">
                          {!!selected.length && <ClearButton onClick={onClear} />}
                          {!selected.length && <BsSearch></BsSearch>}
                        </div>
                      )}
                    </Typeahead>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="edit-product__item">Mô Tả sản phẩm</div>
            <div className="edit-product__textarea">
              <Editor
                tagName="description"
                onInit={(evt, editor) => (editorRef.current = editor)}
                init={{
                  selector: 'textarea',
                  height: 400,
                  placeholder: 'Nhập mô tả sản phẩm của bạn',
                  plugins: 'paste image link autolink lists table media',
                  menubar: false,
                  toolbar: [
                    'undo redo | bold italic underline strikethrough | numlist bullist | alignleft aligncenter alignright | forecolor backcolor | table link image media',
                  ],
                }}
                value={contentEditor}
                onEditorChange={handleEditorChange}
              />
            </div>
            <div className="edit-product__margin-10">
              <InputFormProduct
                title="Giá sản phẩm"
                type="number"
                placeholder="Nhập giá của sản phẩm theo VNĐ"
                id="product_price"
                name="product_price"
                maxLength={14}
                required={true}
                min="0"
              />
            </div>
            <div className="edit-product__margin-10">
              <InputFormProduct
                title="Khối lượng sản phẩm"
                type="number"
                placeholder="Nhập khối lượng của sản phẩm theo gram SAU KHI ĐÓNG GÓI"
                id="product_weight"
                name="product_weight"
                required={true}
                min="0"
              />
            </div>
            <div className="edit-product__margin-10">
              <InputFormProduct
                title="Kho hàng"
                type="number"
                placeholder="Nhập số lượng hàng trong kho của bạn"
                id="product_quantity"
                name="product_quantity"
                min="0"
              />
            </div>
            <div className="edit-product__margin-10">
              <div className="edit-product__item">
                Kích thước đóng gói (Phí vận chuyển thực tế sẽ thay đổi nếu bạn nhập sai kích thước)
              </div>
              <div className="edit-product__package">
                <Container>
                  <Row>
                    <Col
                      lg={4}
                      md={4}
                      style={{
                        paddingRight: '20px',
                        borderRight: '1px solid #ccc ',
                        height: '50px',
                      }}
                    >
                      <div className="edit-product__level">
                        <InputFormProduct
                          title="Chiều rộng"
                          type="number"
                          placeholder="cm"
                          id="product_width"
                          name="product_width"
                          required={true}
                          min="0"
                        />
                      </div>
                    </Col>
                    <Col
                      lg={4}
                      md={4}
                      style={{
                        paddingRight: '20px',
                        borderRight: '1px solid #ccc ',
                        height: '50px',
                      }}
                    >
                      <div className="edit-product__level">
                        <InputFormProduct
                          title="Chiều dài"
                          type="number"
                          placeholder="cm"
                          id="product_length"
                          name="product_length"
                          required={true}
                          min="0"
                        />
                      </div>
                    </Col>
                    <Col lg={4} md={4}>
                      <div className="edit-product__level">
                        <InputFormProduct
                          title="Chiều cao"
                          type="number"
                          placeholder="cm"
                          id="product_height"
                          name="product_height"
                          required={true}
                          min="0"
                        />
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>

            <div className="edit-product__margin-10">
              <span className="edit-product__title2">Sản phẩm thuộc loại</span>
              <span>
                <Form.Check
                  inline
                  label="Sách"
                  name="group1"
                  type="radio"
                  id="book"
                  value="book"
                  onClick={handleRadio}
                />
                <Form.Check
                  inline
                  label="Sản phẩm khác"
                  name="group1"
                  type="radio"
                  id="item"
                  value="item"
                  onClick={handleRadio}
                />
              </span>
            </div>
          </div>
        </div>

        <div className={`${isBook ? 'edit-product__show' : 'edit-product__hide'}`}>
          <div className="edit-product">
            <div className="edit-product__content">
              <div className="edit-product__title">
                <h1>Thông tin chi tiết</h1>
              </div>
              <FormBook required={isBook}></FormBook>
              <div className="edit-product__btn">
                <Button variant="secondary" style={{ marginRight: '10px' }} type="submit">
                  Lưu & Ẩn
                </Button>
                <Button variant="danger" type="submit" onClick={() => SetStatus(1)}>
                  Lưu & Hiển thị
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className={`${isItem ? 'edit-product__show' : 'edit-product__hide'}`}>
          <div className="edit-product">
            <div className="edit-product__content">
              <div className="edit-product__title">
                <h1>Thông tin chi tiết</h1>
              </div>
              <FormItem required={isItem}></FormItem>
              <div className="edit-product__btn">
                <Button variant="secondary" style={{ marginRight: '10px' }} type="submit">
                  Lưu & Ẩn
                </Button>
                <Button variant="danger" type="submit" onClick={() => SetStatus(1)}>
                  Lưu & Hiển thị
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};
