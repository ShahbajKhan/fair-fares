import React, { useState } from 'react'
import { GoogleMap, LoadScript, Marker, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%'
};

const location = {
    lat: 22.444505,
    lng: 91.819023
};
const onLoad = marker => {
    console.log('marker: ', marker)
}

function Map(props) {
    const { pickFrom, pickTo } = props.rideInfo;
    const [directionResponse, setDirectionResponse] = useState(null);
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyAILe_AdM4vS4LUHP9sCxOa-A-jz1O0Lg8"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={location}
                zoom={10}
            >
                {
                    pickFrom && pickTo && <DirectionsService
                        // required
                        options={{
                            destination: pickTo,
                            origin: pickFrom,
                            travelMode: 'DRIVING'
                        }}
                        // required
                        callback={res => {
                            if (res !== null) {
                                setDirectionResponse(res);
                            }
                        }}
                    />
                }
                {
                    directionResponse && <DirectionsRenderer
                        // required
                        options={{
                            directions: directionResponse
                        }}
                    />
                }
                
                 <Marker
                        onLoad={onLoad}
                        position={location}
                    />
                

            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(Map)