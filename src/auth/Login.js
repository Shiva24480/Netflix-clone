import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUser } from '../features/userSlice';
import logo from '../images/logo.png'
import './Login.css'
import SignIn from './SignIn';
// import SignUp from './SignUp';

function Login() {
    const user = useSelector(selectUser);
    const [signIn, setSignIn] = useState(false);

    return (
        <div className='login'>
            <div className="login-background">
                <img className='login-logo' src={logo} alt="" />
                <button className='login-button' onClick={() => setSignIn(true)}>
                    Sign In
                </button>
                <div className="login-gradient"></div>
            </div>

            <div className="login-body">
                {signIn ? (<SignIn />) :
                    (
                        <>
                            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                                Unlimited films, TV programmes and more.
                            </h1>
                            <h2>Watch anywhere. Cancel at any time.</h2>
                            <h3>Ready tp watch? Enter your email to create or restart your membership</h3>

                            <div className="login-input">
                                <button className='login-getstarted' onClick={() => setSignIn(true)}>GET STARTED</button>
                            </div>
                        </>
                    )}

            </div>
        </div>
    )
}

export default Login