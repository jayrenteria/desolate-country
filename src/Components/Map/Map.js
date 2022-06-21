/* global google */
import React, {useState, useRef, useEffect} from 'react';
import GoogleMapReact from 'google-map-react';

import geoData from '../../data/BIA_National_LAR_geo.json';
import curvedGeoData from '../../data/BIA_National_LAR_curved_geo.json';
import Marker from '../Marker/Marker';
import Instructions from '../Instructions/Instructions';

import './styles.css';

function Map({dataToShow, setInstitution, setMapDataParent, sortValues}) {
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
            // this is for curveRings that we had to pull directly via query
            mapEl.current.data.addGeoJson(
                curvedGeoData
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
            // simplify GPS since there are accuracy issues
            // TODO: remove toFixed when the data is normalized
            const key = `${item.latitude.toFixed(3)}-${item.longitude.toFixed(3)}`;
            if ( !data[key]) {
                data[key] = {
                    name_of_institution: item.name_of_institution,
                    name_of_institution_by_location: item.name_of_institution_by_location,
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
                !data[key].abuse_claims.includes(item.name)
            ) {
                data[key].abuse_claims.push(item.name);
            }
            if (!data[key].priests[item.name]) {
                // add priest
                data[key].priests[item.name] = {
                    name: item.name,
                    year: item.year,
                    abuse_claim: item.abuse_claim,
                    link: item.link
                }
            } else {
                // update years
                const years = data[key].priests[item.name].year.split(', ');
                const lastYear = years[years.length - 1];
                if (lastYear.split('-')[1] == item.year.split('-')[0]) {
                    // no gaps
                    const newLast = lastYear.split('-')[0] + '-' + item.year.split('-')[1];
                    years[years.length - 1] = newLast;
                    data[key].priests[item.name].year = years.join(', ');
                } else {
                    // new gap
                    years.push(item.year);
                    data[key].priests[item.name].year = years.join(', ');
                }

                if (data[key].priests[item.name].abuse_claim !== true && item.abuse_claim === true) {
                    data[key].priests[item.name].abuse_claim = true;
                } else if (data[key].priests[item.name].abuse_claim !== true && item.abuse_claim === 'Unknown') {
                    data[key].priests[item.name].abuse_claim = 'Unknown';
                }
            }
        }
        setMapData(data);
        setMapDataParent(data);
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
                            sortValues={sortValues}
                        />
                    )
                })}
            </GoogleMapReact>
        </div>
    )
}

export default Map;