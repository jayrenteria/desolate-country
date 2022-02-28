/* global google */
import React, {useState, useRef, useEffect} from 'react';
import GoogleMapReact from 'google-map-react';

import geoData from '../../data/BIA_National_LAR_geo.json';
import Marker from '../Marker/Marker';
import Instructions from '../Instructions/Instructions';

import './styles.css';

function Map({dataToShow, setInstitution}) {
    const [mapData, setMapData] = useState({})
    const mapEl = useRef(null);
    // US default center/zoom
    const defaults = {
        center: {
            lat: 43.40757270455663,
            lng: -116.27762044836426
        },
        zoom: 5
    }

    const handleApiLoaded = (map, maps) => {        
        if (mapEl !== undefined) {
            mapEl.current = map;
            // add geo json is for direct files not urls
            mapEl.current.data.addGeoJson(
                geoData
            )
            mapEl.current.data.setStyle({
                fillColor: "orange",
                strokeWeight: 1
            });
        }
      };

    useEffect(() => {
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
                    priests: {},
                    abuse_claims: []
                }
            }
            if (
                item.abuse_claim === true &&
                !data[`${item.latitude}-${item.longitude}`].abuse_claims.includes(item.name)
            ) {
                data[`${item.latitude}-${item.longitude}`].abuse_claims.push(item.name);
            }
            if (!data[`${item.latitude}-${item.longitude}`].priests[item.name]) {
                // add priest
                data[`${item.latitude}-${item.longitude}`].priests[item.name] = {
                    name: item.name,
                    year: item.year,
                    abuse_claim: item.abuse_claim
                }
            } else {
                // update years
                // TODO: what if there is a gap?
                const newYears = data[`${item.latitude}-${item.longitude}`].priests[item.name].year.split('-')[0] + '-' + item.year.split('-')[1];
                data[`${item.latitude}-${item.longitude}`].priests[item.name].year = newYears;
                if (data[`${item.latitude}-${item.longitude}`].priests[item.name].abuse_claim !== true && item.abuse_claim === true) {
                    data[`${item.latitude}-${item.longitude}`].priests[item.name].abuse_claim = true;
                } else if (data[`${item.latitude}-${item.longitude}`].priests[item.name].abuse_claim !== true && item.abuse_claim === 'Unknown') {
                    data[`${item.latitude}-${item.longitude}`].priests[item.name].abuse_claim = 'Unknown';
                }
            }
        }
        setMapData(data);
    }, [dataToShow.length])

    return(
        <div className='map' style={{width: '100%', height: '800px', position: 'relative'}}>
            <div className='button-container'>
                <Instructions />
            </div>
            <GoogleMapReact
                ref={mapEl}
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_KEY }}
                defaultCenter={defaults.center}
                defaultZoom={defaults.zoom}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
            >
                {Object.values(mapData).map((item, index) => {
                    return(
                        <Marker
                            key={`${item.name_of_institution}-${item.name}-${index}`}
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