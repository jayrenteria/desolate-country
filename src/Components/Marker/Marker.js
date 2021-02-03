import React, {useState} from 'react';
import classnames from 'classnames';

import InfoWindow from '../InfoWindow/InfoWindow';

import './styles.css';

function Marker ({ institution }) {
    const [showInfo, setShowInfo] = useState(false);

    const closeWindow = () => {
        setShowInfo(false);
    }

    // setup classes
    const markerClasses = classnames({
        'marker': true,
        'abuse': institution.abuse_claim
    })
    return [
      <div className={markerClasses} onClick={() => setShowInfo(!showInfo)}></div>,
      showInfo ? 
        <InfoWindow
            institution={institution}
            closeWindow={closeWindow}
        />  
      :    
        null 
    ]
};

export default Marker;