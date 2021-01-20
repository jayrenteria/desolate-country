import React from 'react';

import './styles.css';

function Footer() {

    return (
        <footer>
            <div class="footer-container">
                <div class="left"></div>
                <div class="center"></div>
                <div class="right">&copy; {(new Date().getFullYear())} Jack Downey and Kathleen Holscher</div>
            </div>
        </footer>
    )
};

export default Footer;