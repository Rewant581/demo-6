import React from 'react';
import './Contests.css'; 

const Contests = () => {
    const contests = [
        {
            id: 1,
            name: "Mega Contest",
            prize: "Merchandise & Gift Voucher",
            spots: "200,000"
        },
        {
            id: 2,
            name: "Grand League",
            prize: "Merchandise",
            spots: "100,000"
        },
        {
            id: 3,
            name: "Winner Takes All",
            prize: "Gift Voucher",
            spots: "50,000"
        }
        
    ];

    return (
        <div className="contests">
            <h1>Contests</h1>
            <div className="contests-list">
                {contests.map(contest => (
                    <div key={contest.id} className="contest-card">
                        <h2>{contest.name}</h2>
                        <p><strong>Prize:</strong> {contest.prize}</p>
                        <p><strong>Spots:</strong> {contest.spots}</p>
                        <button className="join-button">Join Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Contests;
