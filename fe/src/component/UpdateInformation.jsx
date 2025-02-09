import React from 'react';
import '../assets/css/UpdateInformation.css'
import HeaderComp from './HeaderComp';
import FooterComp from './FooterComp';
import avatar from '../assets/img/avatar.jpg';

const UpdateInformation = () => {
    return (
        <div className='container'>
            {<HeaderComp />}
            <div className='main-view'>
                <div className='title-avatar'>
                    <div className='title'>
                        <h3>Update Profile</h3>
                    </div>
                    <div className='avatar'>
                        <img src={avatar} alt="Avatar" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
                    </div>
                </div>
                <div className='content'>
                    <div className='content_item'>
                        <p>Full Name</p>
                        <input placeholder='nhấp vào đây' />
                    </div>
                    <div className='content_item'>
                        <p>Email</p>
                        <input placeholder='nhấp vào đây' />
                    </div>
                    <div className='content_item'>
                        <p>Username</p>
                        <input placeholder='nhấp vào đây' />
                    </div>
                    <div className='content_item'>
                        <p>Password</p>
                        <input placeholder='nhấp vào đây' />
                    </div>
                    <div className='content_item'>
                        <p>Avatar</p>
                        <input placeholder='nhấp vào đây' />
                    </div>
                    <div className='content_item'>
                        <p>Date Of Birth</p>
                        <input placeholder='nhấp vào đây' />
                    </div>
                    <div className='button_update'>
                        <p>Update</p>
                    </div>
                </div>
            </div>
            {<FooterComp />}
        </div>

    )
}

export default UpdateInformation