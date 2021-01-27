import React from 'react';

import './styles.css';

function InfoWindow({ institution }) {

    return (
        <div className="info-window">
            <p>{institution.name}</p>
            <p>{institution.name_of_institution}</p>
            {institution.years.map(year => 
                <p>
                    {year.year}<br/>
                    {year.abuse_claim ? 'Abuse Claim' : 'No Abuse Claim'}
                </p>
            )}
        </div>
    )
};

export default InfoWindow;