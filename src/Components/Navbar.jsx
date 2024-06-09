import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ loggedInUser, onLogout }) => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">Fantasy Sports</Link>
            </div>
            <ul className="navbar-links">
                <li><Link to="/games">Games</Link></li>
                <li><Link to="/contests">Contests</Link></li>
                <li><Link to="/leaderboard">Leaderboard</Link></li>
                <li><Link to="/howtoplay">How to Play</Link></li>
                {loggedInUser ? (
                    <>
                        <li>Welcome, {loggedInUser}</li>
                        <li><button className="navbar-login" onClick={onLogout}>Logout</button></li>
                    </>
                ) : (
                    <>
                        <li><Link to="/login" className="navbar-login">Login</Link></li>
                        <li><Link to="/register" className="navbar-register">Register</Link></li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
