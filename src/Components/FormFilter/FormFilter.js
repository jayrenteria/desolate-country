import React from 'react';
import { FormGroup, Typography } from '@material-ui/core';
import Filter from '../Filter';
import RangeFilter from '../RangeFilter';

import './styles.css';

function FormFilter({
    names,
    names_of_institutions,
    sortValues,
    updateSort,
    years
}) {

    return (
        <FormGroup>
            <Typography>Filters</Typography>
            <Filter label={'Name'} setSelected={result => updateSort('name', result)} items={names} selected={sortValues['name']}/>
            <Filter label={'Institution'} setSelected={result => updateSort('name_of_institution', result)} items={names_of_institutions} selected={sortValues['name_of_institution']}/>
            <RangeFilter label={'Year Range'} setSelected={result => updateSort('year', result)} items={years}/>
        </FormGroup>
    )
};

export default FormFilter;