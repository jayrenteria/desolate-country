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
                    </div>
                </>
            }
        </div>
    )
};

export default Instructions;