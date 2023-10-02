import React from 'react';
import './footer.css';

const Footer = () => {

    return (
        <div className="footer-container">
            <div className="footer-links">
                {/* <a href= '#'>About Us</a> */}
                {/* <a href= '#'>Contact</a> */}
                {/* <a href= '#'>Privacy Policy</a> */}
                {/* <a href= '#'>Terms of Service</a> */}
            </div>
            <p>&copy; {new Date().getFullYear()} Stellar</p>
        </div>
    );
};

export default Footer;