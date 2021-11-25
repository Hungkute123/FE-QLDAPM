import React, { useState, useEffect } from 'react';
import { AdminSidebar, ManageCate, ManageReport, ManageUser, SellerReport } from '../../components';
import { Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router';

export const AdminHome = () => {
  const [kindScreen, setKindScreen] = useState(0);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/admin/manage-user') setKindScreen(0);
    if (location.pathname === '/admin/manage-categories') setKindScreen(1);
    if (location.pathname === '/admin/manage-report') setKindScreen(2);
    if (location.pathname === '/admin/sales-report') setKindScreen(3);
    // if (location.pathname === '/admin/sales-report') setKindScreen(4);
  }, [location]);

  const renderBody = (kind: number) => {
    switch (kind) {
      case 0:
        return <ManageUser />;
      case 1:
        return <ManageCate />;
      case 2:
        return <ManageReport />;
      case 3:
        return <SellerReport />;
      default:
        return <></>;
    }
  };

  return (
    <div className="admin-home">
      <Row>
        <Col lg={3} md={3}>
          <AdminSidebar current={kindScreen}></AdminSidebar>
        </Col>
        <Col lg={9} md={9}>
          {renderBody(kindScreen)}
        </Col>
      </Row>
    </div>
  );
};
