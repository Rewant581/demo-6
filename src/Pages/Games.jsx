import React from 'react';
import './Games.css';

const Games = () => {
    const games = [
        {
            id: 1,
            name: "Cricket",
            description: "Join exciting cricket matches and win big!",
            imageUrl: "/cricket.png"
        },
        {
            id: 2,
            name: "Football",
            description: "Play fantasy football and show your skills!",
            imageUrl: "/football.png"
        },
        {
            id: 3,
            name: "Basketball",
            description: "Participate in thrilling basketball games!",
            imageUrl: "/basketball.png"
        }
        
    ];

    return (
        <div className="games">
            <h1>Games</h1>
            <div className="games-list">
                {games.map(game => (
                    <div key={game.id} className="game-card">
                        <img src={game.imageUrl} alt={game.name} />
                        <h2>{game.name}</h2>
                        <p>{game.description}</p>
                        <button className="join-button">Join Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Games;
