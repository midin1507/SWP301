import React from 'react'
import '../assets/css/ViewInformation.css'
import HeaderComp from './HeaderComp';
import FooterComp from './FooterComp';
import avatar from '../assets/img/avatar.jpg';
import { Link } from 'react-router-dom';


const ViewInformation = () => {
    return (
        <div className='container'>
            {<HeaderComp />}
            <div className='main-view'>
                <div className='title-avatar'>
                    <div className='title'>
                        <h2>Profile</h2>
                    </div>
                    <div className='avatar'>
                        <img src={avatar} alt="Avatar" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
                    </div>
                </div>
                <div className='content'>
                    <div className='content_item'>
                        <p className="label">Full Name:</p>
                        <p className="value"></p>
                    </div>
                    <div className='content_item'>
                        <p className="label">Email:</p>
                    </div>
                    <div className='content_item'>
                        <p className="label">Username:</p>
                    </div>
                    <div className='content_item'>
                        <p className="label" htmlFor="password">Password:</p>
                    </div>
                    <div className='content_item'>
                        <p className="label">Date Of Birth:</p>
                    </div>
                    <div className='button_edit'>
                        {/* <Link to="/UpdateInformation"> */}
                            <p className="label">Edit</p>
                        {/* </Link> */}
                    </div>
                </div>
            </div>
            {<FooterComp />}

        </div>
    )
}

export default ViewInformation;