import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './Login.css';
import { useAuth } from '../../authContext';
import { useKey } from '../../keypress';

function Login() {
    const navigate = useNavigate();
    const { login, user } = useAuth();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            await login(email, password);
            navigate('/');
        } catch (e) {
            alert('Your email or password is not correct!');
        }
        setLoading(false);
    };
    const keyPress = useKey('Enter', handleSubmit);

    if (user) {
        return <Navigate replace to="/" />;
    } else {
        return (
            <div className="login__main">
                <div className="login__header">
                    <Link to="/">
                        <div className="login__logo"></div>
                    </Link>
                </div>
                <div className="login__form">
                    <div className="login__body">
                        <div className="box">
                            <div className="box__header">
                                <p>Sign-In</p>
                                <p>Email or mobile phone number</p>
                            </div>
                            <div className="box__body">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="box__input"
                                />
                                <span style={{ fontSize: '13px', fontWeight: '600' }}>Password</span>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="box__input"
                                    onKeyDown={keyPress}
                                />
                                <button disabled={loading} type="submit" onClick={handleSubmit} className="button">
                                    Sign in
                                </button>
                            </div>
                            <div className="box__footer">
                                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                                <Link to="">
                                    <p>Need help?</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="login__new">
                        <p>New to Amazon?</p>
                    </div>
                    <div className="signup">
                        <Link to="/signup">
                            <button className="button">Create your Amazon account</button>
                        </Link>
                    </div>
                </div>
                <div className="login__footer">
                    <div className="footer__line"></div>
                    <div className="footer__container">
                        <div className="footer__text">
                            <Link to="/">
                                <span>Condition of use</span>
                            </Link>
                            <Link to="/">
                                <span>Privacy Notice</span>
                            </Link>
                            <Link to="/">
                                <span>Help</span>
                            </Link>
                        </div>
                        <div className="footer__text">
                            <p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
