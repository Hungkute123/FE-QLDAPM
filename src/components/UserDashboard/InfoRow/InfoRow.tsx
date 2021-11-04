import React from 'react';
import './InfoRow.scss';

import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

interface IInfoRow {
  lg: number;
  md: number;
  sm: number;
  xs: number;
  title: string;
  value: string;
  link: boolean;
  url?: string;
}

function InfoRow({ lg, md, sm, xs, title, value, link, url = '' }: IInfoRow) {
  return (
    <Col lg={12} md={12} sm={12} xs={12} className="info-row">
      <Row className="info-row__row">
        <Col lg={lg} md={md} sm={sm} xs={xs} className="info-row__title">
          {title}
        </Col>
        <Col
          lg={lg}
          md={md}
          sm={sm}
          xs={xs}
          className={`info-row__value ${lg == 6 ? 'info-row__value--center' : ''}`}
        >
          <span>{value}</span>
        </Col>
        <Col
          lg={lg}
          md={md}
          sm={sm}
          xs={xs}
          className={`info-row__url ${link ? 'info-row__url--show' : ''}`}
        >
          <Link to={url}>Xem thêm</Link>
        </Col>
      </Row>
    </Col>
  );
}

export default InfoRow;
