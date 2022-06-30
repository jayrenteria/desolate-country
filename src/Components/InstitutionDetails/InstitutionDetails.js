import React  from 'react';
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

function InstitutionDetails({ institution, setInstitution, institutionSort }) {

    return (
        <div className="info-window">
            <div className='content'>
                {! institutionSort && 
                    <Icon
                        onClick={() => setInstitution(null)}
                        style={{
                            float: 'right',
                            cursor: 'pointer'
                        }}
                    >close</Icon>
                }
                <h3>{institution?.name_of_institution}</h3>
                <TableContainer component={Paper}>
                    <Table aria-label="table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Years at Institution</TableCell>
                                <TableCell>Abuse Claim</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {Object.values(institution?.priests || {}).sort((a, b) => {
                            const aLastName = ((a.name.trim()).split(' ')).pop();
                            const bLastName = ((b.name.trim()).split(' ')).pop();
                            if (aLastName < bLastName) {return -1;}
                            if (aLastName > bLastName) {return 1;}
                            return 0;
                        }).map(priest => (
                            <TableRow key={`${institution.name_of_institution}-${priest.year}-${priest.name}`}>
                                <TableCell component="th" scope="row">
                                    {priest.name}
                                </TableCell>
                                <TableCell>{priest.year}</TableCell>
                                <TableCell>
                                    {priest.abuse_claim === true ? (
                                        <Tooltip title={<h2>Abuse claim</h2>} arrow>
                                            <Icon color="secondary">warning</Icon>
                                        </Tooltip>
                                    ) : priest.abuse_claim === 'Unknown' ? (
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