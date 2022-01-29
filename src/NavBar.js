import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">HomePage</Link>
            </li>
            <li>
                <Link to="/AboutPage">About</Link>
            </li>
            <li>
                <Link to="/Articles-List">ArticlesList</Link>
            </li>
        </ul>
    </nav>

);

export default NavBar;