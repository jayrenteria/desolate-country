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

function IndividualDetails({ name, dataToShow }) {

    return (
        <div className="info-window">
            <div className='content'>
                <a href={Object.values(dataToShow?.[Object.keys(dataToShow)[0]]?.priests)?.[0]?.link} target="_blank"><h3>{name}</h3></a>
                <TableContainer component={Paper}>
                    <Table aria-label="table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Institution</TableCell>
                                <TableCell>Years at Institution</TableCell>
                                <TableCell>Abuse Claim</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {Object.values(dataToShow).map((item, index) => (
                            <TableRow key={`${item.name_of_institution}-${index}`}>
                                <TableCell component="th" scope="row">
                                    {item.name_of_institution}
                                </TableCell>
                                <TableCell>{item.priests?.[name]?.year}</TableCell>
                                <TableCell>
                                    {item.priests?.[name]?.abuse_claim === true ? (
                                        <Tooltip title={<h2>Abuse claim</h2>} arrow>
                                            <Icon color="secondary">warning</Icon>
                                        </Tooltip>
                                    ) : item.priests?.[name]?.abuse_claim === 'Unknown' ? (
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

export default IndividualDetails;