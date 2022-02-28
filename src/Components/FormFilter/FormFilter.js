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
    updateSort
}) {

    return (
        <div>
            <FormGroup>
                <Typography>Filters</Typography>
                <Filter label={'Name'} setSelected={result => updateSort('name', result)} items={names} selected={sortValues['name']}/>
                <Filter label={'Institution'} setSelected={result => updateSort('name_of_institution', result)} items={names_of_institutions} selected={sortValues['name_of_institution']}/>
                <RangeFilter label={'Year Range'} setSelected={result => updateSort('year', result)}/>
            </FormGroup>
            <div className="stats">
                <div className="stat-group">
                    <span className="stat-number">{stats.individualsCount}</span> 
                    <span className="stat-label">Accused Individuals</span>
                </div>
                <div className="stat-group">
                    <span className="stat-number">{stats.individualsWithClaimsatNativeMissionsCount}</span> 
                    <span className="stat-label">Individuals with Allegations from Native
Missions</span>
                </div>
            </div>
        </div>
    )
};

export default FormFilter;