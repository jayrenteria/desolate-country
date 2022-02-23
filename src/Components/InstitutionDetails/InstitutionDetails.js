import React from 'react';
import { Icon, 
    Table, 
    TableCell, 
    TableBody, 
    TableRow, 
    TableHead, 
    TableContainer, 
    Tooltip,
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
                            <TableRow key={`${institution.name_of_institution}-${year.year}-${year.name}`}>
                                <TableCell component="th" scope="row">
                                    {year.name}
                                </TableCell>
                                <TableCell>{year.year}</TableCell>
                                <TableCell>
                                    {year.abuse_claim === true ? (
                                        <Tooltip title={<h2>Abuse claim</h2>} arrow>
                                            <Icon color="secondary">warning</Icon>
                                        </Tooltip>
                                    ) : year.abuse_claim === 'Unknown' ? (
                                        <Tooltip title={<h2>Unknown abuse claim status</h2>} arrow>
                                            <Icon color="primary">help</Icon>
                                        </Tooltip>
                                    ) : (
                                        <Tooltip title={<h2>No abuse claim</h2>} arrow>
                                            <Icon color="primary">close</Icon>
                                        </Tooltip>
                                    )}
                                </TableCell>
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