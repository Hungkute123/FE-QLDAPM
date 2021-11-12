import React from 'react';
import { InputFormProduct } from '../InputFormProduct/InputFormProduct';
import './FormBook.scss';

export const FormBook = () => {
  return (
    <div className="form-book">
      <div className="form-book__item">
          <InputFormProduct
            title="Tác giả"
            type="text"
            placeholder="Nhập tên tác giả"
            id="productauthor"
            maxLength={200}
          />
        </div>
        <div className="form-book__item">
          <InputFormProduct
            title="Nhà cung cấp"
            type="text"
            placeholder="Nhập tên nhà cung cấp sản phẩm"
            id="productsupplier"
            maxLength={500}
          />
        </div>
        <div className="form-book__item">
          <InputFormProduct
            title="Nhà xuất bản"
            type="text"
            placeholder="Nhập tên nhà xuất bản sản phẩm"
            id="productpublishingcompany"
            maxLength={500}
          />
        </div>
        <div className="form-book__item">
          <InputFormProduct
            title="Hình thức bìa"
            type="text"
            placeholder="Nhập hình thức bìa"
            id="productcoverform"
            maxLength={100}
          />
        </div>
        <div className="form-book__item">
          <InputFormProduct
            title="Người dịch"
            type="text"
            placeholder="Nhập tên người dịch"
            id="producttranslator"
            maxLength={100}
          />
        </div>
        <div className="form-book__item">
          <InputFormProduct
            title="Năm sản xuất"
            type="number"
            placeholder="Nhập năm sản xuất"
            id="productpublishingyear"
          />
        </div>
        <div className="form-book__item">
          <InputFormProduct
            title="Tổng số trang"
            type="number"
            placeholder="Nhập tổng số trang"
            id="productnumberofpage"
          />
        </div>
    </div>
  );
};
