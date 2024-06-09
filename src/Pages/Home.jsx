import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
    const navigate = useNavigate();

    const handleJoinNowClick = () => {
        navigate('/games');
    };

    return (
        <div className="home">
            <header className="hero-section">
                <div className="hero-content">
                    <h1>Welcome to Rewant Fantasy</h1>
                    <p>One Destination for Multiple Games</p>
                    <button className="hero-button" onClick={handleJoinNowClick}>Join Now</button>
                </div>
            </header>

            <section className="features-section">
                <h2>Why Choose Rewant Fantasy?</h2>
                <div className="features">
                    <div className="feature">
                        <h3>Multiple Games</h3>
                        <p>Play Cricket, Football, Ludo, and more...</p>
                    </div>
                    <div className="feature">
                        <h3>Superfast Winnings</h3>
                        <p>Enjoy superfast winnings with super-easy gaming.</p>
                    </div>
                    <div className="feature">
                        <h3>Exciting Contests</h3>
                        <p>Join a wide range of contests and win big prizes.</p>
                    </div>
                </div>
            </section>

            <section className="how-to-play-section">
                <h2>How to Play</h2>
                <div className="steps">
                    <div className="step">
                        <h3>1. Select a Match</h3>
                        <p>Choose an upcoming match from your favorite sport.</p>
                    </div>
                    <div className="step">
                        <h3>2. Create Team</h3>
                        <p>Create your team with the best players using your skills.</p>
                    </div>
                    <div className="step">
                        <h3>3. Join League</h3>
                        <p>From a wide range of contests, choose the one you want to join.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
