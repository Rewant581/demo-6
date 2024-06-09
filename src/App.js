import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Games from './Pages/Games';
import Contests from './Pages/Contests';
import Leaderboard from './Pages/Leaderboard';
import HowtoPlay from './Pages/HowtoPlay';
import Privacy from './Pages/Privacy';
import Rules from './Pages/Rules';
import Policies from './Pages/Policies';
import Contact from './Pages/Contact';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar';
import Register from './Pages/Register'; 
import Login from './Pages/Login';  
import WhatsAppButton from './Components/whatsapp/WhatsAppButton'; 
import './App.css';

const App = () => {
    const [loggedInUser, setLoggedInUser] = useState(null);

    const handleRegister = (userData) => {
        // Handle registration logic here (e.g., sending data to backend)
        console.log('Registered user:', userData);
        setLoggedInUser(userData.username);
    };

    const handleLogin = (userData) => {
        // Handle login logic here (e.g., sending data to backend)
        console.log('Logged in user:', userData);
        setLoggedInUser(userData.username);
    };

    const handleLogout = () => {
        // Handle logout logic here
        setLoggedInUser(null);
    };

    return (
        <Router>
            <Navbar loggedInUser={loggedInUser} onLogout={handleLogout} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/games" element={<Games />} />
                <Route path="/contests" element={<Contests />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/howtoplay" element={<HowtoPlay />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/rules" element={<Rules />} />
                <Route path="/policies" element={<Policies />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/register" element={<Register onRegister={handleRegister} />} />
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
            </Routes>
            <Footer />
            <WhatsAppButton /> {/* Add WhatsAppButton */}
        </Router>
    );
};

export default App;
