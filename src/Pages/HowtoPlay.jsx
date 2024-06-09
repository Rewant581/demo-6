import React from 'react';
import './HowtoPlay.css'; // Import the CSS file

const HowtoPlay = () => {
    return (
        <div className="HowtoPlay">
            <header className="header-section">
                <h1>How to Play</h1>
                <p>Follow these simple steps to start playing and winning!</p>
            </header>

            <section className="steps-section">
                <div className="step">
                    <h2>1. Select a Match</h2>
                    <p>Choose an upcoming match from your favorite sport.</p>
                </div>
                <div className="step">
                    <h2>2. Create Your Team</h2>
                    <p>Use your skills to create the best team from the players available.</p>
                </div>
                <div className="step">
                    <h2>3. Join a League</h2>
                    <p>Pick a contest that suits you and join to compete against others.</p>
                </div>
                <div className="step">
                    <h2>4. Follow the Match</h2>
                    <p>Watch the match and track your team's performance in real-time.</p>
                </div>
                <div className="step">
                    <h2>5. Win and Withdraw</h2>
                    <p>If your team performs well, win big and withdraw your winnings easily.</p>
                </div>
            </section>
        </div>
    );
};

export default HowtoPlay;
