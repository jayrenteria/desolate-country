import React from 'react';

import './styles.css';

function Marker ({ institution, setInstitution }) {
  
  return (
    <div className='marker' onClick={() => setInstitution(institution)} style={{zIndex: institution.abuse_claims}}>
      {institution.abuse_claims ? 
            <div className='claim'>{institution.abuse_claims}</div>
          :
            <div className='no-claim'/>
      }
    </div> 
  )
};

export default Marker;