import React from 'react';
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

    let data = {}
    for (let i = 0; i < dataToShow.length; i++) {
        const item = dataToShow[i];
        if ( !data[`${item.latitude}-${item.longitude}-${item.name}`]) {
            data[`${item.latitude}-${item.longitude}-${item.name}`] = {
                name_of_institution: item.name_of_institution,
                name: item.name,
                latitude: item.latitude,
                longitude: item.longitude,
                institution_type: item.institution_type,
                native_serving_mission: item.native_serving_mission,
                abuse_claim: item.native_serving_mission,
                years: [item]
            }
        }
        data[`${item.latitude}-${item.longitude}-${item.name}`].years.push(item)
        if (!data[`${item.latitude}-${item.longitude}-${item.name}`].abuse_claim && item.abuse_claim) {
            data[`${item.latitude}-${item.longitude}-${item.name}`].abuse_claim = true;
        }
    }

    return(
        <div style={{width: '100%', height: '800px'}}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: '' }}
                defaultCenter={defaults.center}
                defaultZoom={defaults.zoom}
            >
                {Object.values(data).map(item => {
                    return(
                        <Marker
                            key={`${item.name_of_institution}-${item.name}`}
                            lat={item.latitude}
                            lng={item.longitude}
                            text={item.name_of_institution}
                            institution={item}
                        />
                    )
                })}
            </GoogleMapReact>
        </div>
    )
}

export default Map;