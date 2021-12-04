import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { InputFormProduct } from '../AddNewProduct/InputFormProduct/InputFormProduct';
import './CreatePromotion.scss';

export const CreatePromotion = () => {
    return (
        <div className="create-promotion">
          <div className="create-promotion__content">
            <div className="create-promotion__title">
              <h1>Tạo mã khuyến mãi</h1>
            </div>
            <div className="create-promotion__item">Thông tin cơ bản</div>
            <div className="create-promotion__margin-15">
              <span className="create-promotion__mr-40">Loại mã</span>
              <span>
                <Form.Check
                  inline
                  label="Cho tất cả sản phẩm"
                  name="group1"
                  type="radio"
                  id="all_product"
                  value="all_product"
                />
                <Form.Check
                  inline
                  label="Cho một sản phẩm"
                  name="group1"
                  type="radio"
                  id="one_product"
                  value="one_product"
                />
              </span>
            </div>
            <InputFormProduct
              title="Tên chương trình giảm giá"
              type="text"
              placeholder="Nhập tên sản phẩm (Tối đa 100 ký tự)"
              name="promotion_name"
              id="promotion_name"
              maxLength={100}
              required={true}
            />
            <InputFormProduct
              title="Mã voucher"
              type="text"
              placeholder="Nhập mã voucher (Tối đa 5 ký tự)"
              name="voucher_code"
              id="voucher_code"
              maxLength={5}
              required={true}
            />
            <div className="create-promotion__margin-15">
              <div className="create-promotion__mr-40">Thời gian sử dụng mã </div>
              <InputFormProduct
                title="Thời gian bắt đầu"
                type="datetime-local"
                name="start_datetime"
                id="start_datetime"
                required={true}
              />
              <InputFormProduct
                title="Thời gian kết thúc"
                type="datetime-local"
                name="end_datetime"
                id="end_datetime"
                required={true}
              />
            </div>
            <div className="create-promotion__item">Thiết lập mã giảm giá</div>
            <InputFormProduct
              title="Mức giảm giá"
              type="number"
              placeholder="Nhập mức giảm giá theo %"
              name="promotion_percentage"
              id="promotion_percentage"
              maxLength={3}
              min="1"
              max="100"
              required={true}
            />
            <InputFormProduct
              title="Lượt sử dụng tối đa"
              type="number"
              placeholder="Nhập tổng số lượt sử dụng mã"
              name="quantity"
              id="quantity"
              maxLength={10}
              required={true}
            />
            <div className="create-promotion__btn">
              <Button variant="danger" type="submit">
                Tạo khuyến mãi
              </Button>
            </div>
          </div>
        </div>
      );
}