import React from 'react';
import { FormGroup, Typography } from '@material-ui/core';
import Filter from '../Filter';
import RangeFilter from '../RangeFilter';

import './styles.css';

function FormFilter({
    names,
    names_of_institutions,
    sortValues,
    stats,
    updateSort,
    years
}) {

    return (
        <div>
            <FormGroup>
                <Typography>Filters</Typography>
                <Filter label={'Name'} setSelected={result => updateSort('name', result)} items={names} selected={sortValues['name']}/>
                <Filter label={'Institution'} setSelected={result => updateSort('name_of_institution', result)} items={names_of_institutions} selected={sortValues['name_of_institution']}/>
                <RangeFilter label={'Year Range'} setSelected={result => updateSort('year', result)} items={years}/>
            </FormGroup>
            <div className="stats">
                <div className="stat-group">
                    <span className="stat-number">{stats.claims}</span>
                    <span className="stat-label">Abuse<br/>Claims</span>
                </div>
                <div className="stat-group">
                    <span className="stat-number">{stats.individualCount}</span> 
                    <span className="stat-label">Individuals</span>
                </div>
                <div className="stat-group">
                    <span className="stat-number">{stats.claimsAtNativeInstitutions}</span> 
                    <span className="stat-label">Claims at<br/>Native Institutions</span>
                </div>
            </div>
        </div>
    )
};

export default FormFilter;