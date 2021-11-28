import React from 'react';
import { InputFormProduct } from '../InputFormProduct/InputFormProduct';
import './FormBook.scss';
interface IFormBook{
  required?: boolean;
}
export const FormBook: React.FC<IFormBook> = ({required= false}) => {
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
          />
        </div>
        <div className="form-book__item">
          <InputFormProduct
            title="Nhà cung cấp"
            type="text"
            placeholder="Nhập tên nhà cung cấp sản phẩm"
            id="product_supplier"
            name="product_supplier"
            maxLength={500}
            required={required}
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
          />
        </div>
    </div>
  );
};
