import React from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../authContext';
import { products } from '../../data/products';
import { Rating } from '@mui/material';

import NavBar from '../../NavBar/Nav';

import './index.css';
function ProductDetail() {
    const { id } = useParams();
    const product = products.find((product) => product.id === parseInt(id));
    const { onIncrease, onDecrease, getItemQuantity, removeFromCart } = useAuth();
    const quantity = getItemQuantity(product);
    return (
        <div>
            <NavBar />
            <div className="main">
                <div className="product-detail">
                    <div className="product-detail__left">
                        <img src={product.img} alt="" className="product-detail__img" />
                    </div>
                    <div className="product-detail__mid">
                        <div className="product-detail__title">{product.title}</div>
                        <Rating size="small" value={product.rating} readOnly style={{ margin: '10px 0' }} />
                        <hr />
                        <div className="product__price">${product.price}</div>
                        {quantity === 0 ? (
                            <button className="button__cart" onClick={() => onIncrease(product)}>
                                Add To Cart
                            </button>
                        ) : (
                            <div className="product-detail__button">
                                <button className="button__decrease" onClick={() => onDecrease(product)}>
                                    -
                                </button>
                                <span>{quantity}</span>
                                <button className="button__increase" onClick={() => onIncrease(product)}>
                                    +
                                </button>
                                <button className="button__cart" onClick={() => removeFromCart(product)}>
                                    Remove
                                </button>
                            </div>
                        )}

                        <hr />
                        <div className="product-detail__description">
                            <span>About this item</span>
                            <ul>
                                {product.description.map((item, i) => {
                                    return <li key={i}>{item}</li>;
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
