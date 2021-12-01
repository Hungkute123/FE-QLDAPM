import React from 'react';
import './UserNewsLetter.scss';

import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

export const UserNewsLetter = () => {
  const className = 'user-newsletter';

  return (
    <div className={`${className}`}>
      <div className={`${className}__content`}>
        <div className={`${className}__title`}>
          <h1>Đăng ký nhận tin điện tử (Newsletter)</h1>
        </div>
        <Form className={`${className}__table`}>
          <Form.Check type="checkbox" id="default-checkbox" label="Bản tin tổng hợp" />
        </Form>
        <div className={`${className}__back`}>
          <p className={`${className}__link`}>
            <Link to="/account">
              <small>« </small>Quay lại
            </Link>
          </p>
          <div className={`${className}__btn`}>
            <Button variant="danger">LƯU ĐỊA CHỈ</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
