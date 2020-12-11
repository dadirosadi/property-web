import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/bad-room.svg';
import Background from '../../assets/background.png';

import './header.styles.scss';

const Header = () => (
    <>
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/'>
                    Home
                </Link>
            </div>

        </div>
        <div className='header-bg'>
            <img className='img-bg' src={Background} alt='header' />
        </div>

    </>
);

export default Header;
