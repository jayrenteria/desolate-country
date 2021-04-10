import React from 'react';
import {School, Business} from '@material-ui/icons';

import './styles.css';

function Marker ({ institution, setInstitution, transparentIcon }) {
  console.log(transparentIcon)
    return (
      <div className={'marker'} onClick={() => setInstitution(institution)}>
        {transparentIcon
          ? 
            <div className="clickable-area"/>
          :
            institution.institution_type.includes('School') ? 
              <School color={institution.abuse_claim ? 'secondary' : ''}/>
            :
              <Business color={institution.abuse_claim ? 'secondary' : ''} />
        }
      </div> 
    )
};

export default Marker;