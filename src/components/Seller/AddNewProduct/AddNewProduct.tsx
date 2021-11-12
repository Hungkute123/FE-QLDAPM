import React, { useEffect, useState, useRef } from 'react';
import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import './AddNewProduct.scss';
import { InputFormProduct } from './InputFormProduct/InputFormProduct';
//import 'bootstrap-fileinput';
import { Editor } from '@tinymce/tinymce-react';
import { ClearButton, Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { FormBook } from './FormBook/FormBook';
import { FormItem } from './FormItem/FormItem';
import { BsSearch } from 'react-icons/bs';
//import 'bootstrap-fileinput/css/fileinput.min.css';

export const AddNewProduct = () => {
  const [isCategoryLevelTwo, SetCategoryLeveTwo] = useState(false);
  const [isCategoryLevelThree, SetCategoryLeveThree] = useState(false);
  const [isBook, SetBook] = useState(false);
  const [isItem, SetItem] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState('');
  const editorRef = useRef(null);
  const handleRadio = (e: any) => {
    if (e.currentTarget.value === 'book') {
      SetBook(true);
      SetItem(false);
    } else {
      SetBook(false);
      SetItem(true);
    }
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e.currentTarget.book);
  };
  const handleInputChange = (input: any, e: any) => {
    console.log('value', input);
  };

  const handleChange = (selectedOptions: any) => {
    console.log(selectedOptions);
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
  const list = [
    {
      label: 'Alabama',
      population: 4780127,
      capital: 'Montgomery',
      region: 'South',
    },
    { label: 'Alaska', population: 710249, capital: 'Juneau', region: 'West' },
    { label: 'Arizona', population: 6392307, capital: 'Phoenix', region: 'West' },
    {
      label: 'Arkansas',
      population: 2915958,
      capital: 'Little Rock',
      region: 'South',
    },
    {
      label: 'California',
      population: 37254503,
      capital: 'Sacramento',
      region: 'West',
    },
    { label: 'Colorado', population: 5029324, capital: 'Denver', region: 'West' },
    {
      label: 'Connecticut',
      population: 3574118,
      capital: 'Hartford',
      region: 'Northeast',
    },
    { label: 'Delaware', population: 897936, capital: 'Dover', region: 'South' },
    {
      label: 'Florida',
      population: 18804623,
      capital: 'Tallahassee',
      region: 'South',
    },
    {
      label: 'Georgia',
      population: 9688681,
      capital: 'Atlanta',
      region: 'South',
    },
    { label: 'Hawaii', population: 1360301, capital: 'Honolulu', region: 'West' },
    { label: 'Idaho', population: 1567652, capital: 'Boise', region: 'West' },
    {
      label: 'Illinois',
      population: 12831549,
      capital: 'Springfield',
      region: 'Midwest',
    },
    {
      label: 'Indiana',
      population: 6484229,
      capital: 'Indianapolis',
      region: 'Midwest',
    },
    {
      label: 'Iowa',
      population: 3046869,
      capital: 'Des Moines',
      region: 'Midwest',
    },
    {
      label: 'Kansas',
      population: 2853132,
      capital: 'Topeka',
      region: 'Midwest',
    },
    {
      label: 'Kentucky',
      population: 4339349,
      capital: 'Frankfort',
      region: 'South',
    },
    {
      label: 'Louisiana',
      population: 4533479,
      capital: 'Baton Rouge',
      region: 'South',
    },
    {
      label: 'Maine',
      population: 1328361,
      capital: 'Augusta',
      region: 'Northeast',
    },
    {
      label: 'Maryland',
      population: 5773785,
      capital: 'Annapolis',
      region: 'South',
    },
    {
      label: 'Massachusetts',
      population: 6547817,
      capital: 'Boston',
      region: 'Northeast',
    },
    {
      label: 'Michigan',
      population: 9884129,
      capital: 'Lansing',
      region: 'Midwest',
    },
    {
      label: 'Minnesota',
      population: 5303925,
      capital: 'Saint Paul',
      region: 'Midwest',
    },
    {
      label: 'Mississippi',
      population: 2968103,
      capital: 'Jackson',
      region: 'South',
    },
    {
      label: 'Missouri',
      population: 5988927,
      capital: 'Jefferson City',
      region: 'Midwest',
    },
  ];
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <div className="add-new-product">
          <div className="add-new-product__content">
            <div className="add-new-product__title">
              <h1>Thông tin cơ bản</h1>
            </div>
            <InputFormProduct
              title="Tên sản phẩm"
              type="text"
              placeholder="Nhập tên sản phẩm (Tối đa 100 ký tự)"
              id="productname"
              maxLength={100}
            />
            <div className="add-new-product__item">Ảnh bìa (Chọn ảnh đại diện của sản phẩm)</div>
            <div className="add-new-product__input">
              <div className="add-new-product__input__image">
                {selectedFile && <img src={preview} />}
              </div>
              <div className="add-new-product__input__upload">
                <label htmlFor="image" >
                  <input type="file" onChange={onSelectFile} id="image" accept=".jpg,.png" />
                  <span>
                    <Button variant="outline-secondary" style={{ fontSize: '12px' }}>
                      Upload ảnh bìa
                    </Button>
                  </span>
                </label>
              </div>
            </div>
            <div className="add-new-product__item">Danh mục sản phẩm</div>
            <div className="add-new-product__category">
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
                    <div className="add-new-product__level">Danh mục sản phẩm cấp một</div>
                    <Typeahead
                      id="categorylevelone"
                      options={list}
                      placeholder="Chọn danh mục"
                      onInputChange={handleInputChange}
                      onChange={handleChange}
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
                    <div className={`add-new-product__level`}>Danh mục sản phẩm cấp hai</div>
                    <Typeahead
                      id="categoryleveltwo"
                      options={list}
                      placeholder="Chọn danh mục"
                      className={`${
                        isCategoryLevelTwo ? 'add-new-product__show' : 'add-new-product__hide'
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
                    <div className="add-new-product__level">Danh mục sản phẩm cấp ba</div>
                    <Typeahead
                      id="categorylevelthree"
                      options={list}
                      placeholder="Chọn danh mục"
                      className={`${
                        isCategoryLevelThree ? 'add-new-product__show' : 'add-new-product__hide'
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
            <div className="add-new-product__item">Mô Tả sản phẩm</div>
            <div className="add-new-product__textarea">
              <Editor
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
              />
            </div>
            <div className="add-new-product__margin-10">
              <InputFormProduct
                title="Giá sản phẩm"
                type="number"
                placeholder="Nhập giá của sản phẩm theo VNĐ"
                id="productprice"
                maxLength={14}
              />
            </div>
            <div className="add-new-product__margin-10">
              <InputFormProduct
                title="Khối lượng sản phẩm"
                type="number"
                placeholder="Nhập khối lượng của sản phẩm theo gram SAU KHI ĐÓNG GÓI"
                id="productweight"
              />
            </div>
            <div className="add-new-product__margin-10">
              <InputFormProduct
                title="Kho hàng"
                type="number"
                placeholder="Nhập số lượng hàng trong kho của bạn"
                id="productquantity"
              />
            </div>
            <div className="add-new-product__margin-10">
              <div className="add-new-product__item">
                Kích thước đóng gói (Phí vận chuyển thực tế sẽ thay đổi nếu bạn nhập sai kích thước)
              </div>
              <div className="add-new-product__package">
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
                      <div className="add-new-product__level">
                        <InputFormProduct
                          title="Chiều rộng"
                          type="number"
                          placeholder="cm"
                          id="productwidth"
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
                      <div className="add-new-product__level">
                        <InputFormProduct
                          title="Chiều dài"
                          type="number"
                          placeholder="cm"
                          id="productlength"
                        />
                      </div>
                    </Col>
                    <Col lg={4} md={4}>
                      <div className="add-new-product__level">
                        <InputFormProduct
                          title="Chiều cao"
                          type="number"
                          placeholder="cm"
                          id="productheight"
                        />
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>

            <div className="add-new-product__margin-10">
              <span className="add-new-product__title2">Sản phẩm thuộc loại</span>
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

        <div className={`${isBook ? 'add-new-product__show' : 'add-new-product__hide'}`}>
          <div className="add-new-product">
            <div className="add-new-product__content">
              <div className="add-new-product__title">
                <h1>Thông tin chi tiết</h1>
              </div>
              <FormBook></FormBook>
              <div className="info__btn">
                <Button variant="secondary" style={{ marginRight: '10px' }}>
                  Lưu & Ẩn
                </Button>
                <Button variant="danger">Lưu & Hiển thị</Button>
              </div>
            </div>
          </div>
        </div>
        <div className={`${isItem ? 'add-new-product__show' : 'add-new-product__hide'}`}>
          <div className="add-new-product">
            <div className="add-new-product__content">
              <div className="add-new-product__title">
                <h1>Thông tin chi tiết</h1>
              </div>
              <FormItem></FormItem>
              <div className="info__btn">
                <Button variant="secondary" style={{ marginRight: '10px' }}>
                  Lưu & Ẩn
                </Button>
                <Button variant="danger">Lưu & Hiển thị</Button>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};
