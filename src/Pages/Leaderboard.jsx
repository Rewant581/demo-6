import React, { useState, useEffect } from 'react';
import './Leaderboard.css'; 

const Leaderboard = () => {
    const [leaders, setLeaders] = useState([]);

    useEffect(() => {
        
        const mockLeaders = [
            { id: 1, name: 'Player 1', points: 1500 },
            { id: 2, name: 'Player 2', points: 1400 },
            { id: 3, name: 'Player 3', points: 1300 },
            { id: 4, name: 'Player 4', points: 1200 },
            { id: 5, name: 'Player 5', points: 1100 },
        ];
        setLeaders(mockLeaders);
    }, []);

    return (
        <div className="leaderboard">
            <h1>Leaderboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {leaders.map((leader, index) => (
                        <tr key={leader.id}>
                            <td>{index + 1}</td>
                            <td>{leader.name}</td>
                            <td>{leader.points}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Leaderboard;
