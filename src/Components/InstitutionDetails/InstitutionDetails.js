import React from 'react';
import Icon from '@material-ui/core/Icon';

import './styles.css';

function InstitutionDetails({ institution }) {

    return (
        <div className="info-window">
            <div className='content'>
                <h3>{institution.name_of_institution}</h3>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Academic Year</th>
                        <th>Abuse Claim</th>
                    </tr>
                {institution.years.map(year => 
                    <tr>
                        <td>{year.name}</td>
                        <td>{year.year}</td>
                        <td>{
                            year.abuse_claim? 
                                <Icon color="secondary">warning</Icon>:
                                <Icon color="primary">close</Icon>}</td>
                    </tr>
                )}
                </table>
            </div>
        </div>
    )
};

export default InstitutionDetails;