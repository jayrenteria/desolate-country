import React, { useState } from 'react';
import { Button, FormGroup, Typography, IconButton } from '@material-ui/core';
import { PlayCircleFilled, StopRounded } from '@material-ui/icons';
import Filter from '../Filter';
import RangeFilter from '../RangeFilter';

import './styles.css';

function FormFilter({
    names,
    names_of_institutions,
    sortValues,
    stats,
    updateSort,
    shownData
}) {

    const [nameSelected, setNameSelected] = useState(false);
    const [playbackValues, setPlaybackValues] = useState(false);
    const [playbackRunning, setPlaybackRunning] = useState(false);
    const [playbackInterval, setPlaybackInterval] = useState();

    const handleSelected = (result) => {
        updateSort('name', result);
        setNameSelected(result == "" ? false : true);
    }

    const handlePlayback = (stopEarly) => {
        if (stopEarly) {
            clearInterval(playbackInterval);
            setPlaybackRunning(false);
            return;
        }
        // increment value 1 year at a time from beginning
        let start = 1890;
        // calculate first year if exists
        if (shownData) {
            const firstYear = shownData[0]?.year.split('-')[0];
            if (firstYear) {
                start = parseInt(firstYear);
            }
        }
        setPlaybackRunning(true);
        const playback = setInterval(() => {
            setPlaybackInterval(playback);
            setPlaybackValues([1890, start]);
            start++;
            if(start == 2020) {
                setPlaybackValues([1890, start]);
                clearInterval(playback);
                setPlaybackRunning(false);
            }
        }, 200)
    }
        
    return (
        <div>
            <FormGroup>
                <Typography>Filters</Typography>
                <Filter label={'Name'} setSelected={result => handleSelected(result)} items={names} selected={sortValues['name']}/>
                <Filter label={'Institution'} setSelected={result => updateSort('name_of_institution_by_location', result)} items={names_of_institutions} selected={sortValues['name_of_institution_by_location']}/>
                <RangeFilter label={'Year Range'} setSelected={result => updateSort('year', result)} playbackValue={playbackValues} isPlayingBack={playbackRunning} />
                {nameSelected &&
                    <div>
                        {playbackRunning ?
                            <div className="playbutton-container">
                                <IconButton onClick={() => handlePlayback(true)} disabled={!playbackRunning} color="primary">
                                    <StopRounded />
                                </IconButton>
                                <p>Stop movement</p>
                            </div>
                        :
                            <div className="playbutton-container">
                                <IconButton onClick={() => handlePlayback(false)} disabled={playbackRunning} color="primary">
                                    <PlayCircleFilled />
                                </IconButton>
                                <p>Watch this Jesuit Move</p>
                            </div>
                        }
                    </div>
                }
            </FormGroup>
            <div className="stats">
                <div className="stat-group">
                    <span className="stat-label">Accused Individuals</span>
                    <span className="stat-number">{stats.individualsCount}</span> 
                </div>
                <div className="stat-group">
                    <span className="stat-label">Individuals with Allegations from Native Missions</span>
                    <span className="stat-number">{stats.individualsWithClaimsatNativeMissionsCount}</span> 
                </div>
            </div>
        </div>
    )
};

export default FormFilter;