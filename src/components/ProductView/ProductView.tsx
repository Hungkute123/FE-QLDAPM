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
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import { addProduct } from '../../redux';
import { transformPriceFormat } from '../../helpers';
import { isArray } from 'react-select/dist/declarations/src/utils';
export const ProductView = () => {
    const [quantity, setQuantity] = useState(1);
    const productId = useParams();

    const [product, setProduct] = useState<any>({});
    const [publisher, setPublisher] = useState('');
    const [supplier, setSupplier] = useState('');
    const [path, setPath] = useState();
    const [qty, setQty] = useState(1);
    useEffect(() => {
        async function fetchMyAPI() {
            let response = await productApi.getProductByIDProduct(productId)
            console.log("response", response);
            setPath(response.data.Path)
            setProduct(response.data.data[0]);
            setPublisher(response.data.data[0].Publishser[0].Name);
            setSupplier(response.data.data[0].Supplier[0].Name)



            console.log(response.data.Path);

        }

        fetchMyAPI()
    }, [])


    const dispatch = useDispatch();
    const handleClick = () => {
        for (let index = 0; index < qty; index++) {
            dispatch(
                addProduct({ product, path: path })
            );
        }

    };
    const history = useHistory();
    const handleClickBuyNow = () => {
        for (let index = 0; index < qty; index++) {
            dispatch(
                addProduct({ product, path: path })
            );
        }
        history.push(`/cart`);
    };
    return (
        <div className='product-view'>
            <div className="product-view kasitoo">
                <div className="product-essential">
                    <div className="product-essential-media">
                        <div className="product-view-image">
                            <div className="product-view-thumbnail">
                                <div className="lightgallery">
                                    <a className="include-in-gallery" id="lightgallery-item-0">
                                        <img src={`${path}${product.SubImageOne}`} alt="" />
                                    </a>

                                    <a className="include-in-gallery" id="lightgallery-item-1">
                                        <img src={`${path}${product.SubImageTwo}`} alt="" />
                                    </a>

                                    <a className="include-in-gallery" id="lightgallery-item-2">
                                        <img src={`${path}${product.SubImageThree}`} alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="product-view-image-product">
                                <img id="image" className='fhs-p-img' src={`${path}${product.Image}`} alt="" />
                            </div>
                            <div className="clear"></div>
                        </div>
                        <div className="product_view_add_box">
                            <button type="button" title='Thêm vào giỏ hàng' className='btn-cart-to-cart' onClick={() => { handleClick() }}>
                                <span className='fhs_icon_cart'></span>
                                <span>Thêm vào giỏ hàng</span>
                            </button>
                            <button type="button" title='Mua ngay' className='btn-buy-now' onClick={() => { handleClickBuyNow() }}>
                                <span>Mua ngay</span>
                            </button>
                        </div>
                    </div>
                    <div className="product-essential-detail">
                        <h1>
                            {product.NameProduct}
                        </h1>
                        <div className="product-view-sa">
                            <div className="product-view-sa_one">
                                <div className="product-view-sa-supplier">
                                    {product.TypeProduct == 'Book' ?
                                        <><span>Nhà cung cấp: </span>
                                            <a href="">{supplier}</a></> :
                                        <><span>Nhà cung cấp: </span>
                                            <a href="">{product.Supplier}</a></>}
                                </div>
                                <div className="product-view-sa-author">
                                    {product.TypeProduct == 'Book' ?
                                        <><span>Tác giả: </span>
                                            <a href="">{product.Author}</a></> :
                                        <><span>Xuất xứ: </span>
                                            <a href="">{product.Origin}</a></>}
                                </div>
                            </div>
                            <div className="product-view-sa_two">
                                <div className="product-view-sa-supplier">
                                    {product.TypeProduct == 'Book' ?
                                        <><span>Nhà xuất bản: </span>
                                            <a href="">{publisher}</a></> :
                                        <><span>Nơi sản xuất: </span>
                                            <a href="">{product.ProcessingPlace}</a></>}

                                </div>
                                <div className="product-view-sa-author">
                                    {product.TypeProduct == 'Book' ?
                                        <><span>Hình thức bìa: </span>
                                            <a href="">{product.CoverForm}</a></> :
                                        <><span>Vật liệu: </span>
                                            <a href="">{product.Material}</a></>}

                                </div>
                            </div>

                        </div>

                        <div className="col-md-12 price-block desktop_only">
                            <div id='catalog-product-details-price' className="product_price price-block-left">
                                <div className="price-box">
                                    <p className='special-price'>
                                        <span className='price-label'>Special Price</span>
                                        <span className='price' id='product-price-354592'>{transformPriceFormat(product.Price)}đ</span>
                                    </p>
                                </div>
                            </div>
                            <div className="clear"></div>

                        </div>
                        <div className="clear"></div>
                        <div id="catalog-product-details-discount">
                            <div className="product-view-quantity-box">
                                <label htmlFor="qty">Số lượng:</label>
                                <div className="product-view-quantity-box-block">
                                    <a className='btn-subtrack-qty' onClick={() => { setQty(qty - 1) }}>
                                        <img className='btn-subtrack-img' src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_minus2x.png" alt="" style={{ width: 12, height: 2 }} />
                                    </a>
                                    <input type="text" name='qty' value={qty} id='qty' className='input-text qty' />
                                    <a className='btn-add-qty' onClick={() => { setQty(qty + 1) }}>
                                        <img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_plus2x.png" alt="" style={{ width: 12, height: 12 }} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="clear"></div>




                    </div>
                </div>
                <div className='clear'></div>
            </div>

            <div className="content product_view_content" id='product_view_info'>
                <div className="product_view_content-title">Thông tin sản phẩm</div>
                <div className="product_view_tab_content_ad">
                    <div className="product_view_tab_content_additional">
                        <table className="data-table table-additional">
                            <colgroup>
                                <col width={400} />
                                <col /></colgroup>
                            <tbody>
                                <tr>
                                    <th className="table-label">Mã sản phẩm</th>
                                    <td className="data_sku">{product.IDProduct}</td>
                                </tr>
                                <tr>
                                    {product.TypeProduct == 'Book' ?
                                        <>
                                            <th className="table-label">Nhà cung cấp:</th>
                                            <td className="data_sku">{supplier}</td></> :
                                        <>
                                            <th className="table-label">Nhà cung cấp:</th>
                                            <td className="data_sku">{product.Supplier}</td>
                                        </>}
                                </tr>
                                <tr>
                                    {product.TypeProduct == 'Book' ?
                                        <><th className="table-label">Tác giả: </th>
                                            <td className="data_sku">{product.Author}</td></> :
                                        <><th className='table-label'>Nơi sản xuất: </th>
                                            <td className='data_sku'>{product.ProcessingPlace}</td></>}
                                </tr>
                                <tr>
                                    {product.TypeProduct == 'Book' ?
                                        <><th className='table-label'>Người dịch: </th>
                                            <td className='data_sku'>{product.Translator}</td></> :
                                        <><th className='table-label'>Xuất xứ: </th>
                                            <td className='data_sku'>{product.ProcessingPlace}</td></>}
                                </tr>
                                <tr>
                                    {product.TypeProduct == 'Book' ?
                                        <><th className='table-label'>NXB: </th>
                                            <td className='data_sku'>{publisher}</td></> :
                                        <><th className='table-label'>Màu sắc: </th>
                                            <td className='data_sku'>{product.Color}</td></>}
                                </tr>
                                <tr>
                                    {product.TypeProduct == 'Book' ?
                                        <><th className='table-label'>Trọng lượng: </th>
                                            <td className='data_sku'>{product.Weight}</td></> :
                                        <><th className='table-label'>Trọng lượng: </th>
                                            <td className='data_sku'>{product.Weight}</td></>}
                                </tr>
                                <tr>
                                    {product.TypeProduct == 'Book' ?
                                        <><th className='table-label'>Năm xuất bản: </th>
                                            <td className='data_sku'>{product.PublishingYear}</td></> :
                                        <><th className='table-tabel'>Kích thước bao bì: </th>
                                            <td className='data_sku'>{product.PackagingSize}</td></>}
                                </tr>
                                <tr>
                                    {product.TypeProduct == 'Book' ?
                                        <><th className='table-label'>Số trang: </th>
                                            <td className='data_sku'>{product.NumberOfPage}</td></> :
                                        <><th className='table-label'>Nhà phân phối: </th>
                                            <td className='data_sku'>{product.Trademark}</td></>}
                                </tr>
                                <tr>
                                    {product.TypeProduct == 'Book' ?
                                        <><th className='table-label'>Hình thức: </th>
                                            <td className='data_sku'>{product.CoverForm}</td></> :
                                        <><th className='table-label'>Chất liệu: </th>
                                            <td className='data_sku'>{product.Material}</td></>}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <p style={{ textAlign: 'justify', marginTop:20 }}>
                <div dangerouslySetInnerHTML={{ __html: product.Description }}></div>
                </p>
            </div>
            <div />
        </div>
    );
};

