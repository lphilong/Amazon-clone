import React from 'react';
import './Nav.css';
import { AiOutlineMenu } from 'react-icons/ai';
import { NavData } from '../data/NavData';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../authContext';
import ShoppingCart from '../Pages/ShoppingCart/ShoppingCart';
import NavMb from './NavMb';
function NavBar() {
    const { user, logout, cartQuantity, isOpen, openCart } = useAuth();
    const navigate = useNavigate();
    const handleSubmit = async () => {
        try {
            await logout();
            navigate('/');
            alert('You are logged out');
        } catch (e) {
            console.log(e.message);
        }
    };
    return (
        <>
            <div className="navbar__component">
                {isOpen && <ShoppingCart />}
                <div className="navbar__header">
                    <Link to="/">
                        <div className="navbar__logo"></div>
                    </Link>
                    <div className="navbar__locator mr-18">
                        <div className="navbar__locatorImage"></div>
                        <div className="navbar__location">
                            <span>Deliver to</span>
                            <span>Vietnam</span>
                        </div>
                    </div>
                    <div className="navbar__searchBar mr-18">
                        <select className="navbar__dropdown">
                            {NavData.map((item, i) => (
                                <option value={item.value} key={i}>
                                    {item.value}
                                </option>
                            ))}
                        </select>

                        <div className="navbar__search ">
                            <input type="text" className="navbar__searchBox" />
                        </div>
                        <div className="navbar__searchIcon"></div>
                    </div>
                    <div className="navbar__Info">
                        {!user ? (
                            <Link to="/login" style={{ height: '100%' }}>
                                <div className="navbar__signIn white-txt mr-18">
                                    <span>Hello, Sign in</span>
                                    <span>Account & Lists</span>
                                </div>
                            </Link>
                        ) : (
                            <div className="navbar__signIn white-txt mr-18">
                                <span>{`Hello ${user.email}`}</span>
                                <button type="submit" onClick={handleSubmit} className="button">
                                    Sign out
                                </button>
                            </div>
                        )}
                        <div className="navbar__returns white-txt mr-18">
                            <span>Returns</span>
                            <span>& Orders</span>
                        </div>

                        <div className="navbar__cart white-txt mr-18" onClick={openCart}>
                            <div className="navbar__cartIcon">
                                {cartQuantity > 0 ? (
                                    <div className="navbar__cartQuantity">{cartQuantity > 0 ? cartQuantity : null}</div>
                                ) : null}
                            </div>
                            <span>Cart</span>
                        </div>
                    </div>
                </div>
                <div className="navbar__footer">
                    <div className="navbar__footer_menu navbar__footer_text">
                        <div className="navbar__footer_icon">
                            <AiOutlineMenu />
                        </div>
                        <span>All</span>
                    </div>
                </div>
            </div>
            <NavMb />
        </>
    );
}

export default NavBar;
