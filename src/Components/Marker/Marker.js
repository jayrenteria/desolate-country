import React, {useState} from 'react';
import classnames from 'classnames';

import InfoWindow from '../InfoWindow/InfoWindow';

import './styles.css';

function Marker ({ institution }) {
    const [showInfo, setShowInfo] = useState(false);

    // setup classes
    const markerClasses = classnames({
        'marker': true,
        'abuse': institution.abuse_claim
    })
    return (
      <div className={markerClasses} onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? 
              <InfoWindow
                  institution={institution}
              />  
          :    
              null 
          }
      </div>
    )
};

export default Marker;