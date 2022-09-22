import React from 'react';
import './Nav.css';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../authContext';
import ShoppingCart from '../Pages/ShoppingCart/ShoppingCart';

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
        <div className="navbarMb__component">
            {isOpen && <ShoppingCart />}
            <div className="navbar__header">
                <div className="navbar__first">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <AiOutlineMenu style={{ fontSize: '20px', color: 'white' }} />
                        <Link to="/">
                            <div className="navbar__logo"></div>
                        </Link>
                    </div>
                    <div className="navbar__Info">
                        {!user ? (
                            <Link to="/login" style={{ height: '100%' }}>
                                <div className="navbar__signIn white-txt " style={{ height: '50px' }}>
                                    <span> Sign in</span>
                                </div>
                            </Link>
                        ) : (
                            <div className="navbar__signIn white-txt " style={{ height: '50px' }}>
                                <span>{`Hello ${user.email}`}</span>
                                <button type="submit" onClick={handleSubmit} className="button">
                                    Sign out
                                </button>
                            </div>
                        )}
                        <div className="navbar__cart white-txt " style={{ height: '50px' }} onClick={openCart}>
                            <div className="navbar__cartIcon">
                                {cartQuantity > 0 ? (
                                    <div className="navbar__cartQuantity">{cartQuantity > 0 ? cartQuantity : null}</div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar__searchBar ">
                    <div className="navbar__search ">
                        <input type="text" className="navbar__searchBox" />
                        <div className="navbar__searchIcon"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
