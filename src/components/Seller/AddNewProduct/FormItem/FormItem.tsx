import React from 'react';
import { InputFormProduct } from '../InputFormProduct/InputFormProduct';
import './FormItem.scss';

interface IFormItem {
  required?: boolean;
  valueOrigin?: string;
  onInputOrigin?: any;
  valueSupplierItem?: string;
  onInputSupplierItem?: any;
  valueTrademark?: string;
  onInputTrademark?: any;
  valueProcessingPlace?: string;
  onInputProcessingPlace?: any;
  valueColor?: string;
  onInputColor?: any;
  valueMaterial?: string;
  onInputMaterial?: any;
}
export const FormItem: React.FC<IFormItem> = ({
  required = false,
  valueOrigin,
  onInputOrigin,
  valueSupplierItem,
  onInputSupplierItem,
  valueTrademark,
  onInputTrademark,
  valueProcessingPlace,
  onInputProcessingPlace,
  valueColor,
  onInputColor,
  valueMaterial,
  onInputMaterial,
}) => {
  return (
    <div className="form-item">
      <div className="form-book__item">
        <InputFormProduct
          title="Nguồn gốc"
          type="text"
          placeholder="Nhập nguồn gốc xuất sứ của sản phẩm"
          id="product_origin"
          name="product_origin"
          maxLength={100}
          required={required}
          value={valueOrigin}
          onInput={onInputOrigin}
        />
      </div>
      <div className="form-book__item">
        <InputFormProduct
          title="Thương hiệu"
          type="text"
          placeholder="Nhập thương hiệu sản phẩm"
          id="product_trademark"
          name="product_trademark"
          maxLength={200}
          required={required}
          value={valueTrademark}
          onInput={onInputTrademark}
        />
      </div>
      <div className="form-book__item">
        <InputFormProduct
          title="Nơi sản xuất"
          type="text"
          placeholder="Nhập nơi sản xuất sản phẩm"
          id="product_processing_place"
          name="product_processing_place"
          maxLength={200}
          required={required}
          value={valueProcessingPlace}
          onInput={onInputProcessingPlace}
        />
      </div>
      <div className="form-book__item">
        <InputFormProduct
          title="Nhà cung cấp"
          type="text"
          placeholder="Nhập tên nhà cung cấp sản phẩm"
          id="product_supplier_item"
          name="product_supplier_item"
          maxLength={500}
          required={required}
          value={valueSupplierItem}
          onInput={onInputSupplierItem}
        />
      </div>
      <div className="form-book__item">
        <InputFormProduct
          title="Màu"
          type="text"
          placeholder="Nhập màu của sản phẩm"
          id="product_color"
          name="product_color"
          maxLength={50}
          value={valueColor}
          onInput={onInputColor}
        />
      </div>
      <div className="form-book__item">
        <InputFormProduct
          title="Chất liệu"
          type="text"
          placeholder="Nhập chất liệu của sản phẩm"
          id="product_material"
          name="product_material"
          maxLength={100}
          value={valueMaterial}
          onInput={onInputMaterial}
        />
      </div>
    </div>
  );
};
