// WhatsAppButton.js
import React from 'react';
import './WhatsAppButton.css'; // Import CSS for styling

const WhatsAppButton = () => {
    const handleClick = () => {
        window.open('https://web.whatsapp.com/', '_blank');
    };

    return (
        <div className="whatsapp-button" onClick={handleClick}>
            <img src="/pngegg.png" alt="WhatsApp" className="whatsapp-logo" />
        </div>
    );
};

export default WhatsAppButton;
