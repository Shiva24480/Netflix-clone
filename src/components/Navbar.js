import React, { useState, useEffect } from 'react';
import "./Navbar.css"
import netflixlogo from '../images/logo.png'
import avatar from '../images/Netflix-avatar.png'
import { Link } from 'react-router-dom';

function Navbar() {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };
    window.addEventListener('scroll', toggleVisible);

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) { // if scroll down = hide the navbar
                setShow(false);
            } else { // if scroll up = show the navbar
                setShow(true);
            }

            // remember current page location to use in the next move
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            // cleanup function
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);


    return (
        <nav className={show ? "active" : "hidden"} style={visible ? { backgroundColor: 'black' } : { backgroundColor: 'transparent' }}>
            <div className="nav-container">
                <Link to='/'>
                    <img className='nav-logo' src={netflixlogo} alt="" />
                </Link>
                <div style={{ display: 'flex' }}>
                    <Link to='/mylist'>
                        <button className='nav-button'>My List</button>
                    </Link>

                    <Link to='/profile'>
                        <img className='nav-avatar' src={avatar} alt="" />
                    </Link>
                </div>
            </div>
        </nav >
    );
}


export default Navbar