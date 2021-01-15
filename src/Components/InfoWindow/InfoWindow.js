import React from 'react';

import './styles.css';

function InfoWindow({ institution }) {

    return (
        <div className="info-window">
            <p>{institution.name_of_institution}</p>
        </div>
    )
};

export default InfoWindow;