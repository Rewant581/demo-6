import React from 'react';
import { Link } from 'react-router-dom';
import WhatsAppButton from '../whatsapp/WhatsAppButton'; 
import './Footer.css';

const Footer = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/index.pdf'; // Ensure the path matches the file location
        link.download = 'index.pdf'; // Name of the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <Link to="/privacy">Privacy Policy</Link>
                    <Link to="/rules">Rules and Regulations</Link>
                    <Link to="/policies">Fantasy Policies</Link>
                    <Link to="/contact">Contact Us</Link>
                </div>
                <div className="footer-download">
                    <button className="download-button" onClick={handleDownload}>Download Now</button>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Rewant Fantasy. All rights reserved.</p>
            </div>
            <WhatsAppButton /> {/* Add WhatsAppButton */}
        </footer>
    );
};

export default Footer;
