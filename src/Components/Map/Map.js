import React, { useState, useEffect } from 'react';

import GoogleMapReact from 'google-map-react';

function Map() {

    const defaults = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    }


    return(
        <div style={{width: '100%', height: '800px'}}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: '' }}
                defaultCenter={defaults.center}
                defaultZoom={defaults.zoom}
            />
        </div>
    )
}

export default Map;