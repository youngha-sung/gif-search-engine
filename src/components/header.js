import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <Link to={{ pathname: '/' }}>
                Search
            </Link>
            <Link to={{ pathname: '/favorites' }}>
                Favorites
            </Link>
        </div>
    );
}

export default Header;
