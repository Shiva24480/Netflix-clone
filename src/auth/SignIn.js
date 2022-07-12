import React, { useEffect, useRef } from 'react'
import './SignIn.css'
import { auth } from '../firebase'
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom'

function SignIn() {
    const navigate = useNavigate();
    let user = useSelector(selectUser);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleRegister = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            // console.log(authUser);
        }).catch((error) => {
            alert(error.message);
        })
    }

    console.log(user, "hello");

    const handleSubmit = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            // console.log(authUser);
        }).catch((error) => {
            alert(error.message);
        })
        navigate('/');
    }

    const handleDeafultLogin = () =>{
        emailRef.current.value = "test@gmail.com";
        passwordRef.current.value = "123456";
        // handleSubmit();
    }

    return (
        <div className='signin'>
            <div className="signin-container">
                <h1>Sign In</h1>
                <div className='form'>
                    <input ref={emailRef} type="email" placeholder='Email' />
                    <input ref={passwordRef} type="password" placeholder='password' />
                    <button onClick={handleSubmit} className='signin-button'>
                        Login
                    </button>
                </div>
                <div className='signup-link'>
                    <p>New to Netflix ?</p>
                    <span
                        onClick={handleRegister}
                    >
                        Sign Up
                    </span>
                </div>
                <div className="deafult-login">
                    <button onClick={handleDeafultLogin} className='default-button'>
                        Default Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SignIn