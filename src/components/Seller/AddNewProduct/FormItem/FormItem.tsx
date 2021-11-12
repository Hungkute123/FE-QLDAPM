import React from 'react';
import { InputFormProduct } from '../InputFormProduct/InputFormProduct';
import './FormItem.scss';

export const FormItem = () =>{
    return (
        <div className="form-item">
      <div className="form-book__item">
          <InputFormProduct
            title="Nguồn gốc"
            type="text"
            placeholder="Nhập nguồn gốc xuất sứ của sản phẩm"
            id="productorigin"
            maxLength={100}
          />
        </div>
        <div className="form-book__item">
          <InputFormProduct
            title="Thương hiệu"
            type="text"
            placeholder="Nhập thương hiệu sản phẩm"
            id="producttrademark"
            maxLength={200}
          />
        </div>
        <div className="form-book__item">
          <InputFormProduct
            title="Nơi sản xuất"
            type="text"
            placeholder="Nhập nơi sản xuất sản phẩm"
            id="productprocessingplace"
            maxLength={200}
          />
        </div>
        <div className="form-book__item">
          <InputFormProduct
            title="Màu"
            type="text"
            placeholder="Nhập màu của sản phẩm"
            id="productcolor"
            maxLength={50}
          />
        </div>
        <div className="form-book__item">
          <InputFormProduct
            title="Chất liệu"
            type="text"
            placeholder="Nhập chất liệu của sản phẩm"
            id="productmaterial"
            maxLength={100}
          />
        </div>
    </div>
    )
}