import React from 'react';

import './styles.css';

function Footer() {

    return (
        <footer>
            <div className="footer-container">
                <div className="left"></div>
                <div className="center"></div>
                <div className="right">&copy; {(new Date().getFullYear())} Jack Downey and Kathleen Holscher</div>
            </div>
        </footer>
    )
};

export default Footer;