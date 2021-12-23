import { stringifyUrl } from 'query-string';
import React, { useEffect, useState, useRef  } from 'react';
import { InputFormProduct } from '../InputFormProduct/InputFormProduct';
import CreatableSelect from 'react-select/creatable';
import Select, { ActionMeta, OnChangeValue } from 'react-select';
import './FormBook.scss';
import { SupplierModal } from '../SupplierModal/SupplierModal';
import {
  doGetAllProductPublisher,
  doGetAllProductSupplier,
  useAppDispatch,
} from '../../../../redux';
const options = [
  { id: 1, value: 'chocolate', label: 'Chocolate' },
  { id: 2, value: 'strawberry', label: 'Strawberry' },
  { id: 3, value: 'vanilla', label: 'Vanilla' },
  { id: 4, value: 'add', label: 'Thêm nhà cung cấp' },
];
const customStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    background: '#fff',
    minHeight: '39px',
    height: '39px',
    boxShadow: state.isFocused ? null : null,
  }),
  valueContainer: (provided: any, state: any) => ({
    ...provided,
    height: '39px',
    padding: '0 6px',
  }),
  input: (provided: any, state: any) => ({
    ...provided,
    margin: '0px',
  }),
  indicatorSeparator: (state: any) => ({
    display: 'none',
  }),
  indicatorsContainer: (provided: any, state: any) => ({
    ...provided,
    height: '39px',
  }),
};
interface Option {
  readonly id: number;
  readonly label: string;
  readonly value: string;
}
interface IFormBook {
  required?: boolean;
  valueAuthor?: string;
  onInputAuthor?: any;
  valueSupplierBook?: string;
  onInputSupplierBook?: any;
  valuePublishingCompany?: string;
  onInputPublishingCompany?: any;
  valueCoverForm?: string;
  onInputCoverForm?: any;
  valueTranslator?: string;
  onInputTranslator?: any;
  valuePublishingYear?: string;
  onInputPublishingYear?: any;
  valueNumberOfPage?: string;
  onInputNumberOfPage?: any;
}
interface IProductSupplier {
  IDSupplier: number;
  Name: string;
  Address?: string;
  UrlWebsite?: string;
  Status?: string;
}
interface IProductPublisher {
  IDPublisher: number;
  Name: string;
  Address?: string;
  UrlWebsite?: string;
  Status?: string;
}
export const FormBook: React.FC<IFormBook> = ({
  required = false,
  valueAuthor,
  onInputAuthor,
  valueSupplierBook,
  onInputSupplierBook,
  valuePublishingCompany,
  onInputPublishingCompany,
  valueCoverForm,
  onInputCoverForm,
  valueTranslator,
  onInputTranslator,
  valuePublishingYear,
  onInputPublishingYear,
  valueNumberOfPage,
  onInputNumberOfPage,
}) => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [publisher, setPublisher] = useState({ id: 0, name: '' });
  const [supplier, setSupplier] = useState({ id: 0, name: '' });
  const [listProductPublisher, setListProductPublisher] = useState([]);
  const [listProductSupplier, setListProductSupplier] = useState([]);
  const [listYear, setListYear] = useState([]);
  const [year, setYear] = useState(0);
  const selectInputRefSupplier:any = useRef();
  const handleChangeSupplier = (
    newValue: OnChangeValue<Option, false>,
    actionMeta: ActionMeta<Option>,
  ) => {
    // console.log(option)
    // if (option.value === 'add') {
    //   console.log('hhe');
    //   setIsOpen(true);
    // }else{
    //   setSupplier({id: option.id, name: option.label})
    // }
    console.group('Value Changed');
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
    if( String(actionMeta.action) == 'clear'){
      console.log('hih')
      selectInputRefSupplier.current.select.clearValue();
    }
    setSupplier({ id: newValue.id, name: newValue.label });
  };
  const handleChangePublisher = (
    newValue: OnChangeValue<Option, false>,
    actionMeta: ActionMeta<Option>,
  ) => {
    console.group('Value Changed');
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
    setPublisher({ id: newValue.id, name: newValue.label });
  };
  const handleChangeYear = (option: any) => {
    setYear(option.value);
  };
  useEffect(() => {
    const getListDataSelect = async () => {
      const productPublisher = (await dispatch(doGetAllProductPublisher())).payload;
      const productSupplier = (await dispatch(doGetAllProductSupplier())).payload;
      productSupplier.data.map((item: IProductSupplier) => {
        listProductSupplier.push({ id: item.IDSupplier, value: item.Name, label: item.Name });
      });
      productPublisher.data.map((item: IProductPublisher) => {
        listProductPublisher.push({ id: item.IDPublisher, value: item.Name, label: item.Name });
      });
      setListProductPublisher([...listProductPublisher]);
      setListProductSupplier([...listProductSupplier]);
    };
    getListDataSelect();
    for (let i = 2022; i > 1800; i--) {
      listYear.push({ value: i, label: i });
    }
    setListYear([...listYear]);
  }, []);
  return (
    <div className="form-book">
      <SupplierModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <input
        type="number"
        name="product_supplier_book"
        id="product_supplier_book"
        value={supplier.id}
        hidden
      />
      <input
        type="number"
        name="product_publishing_company"
        id="product_publishing_company"
        value={publisher.id}
        hidden
      />
      <input
        type="number"
        name="product_publishing_year"
        id="product_publishing_year"
        value={year}
        hidden
      />
      <div className="form-book__item">
        <InputFormProduct
          title="Tác giả"
          type="text"
          placeholder="Nhập tên tác giả"
          id="product_author"
          name="product_author"
          maxLength={200}
          required={required}
          value={valueAuthor}
          onInput={onInputAuthor}
        />
      </div>
      <div className="form-book__item">
        <div className="form-book__select">
          <span className="form-book__select__title">Nhà cung cấp</span>
          <div className="form-book__select__select">
            <CreatableSelect
            ref={selectInputRefSupplier}
              // defaultValue={}
              //isClearable
              isSearchable
              name="supplier"
              // value={listProductSupplier.Name}
              //value={supplier.name}
              options={listProductSupplier}
              styles={customStyles}
              placeholder={'Chọn nhà cung cấp'}
              onChange={handleChangeSupplier}
              
            />
          </div>
        </div>
      </div>
      <div className="form-book__item">
        <div className="form-book__select">
          <span className="form-book__select__title">Nhà xuất bản</span>
          <div className="form-book__select__select">
            <Select
              // defaultValue={}
             // isClearable
              isSearchable
              name="publisher"
              options={listProductPublisher}
              //getOptionValue={(option) => `${option['id']}`}
              styles={customStyles}
              placeholder={'Chọn nhà xuất bản'}
              onChange={handleChangePublisher}
            />
          </div>
        </div>
      </div>
      <div className="form-book__item">
        <InputFormProduct
          title="Hình thức bìa"
          type="text"
          placeholder="Nhập hình thức bìa"
          id="product_cover_form"
          name="product_cover_form"
          maxLength={100}
          value={valueCoverForm}
          onInput={onInputCoverForm}
        />
      </div>
      <div className="form-book__item">
        <InputFormProduct
          title="Người dịch"
          type="text"
          placeholder="Nhập tên người dịch"
          id="product_translator"
          name="product_translator"
          maxLength={100}
          value={valueTranslator}
          onInput={onInputTranslator}
        />
      </div>
      <div className="form-book__item">
        <div className="form-book__select">
          <span className="form-book__select__title">Năm sản xuất</span>
          <div className="form-book__select__select">
            <Select
              // defaultValue={}
             // isClearable
              isSearchable
              name="year"
              options={listYear}
              //getOptionValue={(option) => `${option['id']}`}
              styles={customStyles}
              placeholder={'Chọn năm sản xuất'}
              onChange={handleChangeYear}
            />
          </div>
        </div>
      </div>
      {/* <div className="form-book__item">
        <InputFormProduct
          title="Năm sản xuất"
          type="number"
          placeholder="Nhập năm sản xuất"
          id="product_publishing_year"
          name="product_publishing_year"
          required={required}
          min="0"
          max="2023"
          value={valuePublishingYear}
          onInput={onInputPublishingYear}
        />
      </div> */}
      <div className="form-book__item">
        <InputFormProduct
          title="Tổng số trang"
          type="number"
          placeholder="Nhập tổng số trang"
          id="product_number_of_page"
          name="product_number_of_page"
          min="0"
          value={valueNumberOfPage}
          onInput={onInputNumberOfPage}
        />
      </div>
    </div>
  );
};
