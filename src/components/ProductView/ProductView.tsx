import React, { useEffect, useState } from 'react';
import './ProductView.scss';
import PropTypes from 'prop-types';
import exports from 'webpack';
import { Button } from '../common';
import IconName from "react-icons/bi";
import 'boxicons';
import { useDispatch, useSelector } from 'react-redux';
import productApi from '../../services/aixos/productApi';
import { RootState } from '../../redux/rootReducer';
import { useParams } from 'react-router-dom';
export const ProductView = () => {
    const [quantity, setQuantity] = useState(1);
    const productId = useParams();
    // console.log(productId);
    // const dispatch = useDispatch();
    // const product = useSelector((state: RootState) => state.productSlice); 
    // useEffect(() => {
    //     dispatch(doGetProductByIDProduct(productId))
    // }, [dispatch]);
    // console.log("product: ", product);
   
    
    // useEffect(async()  {
    //     const res =  await productApi.getProductByIDProduct(productId);
    //     console.log(res);
    // },[]);
    useEffect(() => {
        async function fetchMyAPI() {
          let response = await productApi.getProductByIDProduct(productId)
          setProduct(response.data.data[0]); 
          console.log("response", response);
            
          setPath(response.data.Path)   
        }
    
        fetchMyAPI()
      }, [])
    const [product, setProduct] = useState<any>({});
    const [path, setPath] = useState();
    
    return (
        <div className="product">
            <div className="product__images">
                <div className="product__images__list">
                    <div className="product__images__list__item">
                        <img src={`${path}${product.SubImageOne}`} alt="" />
                    </div>
                    <div className="product__images__list__item">
                        <img src={`${path}${product.SubImageTwo}`} alt="" />
                    </div>
                    <div className="product__images__list__item">
                        <img src={`${path}${product.SubImageThree}`} alt="" />
                    </div>
                </div>
                <div className="product__images__main">
                    <img src={`${path}${product.Image}`} alt="" />
                </div>
            </div>
            <div className="product__info">
               <h1 className="product__info__title">{product.NameProduct}</h1>
               <div className="product__info__item">
                   <span className="product__info__item__price">
                       {product.Price}
                   </span>
               </div>
               <div className="product__info__item">
                   <div className="product__info__item__title">Nhà xuất bản: {product.PublishingCompany}</div>                   
               </div>
               <div className="product__info__item">
                   <div className="product__info__item__title">Tác giả: {product.Author}</div>
               </div>
               <div className="product__info__item">
                   <div className="product__info__item__title">Hình thức bìa: {product.CoverForm}</div>
               </div>
               <div className="product__info__item">
                   <div className="product__info__item__title">Số lượng: {product.Quantity}</div>    
               </div>
               <div className="product__info__item">
                        <Button>Thêm vào giỏ</Button>
                        <Button>Mua ngay</Button>
                </div>
            </div>
            

        </div>
    );
};


