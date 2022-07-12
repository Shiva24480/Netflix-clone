import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import userSlice, { selectUser } from '../features/userSlice'
import avatar from '../images/Netflix-avatar.png'
import './Profile.css'
import { auth } from '../firebase'

function Profile() {
    const user = useSelector(selectUser);

    return (
        <div className='profile'>
            <Navbar />
            <div className="profile-body">
                <h1>Edit Profile</h1>
                <div className="profile-info">
                    <img src={avatar} alt="" />
                    <div className="profile-details">
                        <h2>{user.email}</h2>
                        <button onClick={() => auth.signOut()} className='profile-signout'>Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile