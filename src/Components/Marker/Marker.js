import React from 'react';

import './styles.css';

function Marker ({ institution, setInstitution, sortValues }) {
  
  return (
    <div className='marker' onClick={() => setInstitution(institution)} style={{zIndex: institution.abuse_claims.length}}>
      {institution.abuse_claims.length > 0 ? 
            sortValues?.name ? <div className='dot claim'/> : <div className='dot claim'>{institution.abuse_claims.length}</div>
          :
            <div className='dot no-claim'/>
      }
    </div> 
  )
};

export default Marker;