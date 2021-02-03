import React, {useState} from 'react';
import {School, Business} from '@material-ui/icons';

import InfoWindow from '../InfoWindow/InfoWindow';

import './styles.css';

function Marker ({ institution }) {
    const [showInfo, setShowInfo] = useState(false);

    const closeWindow = () => {
        setShowInfo(false);
    }

    return [
      <div className={'marker'} onClick={() => setShowInfo(!showInfo)}>
        {institution.institution_type.includes('School') ? 
            <School color={institution.abuse_claim ? 'secondary' : ''}/>
        :
            <Business color={institution.abuse_claim ? 'secondary' : ''} />
        }
      </div>,
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