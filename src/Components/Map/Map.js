import React from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from '../Marker/Marker';

function Map({dataToShow, setInstitution}) {
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
        if ( !data[`${item.latitude}-${item.longitude}`]) {
            data[`${item.latitude}-${item.longitude}`] = {
                name_of_institution: item.name_of_institution,
                latitude: item.latitude,
                longitude: item.longitude,
                institution_type: item.institution_type,
                native_serving_mission: item.native_serving_mission,
                abuse_claim: item.abuse_claim,
                years: []
            }
        }
        data[`${item.latitude}-${item.longitude}`].years.push(item)
        if (!data[`${item.latitude}-${item.longitude}`].abuse_claim && item.abuse_claim) {
            data[`${item.latitude}-${item.longitude}`].abuse_claim = true;
        }
    }

    const mapChangeHandler = mapSettings => {
        console.log(`Zoom level: ${mapSettings.zoom}`)
    }

    return(
        <div style={{width: '100%', height: '800px'}}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: '' }}
                defaultCenter={defaults.center}
                defaultZoom={defaults.zoom}
                onChange={mapChangeHandler}
            >
                {Object.values(data).map(item => {
                    return(
                        <Marker
                            key={`${item.name_of_institution}-${item.name}`}
                            lat={item.latitude}
                            lng={item.longitude}
                            text={item.name_of_institution}
                            institution={item}
                            setInstitution={setInstitution}
                        />
                    )
                })}
            </GoogleMapReact>
        </div>
    )
}

export default Map;