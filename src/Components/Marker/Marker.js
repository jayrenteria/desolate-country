import React, {useState} from 'react';

import InfoWindow from '../InfoWindow/InfoWindow';

import './styles.css';

function Marker ({ institution }) {
    const [showInfo, setShowInfo] = useState(false);

    return (
      <div className='marker' onClick={() => setShowInfo(!showInfo)}>
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