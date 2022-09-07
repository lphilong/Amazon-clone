import React, { useRef } from 'react';
import { useAuth } from '../../authContext';
import './ShoppingCart.css';
import { products } from '../../data/products';
import { useNavigate } from 'react-router-dom';

function ShoppingCart() {
    const navigate = useNavigate();
    const { cartItems, removeFromCart, closeCart, useOutsideClose, user } = useAuth();
    const wrapperRef = useRef(null);
    useOutsideClose(wrapperRef);
    const handleClick = () => {
        if (!user) {
            return navigate('/login');
        } else {
            return null;
        }
    };
    return (
        <div className="cart__main">
            <div className="cart__container float-right" ref={wrapperRef}>
                {cartItems.length === 0 ? (
                    <div className="cart__box">
                        <div className="cart__header pl-20">
                            <span>Cart</span>
                            <button className="cart__close " onClick={closeCart}>
                                x
                            </button>
                        </div>
                        <span className="pl-20">Your cart is empty!</span>
                    </div>
                ) : (
                    <div className="cart__box">
                        <div className="cart__header pl-20">
                            <span>Cart</span>
                            <button className="cart__close " onClick={closeCart}>
                                x
                            </button>
                        </div>
                        <div>
                            {cartItems.map((item, i) => (
                                <div className="cart__product" key={i}>
                                    <div className="cart__productImg">
                                        <img src={item.img} alt="" className="cart__img" />
                                    </div>
                                    <div className="cart__content">
                                        <div className="cart__title">{item.title}</div>
                                        <div className="cart__qty">Qty: {item.quantity}</div>
                                        <div className="cart__price">Price: ${item.price}</div>
                                    </div>
                                    <div className="cart__subtotal">${item.price * item.quantity}</div>
                                    <button className="cart__remove" onClick={() => removeFromCart(item)}>
                                        x
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="cart__total float-right">
                            Total: $
                            {cartItems.reduce((total, cartItem) => {
                                const item = products.find((i) => i.id === cartItem.id);
                                return total + (item?.price || 0) * cartItem.quantity;
                            }, 0)}
                            <button className="button__cart" onClick={handleClick}>
                                Proceed to checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ShoppingCart;
