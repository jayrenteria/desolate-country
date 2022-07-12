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
                <p>Data based on <a href="https://www.jesuitswest.org/wp-content/uploads/sites/13/2020/12/JW_List_1207_EnglishR12.pdf" target='_blank' >Jesuits West Province List of Credible Claims</a></p>
                <p>Data as of: Feb 10th, 2021</p>
            </div>
        </div>
    )
};

export default Header;