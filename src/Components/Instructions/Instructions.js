import React, { useState } from 'react';
import Button from "@material-ui/core/Button";

import './styles.css';

function Instructions() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div class="instructions">
            <Button onClick={() => setIsOpen(!isOpen)} variant="contained">Instructions</Button>
            {isOpen && 
                <>
                    <div class="arrow-up"></div>
                    <div class="instructions-popup">
                        <h2>Map Instructions</h2>
                        <ol>
                            <li>You can filter the data to specific individuals or institutions, as well as the range of years you would like to see data for.</li>
                            <li>Then, click on a bubble to get more information about that particular institution.</li>
                            <li>Those details will show up on the right side of the map.</li>
                        </ol>
                        <h3>Key</h3>
                        <div class="marker-container">
                            <div className='dot claim'/>
                            <span className='key-label'>Institutions with Accusations</span>
                        </div>
                        <div class="marker-container">
                            <div className='dot no-claim'/>
                            <span className='key-label'>Institutions, no Accusations</span>
                        </div>
                        <div class="marker-container">
                            <div className='reservation'/>
                            <span className='key-label'>Reservation Land</span>
                        </div>
                    </div>
                </>
            }
        </div>
    )
};

export default Instructions;