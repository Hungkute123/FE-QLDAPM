import React, { useEffect, useState, useRef, useReducer } from 'react';
import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import './EditProduct.scss';
//import 'bootstrap-fileinput';
import { Editor } from '@tinymce/tinymce-react';
import { ClearButton, Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { InputFormProduct } from '../AddNewProduct/InputFormProduct/InputFormProduct';
import { FormBook } from '../AddNewProduct/FormBook/FormBook';
import { FormItem } from '../AddNewProduct/FormItem/FormItem';
import { BsSearch } from 'react-icons/bs';
import {
  doAddNewProduct,
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
    case 'ID_CATEGORY_LEVEL_ONE':
      return {
        ...state,
        id_category_level_one: action.payload,
      };
    case 'ID_CATEGORY_LEVEL_TWO':
      return {
        ...state,
        id_category_level_two: action.payload,
      };
    case 'ID_CATEGORY_LEVEL_THREE':
      return {
        ...state,
        id_category_level_three: action.payload,
      };
    case 'PRODUCT_NAME':
      return {
        ...state,
        product_name: action.payload,
      };
    case 'COVER_IMAGE':
      return {
        ...state,
        cover_image: action.payload,
      };
    case 'IMAGE_ONE':
      return {
        ...state,
        image_one: action.payload,
      };
    case 'IMAGE_TWO':
      return {
        ...state,
        image_two: action.payload,
      };
    case 'IMAGE_THREE':
      return {
        ...state,
        image_three: action.payload,
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
export const EditProduct = () => {
  const { id }: { id: string } = useParams();
  const dispatch = useAppDispatch();
  const history = useHistory();
  const [categoryLevelOne, SetCategoryLeveOne] = useState([]);
  const [categoryLevelTwo, SetCategoryLeveTwo] = useState([]);
  const [categoryLevelThree, SetCategoryLeveThree] = useState([]);
  const [idCategory, SetIdCategory] = useState(0);
  const [status, SetStatus] = useState(0);
  const [isCategoryLevelTwo, SetIsCategoryLeveTwo] = useState(false);
  const [isCategoryLevelThree, SetIsCategoryLeveThree] = useState(false);
  const [isBook, SetBook] = useState(false);
  const [isItem, SetItem] = useState(false);
  const [preview, setPreview] = useState('');
  const [selectedFile, setSelectedFile] = useState();
  const [previewOne, setPreviewOne] = useState('');
  const [selectedFileOne, setSelectedFileOne] = useState();
  const [previewTwo, setPreviewTwo] = useState('');
  const [selectedFileTwo, setSelectedFileTwo] = useState();
  const [previewThree, setPreviewThree] = useState('');
  const [selectedFileThree, setSelectedFileThree] = useState();
  const [contentEditor, setContentEditor] = useState();
  const [coverImage, setCoverImage] = useState('');
  const [imageOne, setImageOne] = useState('');
  const [imageTwo, setImageTwo] = useState('');
  const [imageThree, setImageThree] = useState('');
  const [isSpinnerOne, setIsSpinnerOne] = useState(false);
  const [isSpinnerTwo, setIsSpinnerTwo] = useState(false);
  const [state, dispatchDataForm] = useReducer(dataFormProductReducer, {
    id_product: '',
    id_user: '',
    id_category_level_one: [],
    id_category_level_two: [],
    id_category_level_three: [],
    product_name: '',
    cover_image: false,
    image_one: false,
    image_two: false,
    image_three: false,
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
    product: [],
  });
  const { account } = useSelector((state: RootState) => state.userSlice);
  const editorRef = useRef(null);
  const fectchDataProduct = async () => {
    const product = (await dispatch(doGetProductByIDProduct({ IDProduct: id }))).payload;
    //setProduct(product);
    dispatchDataForm({ type: 'ID_PRODUCT', payload: product.data[0].IDProduct });
    dispatchDataForm({ type: 'ID_USER', payload: product.data[0].IDUser });
    // dispatchDataForm({ type: 'ID_CATEGORY', payload: product.data[0].IDCategory });
    dispatchDataForm({ type: 'PRODUCT_NAME', payload: product.data[0].NameProduct });
    dispatchDataForm({ type: 'COVER_IMAGE', payload: product.data[0].Image });
    dispatchDataForm({ type: 'IMAGE_ONE', payload: product.data[0].SubImageOne });
    dispatchDataForm({ type: 'IMAGE_TWO', payload: product.data[0].SubImageTwo });
    dispatchDataForm({ type: 'IMAGE_THREE', payload: product.data[0].SubImageThree });
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
    setPreview(product.Path + product.data[0].Image);
    setPreviewOne(product.data[0].SubImageOne != null ? product.Path + product.data[0].SubImageOne : '');
    setPreviewTwo(product.data[0].SubImageTwo != null ? product.Path + product.data[0].SubImageTwo : '');
    setPreviewThree(product.data[0].SubImageThree != null ? product.Path + product.data[0].SubImageThree : '');
    if (product.data[0].TypeProduct === 'Book') {
      SetBook(true);
      SetItem(false);
    } else {
      SetBook(false);
      SetItem(true);
    }
    const category = (
      await dispatch(getDetailCategoryByID({ IDCategory: product.data[0].IDCategory }))
    ).payload;
    SetIdCategory(category.data[0].IDCategory);
    let levelOne = [];
    let levelTwo = [];
    let levelThree = [];
    if (category.data.length === 3) {
      SetIsCategoryLeveThree(true);
      getCategoryLevelTwo(category.data[0].IDParent);
      levelThree.push(category.data[0])
      dispatchDataForm({ type: 'ID_CATEGORY_LEVEL_THREE', payload: levelThree });
      SetIsCategoryLeveTwo(true);
      getCategoryLevelOne(category.data[1].IDParent);
      levelTwo.push(category.data[1])
      dispatchDataForm({ type: 'ID_CATEGORY_LEVEL_TWO', payload: levelTwo });
      levelOne.push(category.data[2])
      dispatchDataForm({ type: 'ID_CATEGORY_LEVEL_ONE', payload: levelOne });
    }
    if (category.data.length === 2) {
      SetIsCategoryLeveTwo(true);
      getCategoryLevelOne(category.data[0].IDParent);
      levelTwo.push(category.data[0])
      dispatchDataForm({ type: 'ID_CATEGORY_LEVEL_TWO', payload: levelTwo });
      levelOne.push(category.data[1])
      dispatchDataForm({ type: 'ID_CATEGORY_LEVEL_ONE', payload: levelOne });
    }
  };
  useEffect(() => {
    fectchDataProduct();
  }, []);
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
    if (status === 0) {
      setIsSpinnerOne(true);
    } else {
      setIsSpinnerTwo(true);
    }
    let typeProduct;
    if (isBook === true) {
      typeProduct = {
        type_product: 'Book',
        id_book: state.product[0].IDBook,
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
        id_item: state.product[0].IDItem,
        product_origin: e.target.elements.product_origin.value,
        product_supplier: e.target.elements.product_supplier_item.value,
        product_trademark: e.target.elements.product_trademark.value,
        product_processing_place: e.target.elements.product_processing_place.value,
        product_color: e.target.elements.product_color.value,
        product_material: e.target.elements.product_material.value,
      };
    }
    const formData = {
      id_product: state.id_product,
      id_user: String(account.IDUser),
      id_category: String(idCategory),
      product_name: e.target.elements.product_name.value,
      cover_image: coverImage !== '' ? coverImage : state.cover_image,
      image_one: imageOne !== '' ? imageOne : state.image_one,
      image_two: imageTwo !== '' ? imageTwo : state.image_two,
      image_three: imageThree !== '' ? imageThree : state.image_three,
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
      product_view: state.product[0].View,
      product_votes: state.product[0].Votes,
      product_sold: state.product[0].sold,
      product_rating: state.product[0].rating,
      status: String(status),
    };
    const isSucccess = (await dispatch(doPatchProduct(formData))).payload;
    setIsSpinnerOne(false);
    setIsSpinnerTwo(false);
    if (isSucccess.data === true) {
      Swal.fire({
        icon: 'success',
        title: 'Chỉnh sửa sản phẩm thành công',
      });
      history.push({
        pathname: `/seller/product-management`,
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Chỉnh sửa sản phẩm thất bại',
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
      dispatchDataForm({ type: 'ID_CATEGORY_LEVEL_ONE', payload: selectedOptions });
    } else {
      SetCategoryLeveTwo([]);
      SetCategoryLeveThree([]);
      SetIsCategoryLeveTwo(false);
      SetIsCategoryLeveThree(false);
      dispatchDataForm({ type: 'ID_CATEGORY_LEVEL_ONE', payload: '' });
      dispatchDataForm({ type: 'ID_CATEGORY_LEVEL_TWO', payload: '' });
      dispatchDataForm({ type: 'ID_CATEGORY_LEVEL_THREE', payload: '' });
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
      dispatchDataForm({ type: 'ID_CATEGORY_LEVEL_TWO', payload: selectedOptions });
    } else {
      SetCategoryLeveThree([]);
      SetIsCategoryLeveThree(false);
      dispatchDataForm({ type: 'ID_CATEGORY_LEVEL_THREE', payload: '' });
    }
  };
  const handleChangeCategoryThree = (selectedOptions: any) => {
    if (selectedOptions.length != 0) {
      SetIdCategory(selectedOptions[0].IDCategory);
    } else {
      
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
    const readerCoverImage = new FileReader();
    readerCoverImage.readAsDataURL(selectedFile);
    readerCoverImage.onloadend = () => {
      setCoverImage(String(readerCoverImage.result));
    };
    dispatchDataForm({ type: 'COVER_IMAGE', payload: true });
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
    const readerImageOne = new FileReader();
    readerImageOne.readAsDataURL(selectedFileOne);
    readerImageOne.onloadend = () => {
      setImageOne(String(readerImageOne.result));
    };
    dispatchDataForm({ type: 'IMAGE_ONE', payload: true });
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
    const readerImageTwo = new FileReader();
    readerImageTwo.readAsDataURL(selectedFileTwo);
    readerImageTwo.onloadend = () => {
      setImageTwo(String(readerImageTwo.result));
    };
    dispatchDataForm({ type: 'IMAGE_TWO', payload: true });
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
    const readerImageThree = new FileReader();
    readerImageThree.readAsDataURL(selectedFileThree);
    readerImageThree.onloadend = () => {
      setImageThree(String(readerImageThree.result));
    };
    dispatchDataForm({ type: 'IMAGE_THREE', payload: true });
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
              <h1>Chỉnh sửa sản phẩm</h1>
            </div>
            <div className="edit-product__title">
              <h2>Thông tin cơ bản</h2>
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
            <div className="edit-product__item">Ảnh đại diện sản phẩm</div>
            <div className="edit-product__input">
              <div className="edit-product__input__image">{preview && <img src={preview} />}</div>
              <div className="edit-product__input__upload">
                <label htmlFor="image">
                  <input
                    type="file"
                    onChange={onSelectFile}
                    id="cover_image"
                    name="cover_image"
                    accept=".jpg,.png"
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
                  <div className="edit-product__input">
                    <div className="edit-product__input__image edit-product__input__image--100">
                      {previewOne && <img src={previewOne} />}
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
                  <div className="edit-product__input">
                    <div className="edit-product__input__image edit-product__input__image--100">
                      {previewTwo && <img src={previewTwo} />}
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
                  <div className="edit-product__input">
                    <div className="edit-product__input__image edit-product__input__image--100">
                      {previewThree && <img src={previewThree} />}
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
                      selected={state.id_category_level_one}
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
                      selected={state.id_category_level_two}
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
                      selected={state.id_category_level_three}
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
                id="myTextarea"
                tagName="description"
                onInit={(evt, editor) => (editorRef.current = editor)}
                init={{
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
                    onClick={handleRadio}
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
                    onClick={handleRadio}
                    checked={isItem}
                  />
                )}
              </span>
            </div>
          </div>
        </div>

        <div className={`${isBook ? 'edit-product__show' : 'edit-product__hide'}`}>
          <div className="edit-product">
            <div className="edit-product__content">
              <div className="edit-product__title">
                <h2>Thông tin chi tiết</h2>
              </div>
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
                  dispatchDataForm({ type: 'PRODUCT_PUBLISHING_COMPANY', payload: e.target.value })
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
        <div className={`${isItem ? 'edit-product__show' : 'edit-product__hide'}`}>
          <div className="edit-product">
            <div className="edit-product__content">
              <div className="edit-product__title">
                <h2>Thông tin chi tiết</h2>
              </div>
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
