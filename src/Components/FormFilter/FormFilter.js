import React, { useState } from 'react';
import { Button, FormGroup, Typography } from '@material-ui/core';
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

    const [nameSelected, setNameSelected] = useState(false);
    const [playbackValues, setPlaybackValues] = useState(false);

    const handleSelected = (result) => {
        updateSort('name', result);
        setNameSelected(result == "" ? false : true);
    }

    const handlePlayback = () => {
        // increment value 1 year at a time from beginning
        let start = 1890;
        const playback = setInterval(() => {
            setPlaybackValues([1890, start]);
            start++;
            if(start == 2020) {
                clearInterval(playback);
            }
        }, 200)
    }
        
    return (
        <div>
            <FormGroup>
                <Typography>Filters</Typography>
                <Filter label={'Name'} setSelected={result => handleSelected(result)} items={names} selected={sortValues['name']}/>
                <Filter label={'Institution'} setSelected={result => updateSort('name_of_institution', result)} items={names_of_institutions} selected={sortValues['name_of_institution']}/>
                <RangeFilter label={'Year Range'} setSelected={result => updateSort('year', result)} playbackValue={playbackValues}/>
                {nameSelected &&
                    <div>
                        <Button onClick={() => handlePlayback()}>Playback</Button>
                    </div>
                }
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