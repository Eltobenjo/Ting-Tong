import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './NavBar';

function Header() {
    return (
        <Router>
            <NavBar />
        </Router>
    )
}

export default Header
