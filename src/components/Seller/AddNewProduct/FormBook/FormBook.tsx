import { stringifyUrl } from 'query-string';
import React from 'react';
import { InputFormProduct } from '../InputFormProduct/InputFormProduct';
import './FormBook.scss';
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
  return (
    <div className="form-book">
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
        <InputFormProduct
          title="Nhà cung cấp"
          type="text"
          placeholder="Nhập tên nhà cung cấp sản phẩm"
          id="product_supplier_book"
          name="product_supplier_book"
          maxLength={500}
          required={required}
          value={valueSupplierBook}
          onInput={onInputSupplierBook}
        />
      </div>
      <div className="form-book__item">
        <InputFormProduct
          title="Nhà xuất bản"
          type="text"
          placeholder="Nhập tên nhà xuất bản sản phẩm"
          id="product_publishing_company"
          name="product_publishing_company"
          maxLength={500}
          required={required}
          value={valuePublishingCompany}
          onInput={onInputPublishingCompany}
        />
      </div>
      <div className="form-book__item">
        <InputFormProduct
          title="Hình thức bìa"
          type="text"
          placeholder="Nhập hình thức bìa"
          id="product_cover_form"
          name="product_cover_form"
          maxLength={100}
          required={required}
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
      </div>
      <div className="form-book__item">
        <InputFormProduct
          title="Tổng số trang"
          type="number"
          placeholder="Nhập tổng số trang"
          id="product_number_of_page"
          name="product_number_of_page"
          required={required}
          min="0"
          value={valueNumberOfPage}
          onInput={onInputNumberOfPage}
        />
      </div>
    </div>
  );
};
