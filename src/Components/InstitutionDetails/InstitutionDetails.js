import React from 'react';
import { Icon, 
    Table, 
    TableCell, 
    TableBody, 
    TableRow, 
    TableHead, 
    TableContainer, 
    Paper } from '@material-ui/core';

import './styles.css';

function InstitutionDetails({ institution }) {

    return (
        <div className="info-window">
            <div className='content'>
                <h3>{institution.name_of_institution}</h3>
                <TableContainer component={Paper}>
                    <Table aria-label="table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Academic Year</TableCell>
                                <TableCell>Abuse Claim</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {institution.years.map(year => (
                            <TableRow key={year.name}>
                                <TableCell component="th" scope="row">
                                    {year.name}
                                </TableCell>
                                <TableCell>{year.year}</TableCell>
                                <TableCell>{year.abuse_claim? 
                                    <Icon color="secondary">warning</Icon>:
                                    <Icon color="primary">close</Icon>}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
};

export default InstitutionDetails;