import React, { useEffect, useState, useRef, useReducer } from 'react';
import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import './EditProduct.scss';
import { Editor } from '@tinymce/tinymce-react';
import { ClearButton, Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { InputFormProduct } from '../AddNewProduct/InputFormProduct/InputFormProduct';
import { FormBook } from '../AddNewProduct/FormBook/FormBook';
import { FormItem } from '../AddNewProduct/FormItem/FormItem';
import { BsChevronLeft, BsChevronRight, BsPlusCircleDotted, BsSearch } from 'react-icons/bs';
import {
  doAddNewProduct,
  doGetCategoryProductByIDParent,
  doGetProductByIDProduct,
  doPatchProduct,
  getCategoryProductByIDParentLevelOne,
  getCategoryProductByIDParentLevelTwo,
  getCategoryProductByLevelZero,
  getDetailCategoryByID,
  RootState,
  useAppDispatch,
} from '../../../redux';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { useHistory, useParams } from 'react-router-dom';
import tinymce from 'tinymce';
//import 'bootstrap-fileinput/css/fileinput.min.css';
interface IImage {
  order: number;
  image: string;
  preview: string;
  type?: string;
}
interface ICategory {
  category: [
    {
      IDCategory: number;
      IDParent: number;
      Name: string;
      Current: boolean;
    },
  ];
}

const dataFormProductReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ID_PRODUCT':
      return {
        ...state,
        id_product: action.payload,
      };
    case 'ID_USER':
      return {
        ...state,
        id_user: action.payload,
      };
    case 'PRODUCT_NAME':
      return {
        ...state,
        product_name: action.payload,
      };
    case 'ADD_IMAGE':
      return {
        ...state,
        image: [...state.image, action.payload],
      };
    case 'UPDATE_IMAGE':
      return {
        ...state,
        image: [...action.payload],
      };
    case 'INIT_CATEGORY':
      return {
        ...state,
        category: [...state.category, { category: action.payload }],
      };
    case 'ADD_CATEGORY':
      return {
        ...state,
        category: [...state.category, { category: action.payload.listCategory }],
        current_category: [...state.current_category, action.payload.j],
      };
    case 'ADD_CURRENT_CATEGORY':
      return {
        ...state,
        current_category: [...state.current_category.slice(0, action.payload.i), action.payload.j],
      };
    case 'UPDATE_CATEGORY':
      return {
        ...state,
        category: [
          ...state.category.slice(0, action.payload.i + 1),
          { category: action.payload.listCategory },
        ],
        current_category: [...state.current_category.slice(0, action.payload.i), action.payload.j],
      };
    case 'PRODUCT_PRICE':
      return {
        ...state,
        product_price: action.payload,
      };
    case 'PRODUCT_DISCOUNT':
      return {
        ...state,
        product_discount: action.payload,
      };
    case 'PRODUCT_WEIGHT':
      return {
        ...state,
        product_weight: action.payload,
      };
    case 'PRODUCT_WIDTH':
      return {
        ...state,
        product_width: action.payload,
      };
    case 'PRODUCT_LENGTH':
      return {
        ...state,
        product_length: action.payload,
      };
    case 'PRODUCT_HEIGHT':
      return {
        ...state,
        product_height: action.payload,
      };
    case 'PRODUCT_QUANTITY':
      return {
        ...state,
        product_quantity: action.payload,
      };
    case 'DESCRIPTION':
      return {
        ...state,
        description: action.payload,
      };
    case 'TYPE_PRODUCT':
      return {
        ...state,
        type_product: action.payload,
      };
    case 'PRODUCT_AUTHOR':
      return {
        ...state,
        product_author: action.payload,
      };
    case 'PRODUCT_SUPPLIER_BOOK':
      return {
        ...state,
        product_supplier_book: action.payload,
      };
    case 'PRODUCT_PUBLISHING_COMPANY':
      return {
        ...state,
        product_publishing_company: action.payload,
      };
    case 'PRODUCT_COVER_FORM':
      return {
        ...state,
        product_cover_form: action.payload,
      };
    case 'PRODUCT_TRANSLATOR':
      return {
        ...state,
        product_translator: action.payload,
      };

    case 'PRODUCT_PUBLISHING_YEAR':
      return {
        ...state,
        product_publishing_year: action.payload,
      };
    case 'PRODUCT_NUMBER_OF_PAGE':
      return {
        ...state,
        product_number_of_page: action.payload,
      };
    case 'PRODUCT_ORIGIN':
      return {
        ...state,
        product_origin: action.payload,
      };
    case 'PRODUCT_SUPPLIER_ITEM':
      return {
        ...state,
        product_supplier_item: action.payload,
      };
    case 'PRODUCT_TRADEMARK':
      return {
        ...state,
        product_trademark: action.payload,
      };
    case 'PRODUCT_PROCESSING_PLACE':
      return {
        ...state,
        product_processing_place: action.payload,
      };
    case 'PRODUCT_COLOR':
      return {
        ...state,
        product_color: action.payload,
      };
    case 'PRODUCT_MATERIAL':
      return {
        ...state,
        product_material: action.payload,
      };
    case 'STATUS':
      return {
        ...state,
        status: action.payload,
      };
    case 'PRODUCT':
      return {
        ...state,
        product: action.payload,
      };
    default:
      throw new Error();
  }
};
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export const EditProduct = () => {
  const { id }: { id: string } = useParams();
  const dispatch = useAppDispatch();
  const history = useHistory();
  const [category, SetCategory] = useState<ICategory[]>([]);
  //const [idCategory, SetIdCategory] = useState(0);
  const [status, SetStatus] = useState(0);
  const [isBook, SetBook] = useState(false);
  const [isItem, SetItem] = useState(false);
  const [contentEditor, setContentEditor] = useState();
  const [isSpinnerOne, setIsSpinnerOne] = useState(false);
  const [isSpinnerTwo, setIsSpinnerTwo] = useState(false);
  const [listCity, setListCity] = useState([]);
  const [codeCity, setCodeCity] = useState(1);
  const [listDistrict, setListDistrict] = useState([]);
  const [codeDistrict, setCodeDistrict] = useState(1);
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [left, setLeft] = useState(0);
  const [width, setWidth] = useState(990);
  const [displayLeft, setDisplayLeft] = useState(false);
  const [displayRight, setDisplayRight] = useState(false);
  const [listImage, setListImage] = useState<IImage[]>([
    { order: 0, image: '', preview: '', type: 'Ảnh bìa' },
    { order: 1, image: '', preview: '', type: 'Ảnh phụ 1' },
  ]);
  const [state, dispatchDataForm] = useReducer(dataFormProductReducer, {
    id_product: '',
    id_user: 0,
    product_name: '',
    image: [{ order: 0, image: '', preview: '', type: 'Ảnh bìa' }],
    current_category: [],
    category: [],
    product_price: '',
    product_discount: '',
    product_weight: '',
    product_width: '',
    product_length: '',
    product_height: '',
    product_quantity: '',
    description: '',
    type_product: '',
    product_author: '',
    product_supplier_book: '',
    product_publishing_company: '',
    product_cover_form: '',
    product_translator: '',
    product_publishing_year: '',
    product_number_of_page: '',
    product_origin: '',
    product_supplier_item: '',
    product_trademark: '',
    product_processing_place: '',
    product_color: '',
    product_material: '',
    status: '',
  });
  const { account } = useSelector((state: RootState) => state.userSlice);
  const editorRef = useRef(null);
  useEffect(() => {
    const fetchApi = async (requestUrl: string, handle: any) => {
      const response = await fetch(requestUrl, { mode: 'cors' });
      const responeseJSON = await response.json();

      handle(responeseJSON);
    };

    fetchApi('https://provinces.open-api.vn/api/p', setListCity);
  }, []);
  const fectchDataProduct = async () => {
    const product = (await dispatch(doGetProductByIDProduct({ IDProduct: id }))).payload;
    //setProduct(product);
    dispatchDataForm({ type: 'ID_PRODUCT', payload: product.data[0].IDProduct });
    dispatchDataForm({ type: 'ID_USER', payload: product.data[0].IDUser });
    // dispatchDataForm({ type: 'ID_CATEGORY', payload: product.data[0].IDCategory });
    dispatchDataForm({ type: 'PRODUCT_NAME', payload: product.data[0].NameProduct });
    //dispatchDataForm({ type: 'COVER_IMAGE', payload: product.data[0].Image });

    dispatchDataForm({ type: 'PRODUCT_PRICE', payload: product.data[0].Price });
    dispatchDataForm({ type: 'PRODUCT_DISCOUNT', payload: product.data[0].Discount });
    dispatchDataForm({ type: 'PRODUCT_WEIGHT', payload: product.data[0].Weight });
    const size = product.data[0].PackagingSize.split('x');
    dispatchDataForm({ type: 'PRODUCT_WIDTH', payload: size[0] });
    dispatchDataForm({ type: 'PRODUCT_LENGTH', payload: size[1] });
    dispatchDataForm({ type: 'PRODUCT_HEIGHT', payload: size[2] });
    dispatchDataForm({ type: 'PRODUCT_QUANTITY', payload: product.data[0].Quantity });
    dispatchDataForm({ type: 'DESCRIPTION', payload: product.data[0].Description });
    dispatchDataForm({ type: 'TYPE_PRODUCT', payload: product.data[0].TypeProduct });
    dispatchDataForm({ type: 'PRODUCT_AUTHOR', payload: product.data[0].Author });
    dispatchDataForm({ type: 'PRODUCT_SUPPLIER_BOOK', payload: product.data[0].Supplier });
    dispatchDataForm({
      type: 'PRODUCT_PUBLISHING_COMPANY',
      payload: product.data[0].PublishingCompany,
    });
    dispatchDataForm({ type: 'PRODUCT_COVER_FORM', payload: product.data[0].CoverForm });
    dispatchDataForm({ type: 'PRODUCT_TRANSLATOR', payload: product.data[0].Translator });
    dispatchDataForm({
      type: 'PRODUCT_PUBLISHING_YEAR',
      payload: product.data[0].PublishingYear,
    });
    dispatchDataForm({ type: 'PRODUCT_NUMBER_OF_PAGE', payload: product.data[0].NumberOfPage });
    dispatchDataForm({ type: 'PRODUCT_ORIGIN', payload: product.data[0].Origin });
    dispatchDataForm({ type: 'PRODUCT_SUPPLIER_ITEM', payload: product.data[0].Supplier });
    dispatchDataForm({ type: 'PRODUCT_TRADEMARK', payload: product.data[0].Trademark });
    dispatchDataForm({
      type: 'PRODUCT_PROCESSING_PLACE',
      payload: product.data[0].ProcessingPlace,
    });
    dispatchDataForm({ type: 'PRODUCT_COLOR', payload: product.data[0].Color });
    dispatchDataForm({ type: 'PRODUCT_MATERIAL', payload: product.data[0].Material });
    dispatchDataForm({ type: 'STATUS', payload: product.data[0].Status });
    dispatchDataForm({ type: 'PRODUCT', payload: product.data });
    setContentEditor(product.data[0].Description);
    if (product.data[0].TypeProduct === 'Book') {
      SetBook(true);
      SetItem(false);
    } else {
      SetBook(false);
      SetItem(true);
    }
    state.image[0].preview = `${product.Path}${product.data[0].Image}`;
    dispatchDataForm({ type: 'UPDATE_IMAGE', payload: state.image });
    if (product.data[0].SubImage != undefined) {
      for (let i = 0; i < product.data[0].SubImage.length; i++) {
        dispatchDataForm({
          type: 'ADD_IMAGE',
          payload: {
            order: i + 1,
            image: '',
            preview: `${product.Path}${product.data[0].SubImage[i].Image}`,
            type: `Ảnh phụ ${i + 1}`,
          },
        });
      }
    }
    setCity(product.data[0].City);
    setDistrict(product.data[0].Disctrict);
    const category = (
      await dispatch(getDetailCategoryByID({ IDCategory: product.data[0].IDCategory }))
    ).payload;
  };
  useEffect(() => {
    fectchDataProduct();
  }, []);
  useEffect(() => {
    const fetchApi = async (
      requestUrl: string,
      handle: any,
      handleCode: any,
      handleCity: any,
      handleDistrict: any,
    ) => {
      const response = await fetch(requestUrl, { mode: 'cors' });
      const responeseJSON = await response.json();

      handle(responeseJSON.districts);
      handleCode(responeseJSON.code);
      handleCity(responeseJSON.name);
      handleDistrict(responeseJSON.districts[0].name);
    };

    fetchApi(
      `https://provinces.open-api.vn/api/p/${codeCity}?depth=2`,
      setListDistrict,
      setCodeDistrict,
      setCity,
      setDistrict,
    );
  }, [codeCity]);
  const handleChangeCity = (e: any) => {
    const city = listCity.find((element) => element.name === e.target.value);
    setCodeCity(city.code);
    setCity(city.name);
  };
  useEffect(() => {
    const getCategoryLevelZero = async () => {
      const zero = (await dispatch(getCategoryProductByLevelZero({ level: 0 }))).payload;
      SetCategory([...category, { category: zero.data }]);
      dispatchDataForm({ type: 'INIT_CATEGORY', payload: zero.data });
    };
    getCategoryLevelZero();
  }, []);
  const handleClickRight = () => {
    setLeft(left - 20);
  };
  const handleClickLeft = () => {
    setLeft(left + 20);
  };
  useEffect(() => {
    const length = state.category.length;
    console.log(length);
    if (length > 3) {
      setWidth(990 + (length - 3) * 320);
      setDisplayRight(true);
    } else {
      setWidth(990);
      setDisplayRight(false);
    }
    if (left < 0) {
      setDisplayLeft(true);
    } else {
      setDisplayLeft(false);
    }
  }, [state.category.length, left]);
  const handleEditorChange = (content: any, editor: any) => {
    setContentEditor(content);
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (status === 0) {
      setIsSpinnerOne(true);
    } else {
      setIsSpinnerTwo(true);
    }
    const length = state.current_category.length - 1;
    const idCategory =
      state.category[length] != undefined
        ? state.category[length].category[state.current_category[length]].IDCategory
        : 0;
    let typeProduct;
    if (isBook === true) {
      typeProduct = {
        type_product: 'Book',
        product_author: e.target.elements.product_author.value,
        product_supplier: e.target.elements.product_supplier_book.value,
        product_publishing_company: e.target.elements.product_publishing_company.value,
        product_cover_form: e.target.elements.product_cover_form.value,
        product_translator: e.target.elements.product_translator.value,
        product_publishing_year: e.target.elements.product_publishing_year.value,
        product_number_of_page: e.target.elements.product_number_of_page.value,
      };
    } else {
      typeProduct = {
        type_product: 'Item',
        product_origin: e.target.elements.product_origin.value,
        product_supplier: e.target.elements.product_supplier_item.value,
        product_trademark: e.target.elements.product_trademark.value,
        product_processing_place: e.target.elements.product_processing_place.value,
        product_color: e.target.elements.product_color.value,
        product_material: e.target.elements.product_material.value,
      };
    }
    const formData = {
      id_user: String(account.IDUser),
      id_category: String(idCategory),
      product_name: e.target.elements.product_name.value,
      image: state.image,
      city: city,
      district: district,
      product_price: e.target.elements.product_price.value,
      product_discount: e.target.elements.product_discount.value,
      product_weight: e.target.elements.product_weight.value,
      product_package_size:
        String(e.target.elements.product_width.value) +
        'x' +
        String(e.target.elements.product_length.value) +
        'x' +
        String(e.target.elements.product_height.value),
      product_quantity: e.target.elements.product_quantity.value,
      description: contentEditor,
      ...typeProduct,
      status: String(status),
    };
    const isSucccess = (await dispatch(doAddNewProduct(formData))).payload;
    setIsSpinnerOne(false);
    setIsSpinnerTwo(false);
    if (isSucccess.data === true) {
      Swal.fire({
        icon: 'success',
        title: 'Thêm sản phẩm thành công',
      });
      history.push({
        pathname: `/seller/product-management`,
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Thêm sản phẩm thất bại',
      });
    }
  };
  const handleClickAddImage = (i: number) => {
    dispatchDataForm({
      type: 'ADD_IMAGE',
      payload: { order: i, image: '', preview: '', type: `Ảnh phụ ${i}` },
    });
    setListImage([...listImage, { order: i, image: '', preview: '', type: `Ảnh phụ ${i}` }]);
    console.log('huhi');
    category.map((item, i) => {
      console.log(item, 'hi');
      item.category.map((item2: any, i2: any) => {
        console.log(item2.Name);
      });
    });
  };
  const onSelectFile = (e: any, i: number) => {
    console.log(e.target.files[0]);
    if (!e.target.files || e.target.files.length === 0) {
      // setSelectedFile(undefined);
      return;
    }
    // setSelectedFile(e.target.files[0]);
    const objectUrl = URL.createObjectURL(e.target.files[0]);
    const readerImage = new FileReader();
    readerImage.readAsDataURL(e.target.files[0]);
    readerImage.onloadend = () => {
      if (state.image.length > i) {
        state.image[i].image = String(readerImage.result);
        state.image[i].preview = objectUrl;
        dispatchDataForm({ type: 'UPDATE_IMAGE', payload: state.image });
      } else {
        dispatchDataForm({
          type: 'ADD_IMAGE',
          payload: { order: i, image: String(readerImage.result), preview: objectUrl },
        });
      }
    };
    return () => URL.revokeObjectURL(objectUrl);
  };
  const handleSelectedCategory = async (id: number, i: number, j: number) => {
    const listCategory = (await dispatch(doGetCategoryProductByIDParent({ idparent: id }))).payload;
    console.log(typeof listCategory);
    if (state.category.length === i + 1) {
      if (typeof listCategory === 'undefined') {
        dispatchDataForm({ type: 'ADD_CURRENT_CATEGORY', payload: { i: i, j: j } });
      } else {
        dispatchDataForm({
          type: 'ADD_CATEGORY',
          payload: { j: j, listCategory: listCategory.data },
        });
      }
    } else {
      const temp = category.slice(0, i + 1);
      console.log(temp);
      dispatchDataForm({
        type: 'UPDATE_CATEGORY',
        payload: { i: i, j: j, listCategory: listCategory.data },
      });
      SetCategory([...category.slice(0, i + 1), { category: listCategory.data }]);
    }
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
              value={state.product_name}
              onInput={(e: any) =>
                dispatchDataForm({ type: 'PRODUCT_NAME', payload: e.target.value })
              }
            />
            <div className="edit-product__item">Hình ảnh sản phẩm</div>
            <div className="edit-product__image">
              {state.image &&
                state.image.map((item: any, index: number) => {
                  return (
                    <div className="edit-product__input" key={index}>
                      <div className="edit-product__input__image edit-product__input__image--100">
                        {item.preview && <img src={item.preview} />}
                      </div>
                      <div className="edit-product__input__upload">
                        <label className="edit-product__input__upload__label" htmlFor="image">
                          <input
                            type="file"
                            onChange={(event: any) => onSelectFile(event, index)}
                            id="image_one"
                            name="image_one"
                            accept=".jpg,.png"
                            required={item.type == 'Ảnh bìa'}
                          />
                          <span>
                            <Button variant="outline-secondary" style={{ fontSize: '12px' }}>
                              {item.type}
                            </Button>
                          </span>
                        </label>
                      </div>
                    </div>
                  );
                })}
              <div className="edit-product__image__add">
                <button
                  name="button"
                  type="button"
                  onClick={() => handleClickAddImage(listImage.length)}
                >
                  <BsPlusCircleDotted size={35} />
                </button>
              </div>
            </div>
            <div className="edit-product__item">Danh mục sản phẩm</div>
            <div className="edit-product__category">
              <div className="edit-product">
                {displayLeft && (
                  <div className="edit-product__btn-wrap edit-product__btn-wrap__left-right">
                    <button
                      className="edit-product__btn-left edit-product__btn-left--show"
                      name="button"
                      type="button"
                      onClick={handleClickLeft}
                    >
                      <BsChevronLeft />
                    </button>
                  </div>
                )}
                {displayRight && (
                  <div
                    className="edit-product__btn-wrap edit-product__btn-wrap__left-right"
                    style={{ right: 0 }}
                  >
                    <button
                      className="edit-product__btn-right edit-product__btn-right--show"
                      name="button"
                      type="button"
                      onClick={handleClickRight}
                    >
                      <BsChevronRight />
                    </button>
                  </div>
                )}
                <div
                  className="edit-product__list"
                  style={{ left: `${left}%`, width: `${width}px` }}
                >
                  {state.category &&
                    state.category.map((item: any, i: any) => {
                      return (
                        <ul className="edit-product__item-2">
                          {item.category.map((item2: any, i2: any) => {
                            return (
                              <li
                                key={i2}
                                onClick={() => handleSelectedCategory(item2.IDCategory, i, i2)}
                              >
                                <p
                                  className={
                                    state.current_category[i] === i2 ? 'edit-product__current' : ''
                                  }
                                >
                                  {item2.Name}
                                </p>
                                <div className="edit-product__icon">
                                  <i>
                                    <BsChevronRight />
                                  </i>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      );
                    })}
                </div>
              </div>
            </div>
            <div className="edit-product__item">Mô Tả sản phẩm</div>
            <div className="edit-product__textarea">
              <Editor
                tagName="description"
                onInit={(evt, editor) => (editorRef.current = editor)}
                init={{
                  //selector: 'textarea',
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
            <Form.Group as={Row} className="mb-3 mt-10" controlId="formCity" key="1">
              <Form.Label column sm={2}>
                Tỉnh/Thành phố
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  as="select"
                  placeholder="City"
                  size="lg"
                  value={city}
                  onChange={(e: any) => handleChangeCity(e)}
                >
                  {listCity.map((items: any, index: any) => {
                    return (
                      <option key={index} value={items.name}>
                        {items.name}
                      </option>
                    );
                  })}
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 mt-10" controlId="formDistrict" key="2">
              <Form.Label column sm={2}>
                Quận/Huyện
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  as="select"
                  placeholder="Email"
                  size="lg"
                  value={district}
                  onChange={(e: any) => setDistrict(e.target.value)}
                >
                  {listDistrict.map((items: any, index: any) => {
                    return (
                      <option key={index} value={items.name}>
                        {items.name}
                      </option>
                    );
                  })}
                </Form.Control>
              </Col>
            </Form.Group>
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
                value={state.product_price}
                onInput={(e: any) =>
                  dispatchDataForm({ type: 'PRODUCT_PRICE', payload: e.target.value })
                }
              />
            </div>
            <div className="edit-product__margin-10">
              <InputFormProduct
                title="Khuyến mãi"
                type="number"
                placeholder="Nhập khuyến mãi sản phẩm theo %"
                id="product_discount"
                name="product_discount"
                maxLength={14}
                min="0"
                value={state.product_discount}
                onInput={(e: any) =>
                  dispatchDataForm({ type: 'PRODUCT_DISCOUNT', payload: e.target.value })
                }
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
                value={state.product_weight}
                onInput={(e: any) =>
                  dispatchDataForm({ type: 'PRODUCT_WEIGHT', payload: e.target.value })
                }
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
                value={state.product_quantity}
                onInput={(e: any) =>
                  dispatchDataForm({ type: 'PRODUCT_QUANTITY', payload: e.target.value })
                }
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
                          value={state.product_width}
                          onInput={(e: any) =>
                            dispatchDataForm({ type: 'PRODUCT_WIDTH', payload: e.target.value })
                          }
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
                          value={state.product_length}
                          onInput={(e: any) =>
                            dispatchDataForm({ type: 'PRODUCT_LENGTH', payload: e.target.value })
                          }
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
                          value={state.product_height}
                          onInput={(e: any) =>
                            dispatchDataForm({ type: 'PRODUCT_HEIGHT', payload: e.target.value })
                          }
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
                {isBook && (
                  <Form.Check
                    inline
                    label="Sách"
                    name="group1"
                    type="radio"
                    id="book"
                    value="book"
                    checked={isBook}
                  />
                )}
                {isItem && (
                  <Form.Check
                    inline
                    label="Sản phẩm khác"
                    name="group1"
                    type="radio"
                    id="item"
                    value="item"
                    checked={isItem}
                  />
                )}
              </span>
            </div>
          </div>
        </div>

        <div className={`${isBook || isItem ? 'edit-product__show' : 'edit-product__hide'}`}>
          <div className="edit-product">
            <div className="edit-product__content">
              <div className="edit-product__title">
                <h1>Thông tin chi tiết</h1>
              </div>
              {isBook ? (
                <FormBook
                  required={isBook}
                  valueAuthor={state.product_author}
                  onInputAuthor={(e: any) =>
                    dispatchDataForm({ type: 'PRODUCT_AUTHOR', payload: e.target.value })
                  }
                  valueSupplierBook={state.product_supplier_book}
                  onInputSupplierBook={(e: any) =>
                    dispatchDataForm({ type: 'PRODUCT_SUPPLIER_BOOK', payload: e.target.value })
                  }
                  valuePublishingCompany={state.product_publishing_company}
                  onInputPublishingCompany={(e: any) =>
                    dispatchDataForm({
                      type: 'PRODUCT_PUBLISHING_COMPANY',
                      payload: e.target.value,
                    })
                  }
                  valueCoverForm={state.product_cover_form}
                  onInputCoverForm={(e: any) =>
                    dispatchDataForm({ type: 'PRODUCT_COVER_FORM', payload: e.target.value })
                  }
                  valueTranslator={state.product_translator}
                  onInputTranslator={(e: any) =>
                    dispatchDataForm({ type: 'PRODUCT_TRANSLATOR', payload: e.target.value })
                  }
                  valuePublishingYear={state.product_publishing_year}
                  onInputPublishingYear={(e: any) =>
                    dispatchDataForm({ type: 'PRODUCT_PUBLISHING_YEAR', payload: e.target.value })
                  }
                  valueNumberOfPage={state.product_number_of_page}
                  onInputNumberOfPage={(e: any) =>
                    dispatchDataForm({ type: 'PRODUCT_NUMBER_OF_PAGE', payload: e.target.value })
                  }
                ></FormBook>
              ) : (
                ''
              )}
              {isItem ? (
                <FormItem
                  required={isItem}
                  valueOrigin={state.product_origin}
                  onInputOrigin={(e: any) =>
                    dispatchDataForm({ type: 'PRODUCT_ORIGIN', payload: e.target.value })
                  }
                  valueSupplierItem={state.product_supplier_item}
                  onInputSupplierItem={(e: any) =>
                    dispatchDataForm({ type: 'PRODUCT_SUPPLIER_ITEM', payload: e.target.value })
                  }
                  valueTrademark={state.product_trademark}
                  onInputTrademark={(e: any) =>
                    dispatchDataForm({ type: 'PRODUCT_TRADEMARK', payload: e.target.value })
                  }
                  valueProcessingPlace={state.product_processing_place}
                  onInputProcessingPlace={(e: any) =>
                    dispatchDataForm({ type: 'PRODUCT_PROCESSING_PLACE', payload: e.target.value })
                  }
                  valueColor={state.product_color}
                  onInputColor={(e: any) =>
                    dispatchDataForm({ type: 'PRODUCT_COLOR', payload: e.target.value })
                  }
                  valueMaterial={state.product_material}
                  onInputMaterial={(e: any) =>
                    dispatchDataForm({ type: 'PRODUCT_MATERIAL', payload: e.target.value })
                  }
                ></FormItem>
              ) : (
                ''
              )}
              <div className="edit-product__btn">
                {isSpinnerOne === false ? (
                  <Button variant="secondary" style={{ marginRight: '10px' }} type="submit">
                    Lưu & Ẩn
                  </Button>
                ) : (
                  <Button variant="primary" disabled>
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    Lưu & Ẩn
                  </Button>
                )}
                {isSpinnerTwo === false ? (
                  <Button variant="danger" type="submit" onClick={() => SetStatus(1)}>
                    Lưu & Hiển thị
                  </Button>
                ) : (
                  <Button variant="primary" disabled>
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    Lưu & Hiển thị
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};
