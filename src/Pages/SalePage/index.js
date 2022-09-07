import React, { useEffect, useState } from 'react';
import NavBar from '../../NavBar/Nav';
import { products } from '../../data/products';
import './index.css';
import { Sidebar } from '../SideBar/Sidebar';
import { Link } from 'react-router-dom';
import { useAuth } from '../../authContext';
import { Rating } from '@mui/material';
function SalePage() {
    const { priceMin, priceMax, rating } = useAuth();
    const [product, setProduct] = useState(products);

    useEffect(() => {
        if (rating === 0 && priceMax === 0 && priceMin === 0) {
            setProduct(products);
        } else {
            setProduct(
                products
                    .filter((item) => item.price > priceMin)
                    .filter((item) => item.price <= priceMax)
                    .filter((item) => item.rating === rating),
            );
        }
    }, [priceMax, priceMin, rating]);

    return (
        <div>
            <NavBar />
            <div className="sale__home">
                <Sidebar />
                <div className="product__container">
                    {product.map((product) => {
                        return (
                            <div className="product__content" key={product.id}>
                                <Link to={`/sp/${product.id}`}>
                                    <div className="product__first">
                                        <img src={product.img} alt="" className="product__img" />
                                    </div>
                                </Link>
                                <div className="product__second">
                                    <Link to={`/sp/${product.id}`}>
                                        <p className="product__description">{product.title}</p>
                                    </Link>
                                    <Rating size="small" value={product.rating} readOnly style={{ margin: '10px 0' }} />
                                    <div className="product__price">${product.price}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default SalePage;
