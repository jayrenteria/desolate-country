import React from 'react';

import './styles.css';

function Header() {

    return (
        <div className="header">
            <div className="title">
                <h1 className="main-header">Desolate Country</h1>
                <h4 className="sub-header">Mapping Catholic Sex Abuse in Native America</h4>
            </div>
            <div className="info">
                <p>Researched by Jack Downey and Kathleen Holscher</p>
                <p>Data as of: Feb 10th, 2021</p>
            </div>
        </div>
    )
};

export default Header;