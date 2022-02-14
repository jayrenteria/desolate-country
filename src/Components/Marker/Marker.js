import React from 'react';

import './styles.css';

function Marker ({ institution, setInstitution }) {
  
  return (
    <div className='marker' onClick={() => setInstitution(institution)} style={{zIndex: institution.abuse_claims}}>
      {institution.abuse_claims ? 
            <div className='dot claim'>{institution.abuse_claims}</div>
          :
            <div className='dot no-claim'/>
      }
    </div> 
  )
};

export default Marker;