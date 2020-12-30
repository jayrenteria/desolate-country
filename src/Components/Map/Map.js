import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from '../Marker/Marker';

function Map({dataToShow}) {
    // US default center/zoom
    const defaults = {
        center: {
            lat: 37.6762908,
            lng: -101.3426515
        },
        zoom: 5
    }

    return(
        <div style={{width: '100%', height: '800px'}}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: '' }}
                defaultCenter={defaults.center}
                defaultZoom={defaults.zoom}
            >
                {dataToShow.map((institution) => {
                    return(
                        <Marker
                            lat={institution.latitude}
                            lng={institution.longitude}
                            text={institution.name_of_institution}
                        />
                    )
                })}
            </GoogleMapReact>
        </div>
    )
}

export default Map;