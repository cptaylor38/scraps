import React from 'react';
import './navbar.css';

const Navbar = ({ user, onClick }) => {

    return (
        <div className="mainNavbar">
            <div className='logoHolder container'>
                <h1>SCRAPS</h1>
            </div>
            <div className='messageHolder container'>
                <h3>Welcome, {user ? user : ''} </h3>
            </div>
            <div className='faceHolder container'>
                <img src='https://slack-imgs.com/?c=1&url=https%3A%2F%2Fthumbs.gfycat.com%2FOrdinaryPartialAmericanredsquirrel-size_restricted.gif' alt='monkey gif' id='facePic'></img>
            </div>
        </div>
    );
}

export default Navbar;