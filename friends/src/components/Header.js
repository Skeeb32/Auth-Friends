import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <section className='header'>
            <Link to='/'><h1>Home</h1></Link>
            <Link to='/'><h1>Log Out</h1></Link>
        </section>
    )
};

export default Header;