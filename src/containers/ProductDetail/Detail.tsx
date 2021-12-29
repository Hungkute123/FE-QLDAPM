import React, { useEffect, useState } from "react";
import { Container, Typography} from '@material-ui/core';
import { Tabs, Button } from '../../components/common';
import { ProductManagement, } from "../../components";
import './Detail.scss';
import {ProductView} from "../../components/ProductView/ProductView";

export const Detail = () => {
   
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <ProductView/>
    )
}

