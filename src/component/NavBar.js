import React from 'react';
import {Link} from 'react-router-dom'

function NavBar() {
    return (
        <>
            <Link to="/">Home</Link> <br/>
            <Link to="/about">About</Link>
           
        </>
    );
}

export default NavBar;