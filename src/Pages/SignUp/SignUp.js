import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../../authContext';
import { useKey } from '../../keypress';

import './SignUp.css';
function SignUp() {
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordConfirm, setpasswordConfirm] = useState();
    const [loading, setLoading] = useState(false);
    const { createUser, user } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== passwordConfirm) {
            return alert('Passwords do not match');
        }
        try {
            setLoading(true);
            await createUser(email, password);
            navigate('/login');
        } catch (e) {
            alert(e.message);
        }
        setLoading(false);
    };
    const keyPress = useKey('Enter', handleSubmit);
    if (user) {
        return <Navigate replace to="/" />;
    } else {
        return (
            <div className="signup__main">
                <div className="signup__header">
                    <Link to="/">
                        <div className="signup__logo"></div>
                    </Link>
                </div>
                <div className="signup__form">
                    <div className="signup__body">
                        <div className="box">
                            <div className="box__header mb-14">
                                <span>Create account</span>
                            </div>
                            <div className="box__body">
                                <div className="box__form">
                                    <p>Email</p>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="box__input"
                                    />
                                </div>
                                <div className="box__form">
                                    <p>Password</p>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="box__input"
                                    />
                                    <div className="password__alert">
                                        <div className="alert__icon"></div>
                                        <div className="alert__content">Passwords must be at least 6 characters.</div>
                                    </div>
                                </div>
                                <div className="box__form">
                                    <p>Re-enter your password</p>
                                    <input
                                        type="password"
                                        value={passwordConfirm}
                                        onChange={(e) => setpasswordConfirm(e.target.value)}
                                        className="box__input"
                                        onKeyDown={keyPress}
                                    />
                                </div>

                                <button disabled={loading} type="submit" className="button" onClick={handleSubmit}>
                                    Continue
                                </button>
                            </div>
                            <div className="box__footer mb-14">
                                <span>
                                    By creating an account, you agree to Amazon's Conditions of Use and Privacy Notice.
                                </span>
                                <div className="box__footerLine"></div>
                                <div className="box__footerContent">
                                    <div className="box__footerText">Already have an account?</div>

                                    <Link to="/login">Sign-In</Link>
                                </div>
                                <div className="box__footerContent">
                                    <div className="box__footerText">Buying for work?</div>

                                    <Link to="/login">Create a free business account</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="signup__footer">
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

export default SignUp;
